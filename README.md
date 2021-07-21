## Task

You need to implement React application followed these points:
1. Create 3 buttons on top. While pushing the button you need to set timeout with a value equal to the number of the button (start from 1)
2. Timer of the next pushed button should be started only when previous was finished (all buttons should be available to click; create a queue)
3. When timeout will be finished you have to add a new record into the log. Format "${time to output}: ${button nubmer} / ${time when button was pushed}"
4. All the records should be in order which were clicked
5. Add a button "Reset" that by click should reset the state of the application to initial

## UI

![Example of UI](https://i.imgur.com/8xA0Yfl.jpeg)

## Requirements

1. TypeScript
2. Functional Components
3. Reusable
4. It has to support npm-scripts:
    1. start - run development mode
    2. build - bundle production version
5. To start these commands are enough: npm i && npm start

### TODO:

- add local linters (eslint/prettier), pre-commit, pre-push hooks
- add tests

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
