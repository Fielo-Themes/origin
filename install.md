# Install

**tl;dr**: [Download Origin](https://github.com/fielo-themes/origin/releases/latest) and run `$ npm install --global gulp && npm install` in that directory to get started.

-

To take advantage of Fielo Themes you need to:

1. Get a copy of the code.
2. Install the dependencies if you don't already have them.
3. Modify the application to your liking.
4. Deploy your production code to Salesforce.

## Prerequisites

### [Node.js](https://nodejs.org)

Bring up a terminal and type `node --version`.
Node should respond with a version at or above 0.10.x.
If you require Node, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.

### [Gulp](http://gulpjs.com)

Bring up a terminal and type `gulp --version`.
If Gulp is installed it should return a version number at or above 3.9.x.
If you need to install/upgrade Gulp, open up a terminal and type in the following:

```sh
$ npm install --global gulp
```

*This will install Gulp globally. Depending on your user account, you may need to [configure your system](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md) to install packages globally without administrative privileges.*


### Local dependencies

Next, install the local dependencies Fielo Themes requires:

```sh
$ npm install
```

That's it! You should now have everything needed to use the Fielo Themes.
