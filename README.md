
# Every.io engineering challenge

The purpose of this code is to serve as a solution to Every.io's engineering challenge. I understand that there are some points that could be improved, but given the nature of the challenge, I chose to follow a simplistic approach focusing on code readability and organization of elements.

## Tech Stack

- [Yarn](https://yarnpkg.com/) - For dependency management
- [Create React App](https://create-react-app.dev/) - For development tooling
- [ReactJS 17](https://react.dev/) - For building user interfaces and state management
- [TypeScript](https://www.typescriptlang.org) - Extends JavaScript by adding types to the language 
- [Jest](https://jestjs.io/) - As test runner
- [Testing Library](https://testing-library.com) - Light-weight solution for testing without all the implementation details
- [Eslint](https://eslint.org) - Linting utility for JavaScript and JSX

## Dependencies

- [NodeJS](https://nodejs.org/) on verion **20.11.1** or higher to be able to run the project locally.
- [Yarn package manager](https://yarnpkg.com/) for installing the dependencies and running the scripts

## Installation

Clone the project in your local machine with

```bash
  git clone git@github.com:diegohferraz/engineer-interview.git
```

Navigate to the project forlder, install project dependencies running the following command

```bash
  cd engineer-interview
  yarn install
```
    
## Running locally

Start the development server with the command

```bash
  yarn start
```

After running the command you can access the application in your browser at `http://localhost:3000/`


## Other commands

### Lint

Run the lint tool for checking if the code meets the standard formatting rules.

```bash
yarn lint
```

### Build

For building the project to production you can use the following command

```bash
yarn build
```

### Test

For running all the unit tests you can use

```bash
yarn test
```
