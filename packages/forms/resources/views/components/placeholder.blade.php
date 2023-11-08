<x-dynamic-component
    :component="$getFieldWrapperView()"
    :id="$getId()"
    :label="$getLabel()"
    :label-sr-only="$isLabelHidden()"
    :has-inline-label="$hasInlineLabel()"
    :helper-text="$getHelperText()"
    :hint="$getHint()"
    :hint-actions="$getHintActions()"
    :hint-color="$getHintColor()"
    :hint-icon="$getHintIcon()"
    :state-path="$getStatePath()"
>
    <div
        {{
            $attributes
                ->merge($getExtraAttributes(), escape: false)
                ->class([
                    'fi-fo-placeholder sm:text-sm',
                    'py-1.5' => $hasInlineLabel() && !$getContent() instanceof \Illuminate\Contracts\Support\Htmlable
                ])
        }}
    >
        {{ $getContent() }}
    </div>
</x-dynamic-component>
