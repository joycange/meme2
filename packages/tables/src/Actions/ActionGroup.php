<?php

namespace Filament\Tables\Actions;

use Filament\Support\Actions\ActionGroup as BaseActionGroup;
use Filament\Support\Actions\Concerns\InteractsWithRecord;

class ActionGroup extends BaseActionGroup
{
    use InteractsWithRecord;

    protected string $view = 'tables::actions.group';
    
    protected string $type = 'icon';

    public function getActions(): array
    {
        $actions = [];

        foreach ($this->actions as $action) {
            $actions[$action->getName()] = $action->grouped()->record($this->getRecord());
        }

        return $actions;
    }
    
    public function button(): static
    {
        $this->type = 'button';

        return $this;
    }
}
