<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>ETEC Zona Leste</title>
        @vite('resources/css/app.css')
        @viteReactRefresh
        @vite('resources/js/index.js')
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
