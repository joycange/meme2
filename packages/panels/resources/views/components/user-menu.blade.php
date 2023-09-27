@php
    $user = filament()->auth()->user();
    $items = filament()->getUserMenuItems();

    $profileItem = $items['profile'] ?? $items['account'] ?? null;
    $profileItemUrl = $profileItem?->getUrl();
    $profilePage = filament()->getProfilePage();
    $hasProfileItem = filament()->hasProfile() || filled($profileItemUrl);

    $loginItem = $items['login'] ?? null;
    $logoutItem = $items['logout'] ?? null;
    $registerItem = $items['register'] ?? null;

    $items = \Illuminate\Support\Arr::except($items, ['account', 'login', 'logout', 'profile', 'register']);
@endphp

{{ \Filament\Support\Facades\FilamentView::renderHook('panels::user-menu.before') }}

<x-filament::dropdown
    placement="bottom-end"
    teleport
    :attributes="
        \Filament\Support\prepare_inherited_attributes($attributes)
            ->class(['fi-user-menu'])
    "
>
    <x-slot name="trigger">
        <button
            aria-label="{{ __('filament-panels::layout.actions.open_user_menu.label') }}"
            type="button"
        >
            @if (filament()->auth()->check())
                <x-filament-panels::avatar.user :user="$user" />
            @else
                <x-filament-panels::avatar.guest />
            @endif
        </button>
    </x-slot>

    @if ($profileItem?->isVisible() ?? true)
        {{ \Filament\Support\Facades\FilamentView::renderHook('panels::user-menu.profile.before') }}

        @if (filament()->auth()->check())
            @if ($hasProfileItem)
                <x-filament::dropdown.list>
                    <x-filament::dropdown.list.item
                        :color="$profileItem?->getColor()"
                        :icon="$profileItem?->getIcon() ?? 'heroicon-m-user-circle'"
                        :href="$profileItemUrl ?? filament()->getProfileUrl()"
                        :target="($profileItem?->shouldOpenUrlInNewTab() ?? false) ? '_blank' : null"
                        icon-alias="panels::user-menu.profile-item"
                        tag="a"
                    >
                        {{ $profileItem?->getLabel() ?? ($profilePage ? $profilePage::getLabel() : null) ?? filament()->getUserName($user) }}
                    </x-filament::dropdown.list.item>
                </x-filament::dropdown.list>
            @else
                <x-filament::dropdown.header
                    :color="$profileItem?->getColor()"
                    :icon="$profileItem?->getIcon() ?? 'heroicon-m-user-circle'"
                    icon-alias="panels::user-menu.profile-item"
                >
                    {{ $profileItem?->getLabel() ?? filament()->getUserName($user) }}
                </x-filament::dropdown.header>
            @endif
        @endif

        {{ \Filament\Support\Facades\FilamentView::renderHook('panels::user-menu.profile.after') }}
    @endif

    @if (filament()->hasDarkMode() && (! filament()->hasDarkModeForced()))
        <x-filament::dropdown.list>
            <x-filament-panels::theme-switcher />
        </x-filament::dropdown.list>
    @endif

    <x-filament::dropdown.list>
        @foreach ($items as $key => $item)
            <x-filament::dropdown.list.item
                :color="$item->getColor()"
                :href="$item->getUrl()"
                :target="$item->shouldOpenUrlInNewTab() ? '_blank' : null"
                :icon="$item->getIcon()"
                tag="a"
            >
                {{ $item->getLabel() }}
            </x-filament::dropdown.list.item>
        @endforeach

        @if (filament()->auth()->check())
            <x-filament::dropdown.list.item
                :action="$logoutItem?->getUrl() ?? filament()->getLogoutUrl()"
                :color="$logoutItem?->getColor()"
                :icon="$logoutItem?->getIcon() ?? 'heroicon-m-arrow-left-on-rectangle'"
                icon-alias="panels::user-menu.logout-button"
                method="post"
                tag="form"
            >
                {{ $logoutItem?->getLabel() ?? __('filament-panels::layout.actions.logout.label') }}
            </x-filament::dropdown.list.item>
        @else
            @if (filament()->hasLogin())
                <x-filament::dropdown.list.item
                    :color="$loginItem?->getColor()"
                    :href="$loginItem?->getUrl() ?? filament()->getLoginUrl()"
                    :icon="$loginItem?->getIcon() ?? 'heroicon-m-arrow-right-on-rectangle'"
                    icon-alias="panels::user-menu.login-button"
                    tag="a"
                >
                    {{ $loginItem?->getLabel() ?? __('filament-panels::layout.actions.login.label') }}
                </x-filament::dropdown.list.item>
            @endif
            @if (filament()->hasRegistration())
                <x-filament::dropdown.list.item
                    :color="$registerItem?->getColor()"
                    :href="$registerItem?->getUrl() ?? filament()->getRegistrationUrl()"
                    :icon="$registerItem?->getIcon() ?? 'heroicon-m-user-plus'"
                    icon-alias="panels::user-menu.register-button"
                    tag="a"
                >
                    {{ $registerItem?->getLabel() ?? __('filament-panels::layout.actions.register.label') }}
                </x-filament::dropdown.list.item>
            @endif
        @endif
    </x-filament::dropdown.list>
</x-filament::dropdown>

{{ \Filament\Support\Facades\FilamentView::renderHook('panels::user-menu.after') }}
