# Ignite TypeScript Boilerplate

This is an early-stage work in progress. Currently it will build and run the starter app, though there are 
lots of missing typings.

## The great feel of the IR boilerplate, now in TypeScript

An almost-direct port of the [Ignite IR Boilerplate](https://github.com/infinitered/ignite-ir-boilerplate) to TypeScript

Currently includes:

* React Native 0.47.2 (but you can change this if you want to experiment)
* React Navigation
* Redux
* Redux Sagas
* And more!

## Quick Start

When you've installed the [Ignite CLI](https://github.com/infinitered/ignite), you can get started with this boilerplate like this:

```
ignite new MyLatestCreation --b ignite-typescript-boilerplate
```

You can also change the React Native version, just keep in mind, we may not have tested this just yet.

```sh
ignite new MyLatestCreation --b ignite-typescript-boilerplate --react-native-version 0.46.0-rc.2
```

By default we'll ask you some questions during install as to which features you'd like.  If you just want them all, you can skip the questions:

```sh
ignite new MyLatestCreation --b ignite-typescript-boilerplate --max
```

If you want very few of these extras:

```sh
ignite new MyLatestCreation --b ignite-typescript-boilerplate --min
```

## Using TypeScript with React Native

React Native can't compile TypeScript directly, so we add a transpilation step which compiles the .tsx files to 
Javascript, ready for Babel. These are compiled to the `dist` directory. The easiest way to handle 
this is to tell your IDE to automatically compile TypeScript files. A sample VSCode task is included for this. Alternatively run `npm run watch`.
You will need to run `npm run copyfiles` once to copy images and fixtures into the `dist` directory. You can then
run `react-native start` and `react-native run-ios` or `react-native run-android` as usual.

## Coding style

We use `tslint` to enforce coding style, with rules based on [Palantir's tslint-react](https://github.com/palantir/tslint-react), 
with a few changes to accommodate some Ignite quirks. If you install a 
plugin, your editor can probably automatically fix problems. In VS Code, set `"tslint.autoFixOnSave": true` in your 
workspace settings. You can run the linter from the command line. `npm run lint` runs the linter, while `npm run fixcode` tries to autofix problems.

## Boilerplate walkthrough

Your `App` folder is where most of the goodies are found in an Ignite Next app. Let's walk through them in more detail. Start with `Containers/App.tsx` (described below) and work your way down the walkthrough in order.

### Containers

Containers are (mostly) full screens, although they can be sections of screens or application containers.

* `App.tsx` - your main application. We create a Redux store and configure it here
* `RootContainer.tsx` - main view of your application. Contains your status bar and navigation component
* `LaunchScreen.tsx` - this is the first screen shown in your application. It's loaded into the Navigation component
* `LoginScreen.tsx` - an example login screen. Read the comments in there to learn more!
* `Styles` - styling for each of the above containers and screens

### Navigation

Your primary and other navigation components reside here.

* `AppNavigation.tsx` - loads in your initial screen and creates your menu(s) in a StackNavigation
* `Styles` - styling for the navigation

### Components

React components go here...pretty self-explanatory. We won't go through each in detail -- open each file to read the comments and view the code.

### Storybook

[Storybook](https://storybook.js.org/) has been setup to show off components in the different states. Storybook is a great way to develop and test components outside of use in your app. Simply run `npm run storybook` to get started. All stores are contained in the `*.story.tsx` files along side the components.

### Themes

Styling themes used throughout your app styles.

* `ApplicationStyles.ts` - app-wide styles
* `Colors.ts` - defined colors for your app
* `Fonts.ts` - defined fonts for your app
* `Images.ts` - loads and caches images used in your app
* `Metrics.ts` - useful measurements of things like navBarHeight

### Config

Initialize and configure things here.

* `AppConfig.ts` - simple React Native configuration here
* `DebugConfig.js` - define how you want your debug environment to act. This is a .js file because that's what
Ignite expects to find.
* `ReactotronConfig.ts` - configures [Reactotron](https://github.com/infinitered/reactotron) in your project (Note: this [will be extracted](https://github.com/infinitered/ignite/issues/779) into a plugin in the future)
* `ReduxPersist.ts` - configures Redux Persist (Note: this [will be extracted](https://github.com/infinitered/ignite/issues/780) into a plugin in the future)

### Fixtures

Contains json files that mimic API responses for quicker development. These are used by the `Services/FixtureApi.ts` object to mock API responses.

### Redux, Sagas

Contains a preconfigured Redux and Redux-Sagas setup. Review each file carefully to see how Redux interacts with your application.

_TODO: explain more about Redux & Redux Sagas here_

### Services

Contains your API service and other important utilities for your application.

* `Api.tsx` - main API service, giving you an interface to communicate with your back end
* `ExamplesRegistry.tsx` - lets you view component and Ignite plugin examples in your app
* `FixtureApi.tsx` - mocks your API service, making it faster to develop early on in your app


### Lib

We recommend using this folder for modules that can be extracted into their own NPM packages at some point.

### Images

Contains actual images (usually png) used in your application.

### Transforms

Helpers for transforming data between API and your application and vice versa. An example is provided that you can look at to see how it works.

### Tests

This folder (located as a sibling to `App`) contains sample Jest snapshot and unit tests for your application.

### Further reading

A comprehensive guide to best practice with TypeScript in React is [the React Redux TypeScript Guide](https://github.com/piotrwitek/react-redux-typescript-guide), which covers a lot more than just Redux. We have adopted a lot of the patterns from this.

Microsoft created [TypeScript React Native Starter](https://github.com/Microsoft/TypeScript-React-Native-Starter), which includes a walkthrough on switching projects to TypeScript.

(React TypeScript Tutorial)[https://github.com/DanielRosenwasser/React-TypeScript-Tutorial] is React rather than React Native, but has useful guides.

