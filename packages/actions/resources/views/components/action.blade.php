@props([
    'action',
    'dynamicComponent',
    'icon' => null,
])

@php
    $isDisabled = $action->isDisabled();
    $url = $action->getUrl();
    $tooltip = $action->getTooltip();
    $tooltipIsNotEmpty = str($tooltip)->isNotEmpty();
@endphp

@if ($tooltipIsNotEmpty) <div x-data x-tooltip.raw="{{ $tooltip }}"> @endif
    <x-dynamic-component
        :color="$action->getColor()"
        :component="$dynamicComponent"
        :disabled="$isDisabled"
        :form="$action->getFormToSubmit()"
        :form-id="$action->getFormId()"
        :href="$isDisabled ? null : $url"
        :icon="$icon ?? $action->getIcon()"
        :icon-size="$action->getIconSize()"
        :key-bindings="$action->getKeyBindings()"
        :label-sr-only="$action->isLabelHidden()"
        :tag="$url ? 'a' : 'button'"
        :target="($url && $action->shouldOpenUrlInNewTab()) ? '_blank' : null"
        :tooltip="$tooltip"
        :type="$action->canSubmitForm() ? 'submit' : 'button'"
        :wire:click="$action->getLivewireClickHandler()"
        :wire:target="$action->getLivewireTarget()"
        :x-on:click="$action->getAlpineClickHandler()"
        :attributes="
            \Filament\Support\prepare_inherited_attributes($attributes)
                ->merge($action->getExtraAttributes(), escape: false)
                ->class(['fi-ac-action'])
        "
    >
        {{ $slot }}
    </x-dynamic-component>
@if ($tooltipIsNotEmpty) </div> @endif
