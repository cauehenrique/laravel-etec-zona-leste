<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>ETEC Zona Leste</title>
        @vite('resources/css/app.css')
        @viteReactRefresh
        @vite('resources/js/app.js')
    </head>
    <body class="p-6 mx-auto max-w-6xl">
        <h1 class="text-2xl font-bold">Hello World</h1>
        <h2 class="text-lg text-neuitral-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, corrupti ipsam! Exercitationem aliquam dolores sapiente consequuntur nostrum incidunt rem aspernatur culpa, ipsam dolor consequatur maxime corrupti, itaque sequi. Veniam, repudiandae?</h2>
        
        <div class="example" data-value="0"></div>
        <div class="example" data-value="1"></div>
        <div class="example" data-value="2"></div>
    </body>
</html>
