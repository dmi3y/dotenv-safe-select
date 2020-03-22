### Select dotenv file safe

> Allows to select dotenv files and run project with checks against predefined set of env variables during development.

During development select any of .env<anything> files located into project root and do check current env variables against `.env.example` file [`dotenv-safe`](https://github.com/rolodato/dotenv-safe).

### Installation

> yarn add dotenv-safe  
> yarn add --dev dotenv-safe-select

### Usage

- There only one file `.env.example` which needs to be checked in with version control and used as a single source of truth to check for present env variables.

- Create other dotenv files like `.env.local`, `.env.staging`, `.env.production` etc. which are not checked in version control.

- Issue development command for example `dotenv-safe-select -- next dev`.

- Optionally it is possible to pass direct path to dotenv file like so `dotenv-safe-select --path .env.mine -- next dev`.

- Select dotenv file you would like run your development against.

- Profit :palm_tree:

Inspired by [donenv-flow](https://github.com/kerimdzhanov/dotenv-flow#readme).

**Note:** the command passed to dotenv-safe-select executed as a child process spawn. I'm thinking to add child process fork support to be able execute `.js` files.
