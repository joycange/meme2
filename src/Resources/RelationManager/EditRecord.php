<?php

namespace Filament\Resources\RelationManager;

use Filament\Filament;
use Filament\Forms\HasForm;
use Filament\Resources\Forms\Form;
use Illuminate\Database\Eloquent\Model;
use Livewire\Component;

class EditRecord extends Component
{
    use HasForm;

    public $cancelButtonLabel;

    public $manager;

    public $owner;

    public $record = [];

    public $saveButtonLabel;

    public $savedMessage;

    protected $listeners = [
        'switchRelationManagerEditRecord' => 'switchRecord',
    ];

    public function getForm()
    {
        $form = Form::make()
            ->context(static::class)
            ->model(get_class($this->owner->{$this->getRelationship()}()->getModel()))
            ->submitMethod('save');

        if ($this->record instanceof Model) {
            $form->record($this->record);
        }

        return $this->manager::form($form);
    }

    public function getQuery()
    {
        return $this->owner->{$this->getRelationship()}();
    }

    public function getRelationship()
    {
        $manager = $this->manager;

        return $manager::$relationship;
    }

    public function mount()
    {
        $this->callHook('beforeFillOnEdit');

        $this->fillWithFormDefaults();

        $this->callHook('afterFillOnEdit');
    }

    public function render()
    {
        return view('filament::resources.relation-manager.edit-record');
    }

    public function save()
    {
        abort_unless(Filament::can('update', $this->record), 403);

        $this->callHook('beforeValidateOnEdit');

        $this->validateTemporaryUploadedFiles();

        $this->storeTemporaryUploadedFiles();

        $this->validate();

        $this->callHook('afterValidateOnEdit');

        $this->callHook('beforeSave');

        $this->record->save();

        $this->callHook('afterSave');

        $this->emit('refreshRelationManagerList', $this->manager);

        $this->dispatchBrowserEvent('close', "{$this->manager}RelationManagerEditModal");
        $this->dispatchBrowserEvent('notify', __($this->savedMessage));

        $this->record = [];
    }

    public function switchRecord($manager, $record)
    {
        if ($manager !== $this->manager) {
            return;
        }

        $this->record = $this->getQuery()->find($record);
        $this->resetTemporaryUploadedFiles();
    }

    protected function callHook($hook)
    {
        if (! method_exists($this, $hook)) {
            return;
        }

        $this->{$hook}();
    }
}
