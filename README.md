# dotgov-components

[![Build Status](https://travis-ci.org/baltimorecounty/dotgov-components.svg?branch=integration)](https://travis-ci.org/baltimorecounty/dotgov-components)
[![npm version](https://badge.fury.io/js/%40baltimorecounty%2Fdotgov-components.svg)](https://badge.fury.io/js/%40baltimorecounty%2Fdotgov-components)
[![codecov](https://codecov.io/gh/baltimorecounty/dotgov-components/branch/integration/graph/badge.svg)](https://codecov.io/gh/baltimorecounty/dotgov-components)
[![BCH compliance](https://bettercodehub.com/edge/badge/baltimorecounty/dotgov-components?branch=integration)](https://bettercodehub.com/)

UI design system for Baltimore County's primary [website](https://www.baltimorecountymd.gov).

## Getting Started

1. Clone this repo
2. Run `npm install`
3. Take a look at our [Getting Started Guide](https://github.com/baltimorecounty/dotgov-components/wiki/Getting-Started-as-a-Developer)

### `npm start`

Runs the design system in development mode. Open [http://localhost:6060/](http://localhost:6060/) in your browser to view it. The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

_Note_: When adding a markdown file for a component you will need to restart.

### `npm run test` and `npm run-script test:watch`

Runs tests for the project. If you wish to watch the tests, use the watch command.

## Usage

```npm i @baltimorecounty/dotgov-components```

### Including Styles

**Javascript**

```js
import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
```

*Note*: This import should be included your primary js file. Example `App.js` in a create react app.

### Including Components

Available components can be found in our [docs](https://baltimorecounty.github.io/dotgov-components/).

```js
import { FormField, TextInput, TextArea } from "@baltimorecounty/dotgov-components";
```

