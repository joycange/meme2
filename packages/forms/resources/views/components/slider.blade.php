@php
    use Filament\Support\Facades\FilamentView;

    $id = $getId();
    $statePath = $getStatePath();
    $range = $getRange();
    $step = $getStep();
    $start = $getStart();
    $margin = $getMargin();
    $limit = $getLimit();
    $connect = $getConnect();
    $direction = $getDirection();
    $orientation = $getOrientation();
    $behaviour = $getBehaviour();
    $tooltips = $getTooltips();
    $format = $getFormat();
    $pips = $getPips();
    $ariaFormat = $getAriaFormat();
@endphp
<x-dynamic-component :component="$getFieldWrapperView()" :field="$field">
    <x-filament::input.wrapper
        :id="$id"
        :valid="! $errors->has($statePath)"
        :disabled="$isDisabled"
        :attributes="
            \Filament\Support\prepare_inherited_attributes($attributes)
                ->merge($getExtraAttributes(), escape: false)
                ->class(['fi-fo-nouislider'])
        "
        >
        <div
            ax-load
            ax-load-src="{{ \Filament\Support\Facades\FilamentAsset::getAlpineComponentSrc('slider', 'filament/forms') }}"
            x-data="sliderFormComponent({
                state: $wire.{{ $applyStateBindingModifiers("\$entangle('{$statePath}')") }},
                statePath: @js($statePath),
                range: @js($range),
                step: @js($step),
                start: @js($start),
                margin: @js($margin),
                limit: @js($limit),
                connect: @js($connect),
                direction: @js($direction),
                orientation: @js($orientation),
                behaviour: @js($behaviour),
                tooltips: @js($tooltips),
                format: @js($format),
                pips: @js($pips),
                ariaFormat: @js($ariaFormat),
            })"
            x-ignore>
        </div>
    </x-filament::input.wrapper>
</x-dynamic-component>



