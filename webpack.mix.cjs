const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix.js("resources/js/main.js", "public/js")
    .js("resources/js/contact-form.js", "public/js")
    .js("resources/js/tiny-slider.js", "public/js")
    .js("resources/js/wow.js", "public/js")
    .postCss("resources/css/main.css", "public/css")
    .postCss("resources/css/animate.css", "public/css")
    .postCss("resources/css/tailwind.css", "public/css")
    .postCss("resources/css/tiny-slider.css", "public/css")
    .postCss("resources/css/LineIcons.2.0.css", "public/css")
    .copyDirectory("resources/images", "public/images")
    .copyDirectory("resources/fonts", "public/fonts");
