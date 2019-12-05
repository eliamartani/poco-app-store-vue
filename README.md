# Assignment

## Stack

- HTML5
- SASS
- VueJS

## Requirement

- NodeJS
- [Optional] Yarn

## Install

Execute the following command to install:

```cmd
npm install
```

or

```cmd
yarn
```

## Running the project

These are the available commands to run the project:

| Command | Description |
| ------- | ----------- |
| `build`   | Compile/Transpile the `resources` folder and publishing the result in `public` folder |
| `lint`    | Validates both `script` and `style` files for recommended project code styling |
| `lint:fix` | Run and fix errors that could be found in both `script` and `style` files |
| `lint:scripts` | Runs ecma script lint with what was defined at `.eslintrc.json` file |
| `lint:styles` | Run style lint with what was defined at `.stylelintrc` file |
| `prod` | Compile/Transpile the `resources` folder and publishing the result in `public` folder. This mode minify both `script` and `style` files |
| `watch` | Similar to `build` with the addition of keeping watch over files. `browser-sync` will run the project over a created local server |

All these commands can be executed with:

```cmd
npm run { command }
```

or

```cmd
yarn { command }
```

## Publishing

After executing the `prod` command, the content generated at `public` can be copied to the defined server
