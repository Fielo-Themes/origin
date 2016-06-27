#Origin
A Theme for Fielo CMS


## Overview

[Fielo Themes](https://github.com/Fielo-Themes) provides a boilerplate for theme development for Fielo CMS.
Because performance is a must we give tools for building a theme rapidly having great experience across many devices. 

We want you to stay productive following the best practices that Fielo CMS recommends. This practices are embed within the tasks of gulp.


### Features

| Feature                                | Summary                                                                                                                                                                                                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Responsive boilerplate | A responsive boilerplate optimized for the multi-screen web.|
| Sass support                           | Compile [Sass](http://sass-lang.com/) into CSS with ease, bringing support for variables, mixins and more. Run `gulp` and you will be having the server up and running|
| Performance optimization               | Minify and concatenate JavaScript, CSS, HTML and images to help keep your pages lean.|
| Code Linting               | JavaScript code linting is done using [ESLint](http://eslint.org) - a pluggable linter tool for identifying and reporting on patterns in JavaScript. We use ESLint with [eslint-config-google](https://github.com/google/eslint-config-google), which tries to follow the Google JavaScript style guide.|
| ES2015 via Babel 6.0                   | Optional ES2015 support using [Babel](https://babeljs.io/). To enable ES2015 support remove the line `"only": "gulpfile.babel.js",` in the [.babelrc](.babelrc) file. ES2015 source code will be automatically transpiled to ES5 for wide browser support.  |
| Built-in HTTP Server                   | A built-in server for previewing your site locally while you develop and iterate. We provide user cases without having to work online with Salesforce |
| Live Browser Reloading                 | Reload the browser in real-time anytime an edit is made without the need for an extension. (Run `gulp` and edit your files)|
| Cross-device Synchronization           | Synchronize clicks, scrolls, forms and live-reload across multiple devices as you edit your project. Powered by [BrowserSync](http://browsersync.io). (Run `gulp` and open up the IP provided on other devices on your network)                       |
| Salesforce Static Resource           | Generate the .zip static resource file ready to upload while you code. (Run `gulp` and open the resource-bundles folder)                       |
