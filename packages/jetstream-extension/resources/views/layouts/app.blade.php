<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        @livewireStyles
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Commissioner:wght@200;300;400;500;600;700&amp;family=JetBrains+Mono:ital@0;1&amp;display=swap">

        <link rel="stylesheet" href="{{ route('filament.asset', [
            'id' => Filament\get_asset_id('/css/filament.css'),
            'path' => 'css/filament.css',
        ]) }}" />

            @foreach (\Filament\Filament::getStyles() as $path)
                @if (Str::of($path)->startsWith(['http://', 'https://']))
                    <link rel="stylesheet" href="{{ $path }}" />
                @else
                    <link rel="stylesheet" href="{{ route('filament.asset', [
                    'path' => $path
                ]) }}">
            @endif
        @endforeach

        @stack('filament-styles')

        <!-- Scripts -->
        <script src="{{ mix('js/app.js') }}" defer></script>
    </head>
    <body class="font-sans antialiased">
        <x-jet-banner />

        <div class="min-h-screen bg-gray-100">
            @livewire('navigation-menu')

            <!-- Page Heading -->
            @if (isset($header))
                <header class="bg-white shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {{ $header }}
                    </div>
                </header>
            @endif

            <!-- Page Content -->
            <main>
                {{ $slot }}
            </main>
        </div>

        @stack('modals')

        <x-filament::notification />

        @livewireScripts
        <script>
          window.filamentConfig = @json(\Filament\Filament::getScriptData());
        </script>

        <script src="{{ route('filament.asset', [
            'id' => Filament\get_asset_id('/js/filament.js'),
            'path' => 'js/filament.js',
        ]) }}"></script>

        @foreach (\Filament\Filament::getScripts() as $path)
            <script src="{{ $path }}"></script>
        @endforeach

        <script src="https://cdnjs.cloudflare.com/ajax/libs/mousetrap/1.6.5/mousetrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mousetrap/1.6.5/plugins/global-bind/mousetrap-global-bind.min.js"></script>

        @stack('filament-scripts')

    </body>
</html>
