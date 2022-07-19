<?php

namespace Filament\Forms\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;

class MakeFieldCommand extends Command
{
    use Concerns\CanManipulateFiles;
    use Concerns\CanValidateInput;

    protected $description = 'Creates a form field class and view.';

    protected $signature = 'make:form-field {name?} {--F|force}';

    public function handle(): int
    {
        $field = (string) Str::of($this->argument('name') ?? $this->askRequired('Name (e.g. `RangeSlider`)', 'name'))
            ->trim('/')
            ->trim('\\')
            ->trim(' ')
            ->replace('/', '\\');
        $fieldClass = (string) Str::of($field)->afterLast('\\');
        $fieldNamespace = Str::of($field)->contains('\\') ?
            (string) Str::of($field)->beforeLast('\\') :
            '';

        $view = Str::of($field)
            ->prepend('forms\\components\\')
            ->explode('\\')
            ->map(static fn ($segment) => Str::kebab($segment))
            ->implode('.');

        $path = app_path(
            (string) Str::of($field)
                ->prepend('Forms\\Components\\')
                ->replace('\\', '/')
                ->append('.php'),
        );
        $viewPath = resource_path(
            (string) Str::of($view)
                ->replace('.', '/')
                ->prepend('views/')
                ->append('.blade.php'),
        );

        if (! $this->option('force') && $this->checkForCollision([
            $path,
        ])) {
            return static::INVALID;
        }

        $this->copyStubToApp('Field', $path, [
            'class' => $fieldClass,
            'namespace' => 'App\\Forms\\Components' . ($fieldNamespace !== '' ? "\\{$fieldNamespace}" : ''),
            'view' => $view,
        ]);

        if (! $this->fileExists($viewPath)) {
            $this->copyStubToApp('FieldView', $viewPath);
        }

        $this->components->info("Successfully created {$field}!");

        return static::SUCCESS;
    }
}
