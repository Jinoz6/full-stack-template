let mix = require('laravel-mix');



mix.js('resources/js/reactjs/test/index.js', 'public/javascripts/components/test/test.js').react();
mix.js('resources/js/reactjs/melon/index.js', 'public/javascripts/components/melon/melon.js').react();
mix.js('resources/js/reactjs/landingPage/landingPage.js', 'public/javascripts/components/landingPage/landingPage.js').react();
mix.js('resources/js/reactjs/auth/login.js', 'public/javascripts/components/auth/login.js').react();
mix.js('resources/js/reactjs/auth/register.js', 'public/javascripts/components/auth/register.js').react();
mix.js('resources/js/reactjs/dashboard/dashboard.js', 'public/javascripts/components/dashboard/dashboard.js').react();



