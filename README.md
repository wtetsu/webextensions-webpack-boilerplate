[![Test](https://github.com/wtetsu/webextensions-webpack-boilerplate/workflows/CI/badge.svg)](https://github.com/wtetsu/mouse-dictionary/actions?query=workflow%3ATest)

[![codecov](https://codecov.io/gh/wtetsu/webextensions-webpack-boilerplate/branch/master/graph/badge.svg?token=Bly5yadIjQ)](https://codecov.io/gh/wtetsu/webextensions-webpack-boilerplate)

# webextensions-webpack-boilerplate

A simple boilerplate for developing WebExtensions using webpack.

- babel
- Can create different builds for each browser
- UnitTests with Jest

| Concern     | Implementation                                |
| ----------- | --------------------------------------------- |
| Language    | [TypeScript](https://www.typescriptlang.org/) |
| Option View | [React](https://reactjs.org/)                 |
| Testing     | [Jest](https://jestjs.io/)                    |

## How to develop

Use npm 6+.

### Preparation

```sh
npm install
```

### Build

For Chrome:

```sh
npm run build-chrome
```

For Firefox:

```sh
npm run build-firefox
```

### Unit tests

Run the all the tests.

```sh
npm run test
```

And here is an useful way that re-run tests automatically when a file has changed.

```sh
npm run test-watch
```

## License

webextensions-webpack-boilerplate is published under the MIT license.
