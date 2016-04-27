# D3-React Boilerplate

A boilerplate workflow for using D3 and React together.

## System Dependencies

In order to use or contribute to this repo you'll need the following things
installed on your system:

  - [NodeJS/NPM]
  - [Git]

## Getting Started

To start working with this repo and build your own application with D3 and
React, we recommend you either download the code for the latest release from
the [releases] page, or fork this repo and use git to clone your fork.

Once the code is on your machine open a terminal in its directory and run
`npm install`; this will install all our dependencies and you'll be
able to run the project's tasks.

## Automation Tasks

The following tasks are provided by this boilerplate for use during
development.

### `start`

`npm start` runs a local development server that uses hot-reloading of assets.
Open a browser to `http://localhost:3000` and everything should Just Work™.

### `build`

When you want to do a build, run `npm run build`. The build will generate your
files into `public`.

### `publish-patch`

`npm run publish-patch` ensures you're on the master branch, have the
latest pull, that your dependencies match your `package.json`. It then bumps
the patch version in the `package.json`, and pushes both `master` and version
tags to your git origin.

### `publish-minor`

`npm run publish-minor` ensures you're on the master branch, have the
latest pull, that your dependencies match your `package.json`. It then bumps
the minor version in the `package.json`, and pushes both `master` and version
tags to your git origin.

### `publish-major`

`npm run publish-major` ensures you're on the master branch, have the
latest pull, that your dependencies match your `package.json`. It then bumps
the major version in the `package.json`, and pushes both `master` and version
tags to your git origin.

### `lint`

`npm run lint` runs JSHint on your `src` directory.

### `validate`

`npm run validate` checks to make sure your installed `node_modules` match the
dependencies listed in your `package.json`.

## Pre-commit Hook

This boilerplate includes a pre-commit hook that runs `lint`, `validate`, and
`build` before allowing you to commit code.

## Webpack

This project uses Webpack, but proxied through the
[hjs-Webpack](https://github.com/henrikjoreteg/hjs-webpack) project for ease of
setup. Further information on customizing this build process can be found
there.

## Tech Stack and Tool Chain

This project makes liberal use of the following technologies:

  - [ES2015]
  - [React]
  - [Webpack]
  - [Stylus]
  - [Autoprefixer]

[Git]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[NodeJS/NPM]: https://nodejs.org/en/download/
[http://localhost:3000]: http://localhost:3000
[Webpack]: https://webpack.github.io/
[ES2015]: https://babeljs.io/docs/learn-es2015/
[React]: https://facebook.github.io/react/
[Stylus]: http://stylus-lang.com/
[HJS Webpack]: https://github.com/henrikjoreteg/hjs-webpack
