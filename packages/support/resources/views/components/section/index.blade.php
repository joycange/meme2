@php
    use Filament\Support\Enums\IconSize;
    use Filament\Support\Enums\Alignment;
@endphp

@props([
    'aside' => false,
    'collapsed' => false,
    'collapsible' => false,
    'compact' => false,
    'contentBefore' => false,
    'description' => null,
    'footer' => null,
    'footerActions' => [],
    'footerActionsAlignment' => Alignment::Start,
    'headerActions' => [],
    'headerEnd' => null,
    'heading' => null,
    'icon' => null,
    'iconColor' => 'gray',
    'iconSize' => IconSize::Large,
    'persistCollapsed' => false,
])

@php
    $headerActions = is_array($headerActions) ? array_filter(
        $headerActions,
        fn ($headerAction): bool => $headerAction->isVisible(),
    ) : $headerActions;
    $hasHeaderActions = filled($headerActions);
    $hasDescription = filled((string) $description);
    $hasHeading = filled($heading);
    $hasIcon = filled($icon);
    $hasHeader = $hasIcon || $hasHeading || $hasDescription || $collapsible || $hasHeaderActions || filled((string) $headerEnd);
    $hasFooterActions = filled($footerActions);
    $hasFooter = filled((string) $footer) || $hasFooterActions;

    if (! $footerActionsAlignment instanceof Alignment) {
        $footerActionsAlignment = filled($footerActionsAlignment) ? (Alignment::tryFrom($footerActionsAlignment) ?? $footerActionsAlignment) : null;
    }
@endphp

<section
    {{-- TODO: Investigate Livewire bug - https://github.com/filamentphp/filament/pull/8511 --}}
    x-data="{
        isCollapsed: @if ($persistCollapsed) $persist(@js($collapsed)).as(`section-${$el.id}-isCollapsed`) @else @js($collapsed) @endif,
    }"
    @if ($collapsible)
        x-on:collapse-section.window="if ($event.detail.id == $el.id) isCollapsed = true"
        x-on:expand="isCollapsed = false"
        x-on:open-section.window="if ($event.detail.id == $el.id) isCollapsed = false"
        x-on:toggle-section.window="if ($event.detail.id == $el.id) isCollapsed = ! isCollapsed"
        x-bind:class="isCollapsed && 'fi-collapsed'"
    @endif
    {{
        $attributes->class([
            'fi-section',
            match ($aside) {
                true => 'fi-aside grid grid-cols-1 items-start gap-x-6 gap-y-4 md:grid-cols-3',
                false => 'rounded-xl bg-white shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10',
            },
        ])
    }}
>
    @if ($hasHeader)
        <header
            @if ($collapsible)
                x-on:click="isCollapsed = ! isCollapsed"
            @endif
            @class([
                'fi-section-header flex flex-col gap-3',
                'cursor-pointer' => $collapsible,
                match ($compact) {
                    true => 'px-4 py-2.5',
                    false => 'px-6 py-4',
                } => ! $aside,
            ])
        >
            <div class="flex items-center gap-3">
                @if ($hasIcon)
                    <x-filament::icon
                        :icon="$icon"
                        @class([
                            'fi-section-header-icon self-start',
                            match ($iconColor) {
                                'gray' => 'text-gray-400 dark:text-gray-500',
                                default => 'fi-color-custom text-custom-500 dark:text-custom-400',
                            },
                            is_string($iconColor) ? "fi-color-{$iconColor}" : null,
                            match ($iconSize) {
                                IconSize::Small, 'sm' => 'h-4 w-4 mt-1',
                                IconSize::Medium, 'md' => 'h-5 w-5 mt-0.5',
                                IconSize::Large, 'lg' => 'h-6 w-6',
                                default => $iconSize,
                            },
                        ])
                        @style([
                            \Filament\Support\get_color_css_variables(
                                $iconColor,
                                shades: [400, 500],
                                alias: 'section.header.icon',
                            ) => $iconColor !== 'gray',
                        ])
                    />
                @endif

                @if ($hasHeading || $hasDescription)
                    <div class="grid flex-1 gap-y-1">
                        @if ($hasHeading)
                            <x-filament::section.heading>
                                {{ $heading }}
                            </x-filament::section.heading>
                        @endif

                        @if ($hasDescription)
                            <x-filament::section.description>
                                {{ $description }}
                            </x-filament::section.description>
                        @endif
                    </div>
                @endif

                @if ($hasHeaderActions)
                    <div class="hidden sm:block">
                        <x-filament::actions
                            :actions="$headerActions"
                            :alignment="\Filament\Support\Enums\Alignment::Start"
                            x-on:click.stop=""
                        />
                    </div>
                @endif

                {{ $headerEnd }}

                @if ($collapsible)
                    <x-filament::icon-button
                        color="gray"
                        icon="heroicon-m-chevron-down"
                        icon-alias="section.collapse-button"
                        x-on:click.stop="isCollapsed = ! isCollapsed"
                        x-bind:class="{ 'rotate-180': ! isCollapsed }"
                    />
                @endif
            </div>

            @if ($hasHeaderActions)
                <div class="sm:hidden">
                    <x-filament::actions
                        :actions="$headerActions"
                        :alignment="\Filament\Support\Enums\Alignment::Start"
                        x-on:click.stop=""
                    />
                </div>
            @endif
        </header>
    @endif

    <div
        @if ($collapsible)
            x-bind:aria-expanded="(! isCollapsed).toString()"
            @if ($collapsed || $persistCollapsed)
                x-cloak
            @endif
            x-bind:class="{ 'invisible h-0 overflow-y-hidden border-none': isCollapsed }"
        @endif
        @class([
            'fi-section-content-ctn',
            'md:col-span-2' => $aside,
            'border-t border-gray-200 dark:border-white/10' => $hasHeader && (! $aside),
            'md:order-first' => $contentBefore,
        ])
    >
        <div
            @class([
                'fi-section-content',
                'rounded-xl bg-white shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10' => $aside,
                match ($compact) {
                    true => 'p-4',
                    false => 'p-6',
                },
            ])
        >
            {{ $slot }}

            @if ((! \Filament\Support\is_slot_empty($footer)) || (is_array($footerActions) && count($footerActions)) || (! is_array($footerActions) && (! \Filament\Support\is_slot_empty($footerActions))))
                <div
                    @if ($collapsible)
                        x-bind:aria-expanded="(! isCollapsed).toString()"
                    @if ($collapsed || $persistCollapsed)
                        x-cloak
                    @endif
                    x-bind:class="{ 'invisible h-0 overflow-y-hidden border-none': isCollapsed }"
                    @endif
                    @class([
                        'fi-section-footer mt-6 border-t border-gray-200 dark:border-white/10',
                        match ($compact) {
                            true => '-mx-4 -mb-1.5 px-4 pt-2.5',
                            false => '-mx-6 -mb-2 px-6 pt-4',
                        },
                    ])
                >
                    @if (! \Filament\Support\is_slot_empty($footer))
                        {{ $footer }}
                    @else
                        <div
                            @class([
                                'fi-section-footer-actions gap-3',
                                match ($footerActionsAlignment) {
                                    Alignment::Start, Alignment::Left => 'flex flex-wrap items-center',
                                    Alignment::Center => 'flex flex-col-reverse sm:grid sm:grid-cols-[repeat(auto-fit,minmax(0,1fr))]',
                                    Alignment::End, Alignment::Right => 'flex flex-row-reverse flex-wrap items-center',
                                    default => null,
                                },
                            ])
                        >
                            @if (is_array($footerActions))
                                @foreach ($footerActions as $action)
                                    {{ $action }}
                                @endforeach
                            @else
                                {{ $footerActions }}
                            @endif
                        </div>
                    @endif
                </div>
            @endif
        </div>
    </div>
</section>
