# Front-end coding exercise

## Prerequisites
- [NodeJS](https://nodejs.org/en/download/) (14+)
- [yarn](https://classic.yarnpkg.com/en/docs/install/)

## Installation
From a terminal, run the following:
```bash
cd <project directory>
yarn
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in interactive watch mode.

## Coding Task

## Coding Tasks Completed
- React App built by Function Component and React Hooks
- Use a `react-router` path of `/login`. Button `login` was linked to `/login` page in the Main Home page.
- Please use hardcode username and password to login
- The Login screen contained:
  - A heading of "Please log in below"
  - Username and Password labels and fields
  - A Login and Reset buttons.
  - Form Validation when entering incorrect Username and Password
- Design UI: MUI upgraded from v4 to v5
- Testing sucessfully API endpoints to  `http://localhost:3001/api/login` in Postman
- On successful login: 
  - Store the `username` and `fullname` in the `session` redux store.
  - Route to the `Main` component at `/`.
  - Show a bottom-centred message on the `Main` screen with severity `success`.
  - In the `AppToolbar` component, verify that you now see the User icon in place of the Login button.
- On login failure:
  - Show a bottom-centred message on the `Login` screen with severity `error`.
- Write test cases for the `Login` screen: 
+ to test the Login component render suceesfully, 
+ form validation and 
+ the Submit is called when all inputs passed validation.