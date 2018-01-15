## Ignite TypeScript Boilerplate for React Native

### The easiest way to develop React Native apps in TypeScript.
Get up and running with TypeScript React Native development in minutes. A batteries-included, opinionated starter project, and code generators for your components, reducers, sagas and more. 
Originally based on a port of the [Ignite IR Boilerplate](https://github.com/infinitered/ignite-ir-boilerplate) to TypeScript.

Currently includes:

* React Native 0.51.0 (but you can change this if you want to experiment)
* React Navigation
* Redux
* Redux Sagas
* And more!

## Quick Start

When you've installed the [Ignite CLI](https://github.com/infinitered/ignite), (tl;dr: `npm install -g ignite-cli`) you can get started with this boilerplate like this:

```sh
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

Thanks to the beauty of [react-native-typescript-transformer](https://github.com/ds300/react-native-typescript-transformer), we can seamlessly use TypeScript in our React Native project. Source maps and hot reloading all work just like you would expect.

## Coding style

We use `tslint` to enforce coding style, with rules based on [Palantir's tslint-react](https://github.com/palantir/tslint-react), 
and a few changes to accommodate some Ignite quirks. If you install a plugin, your editor can probably automatically fix problems. 
In VS Code, set `"tslint.autoFixOnSave": true` in your 
workspace settings. You can run the linter from the command line. `npm run lint` runs the linter, while `npm run fixcode` tries to autofix problems.

## Boilerplate walkthrough

Your `App` folder is where most of the goodies are found in an Ignite app. Let's walk through them in more detail. Start with `Containers/App.tsx` (described below) and work your way down the walkthrough in order.

### Components

React components go here. We generate these as stateless functional components by default, as recommended by the React team.

### Containers

Containers are Redux-connected components, and are mostly full screens.

* `App.tsx` - your main application. We create a Redux store and configure it here
* `RootContainer.tsx` - main view of your application. Contains your status bar and navigation component
* `LaunchScreen.tsx` - this is the first screen shown in your application. It's loaded into the Navigation component

### Navigation

Your primary and other navigation components reside here.

* `AppNavigation.tsx` - loads in your initial screen and creates your menu(s) in a StackNavigation
* `Styles` - styling for the navigation

### Storybook

[Storybook](https://storybook.js.org/) has been setup to show off components in the different states. Storybook is a great way to develop and test components outside of use in your app. Simply run `yarn run storybook` to get started. All stories are contained in the `*.story.tsx` files along side the components.

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

### Fixtures

Contains json files that mimic API responses for quicker development. These are used by the `Services/FixtureApi.ts` object to mock API responses.

### Redux, Sagas

Contains a preconfigured Redux and Redux-Sagas setup. Review each file carefully to see how Redux interacts with your application. You will find these in the Reducers and Sagas folders. We use [typesafe-actions](https://github.com/piotrwitek/typesafe-actions) to get lovely
type checking of our reducers and actions. Take a look at `Lib/ReduxHelpers.ts` for some extra functions that
we use to make them more Ignite-y.

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

We create Jest tests alongside the components, reducers and sagas. Enable this by adding `"tests": "jest"` to `ignite/ignite.json`.

### Code generation

Currently, the following code generation commands work properly:
* `ignite generate component MyComponent` - generates a stateless functional component.
* `ignite generate container MyContainer` - generates a Redux-connected React.Component, with state and view lifecycle.
* `ignite generate screen MyScreen` - generates a Redux-connected React.Component, with state, view lifecycle and react-navigation.
* `ignite generate reducers MyNew` - generates a set of Redux reducers.
* `ignite generate saga MySaga` - generates a Redux Saga
* `ignite generate list MyList` - generates a FlatList, formatted either as a grid or list.

### Further reading

A comprehensive guide to best practice with TypeScript in React is [the React Redux TypeScript Guide](https://github.com/piotrwitek/react-redux-typescript-guide), which covers a lot more than just Redux. We have adopted a lot of the patterns from this. The `typesafe-actions` library that we use was created by @piotrwitek, the author of the guide.

Microsoft created [TypeScript React Native Starter](https://github.com/Microsoft/TypeScript-React-Native-Starter), which includes a walkthrough on switching projects to TypeScript.

[React TypeScript Tutorial](https://github.com/DanielRosenwasser/React-TypeScript-Tutorial) is React rather than React Native, but has useful guides.

[This post](http://blog.novanet.no/easy-typescript-with-react-native/) is a good run-through of the [react-native-typescript-transfomer](https://github.com/ds300/react-native-typescript-transformer), which allows us to skip the transpile step that we were using before. Thanks [@wormyy] for the heads-up on this.

### Credits
Created by [Matt Kane](https://github.com/ascorbic) at [Aerian Studios](https://www.aerian.com). Based on [Ignite IR Boilerplate](https://github.com/infinitered/ignite-ir-boilerplate), by Infinite Red. 