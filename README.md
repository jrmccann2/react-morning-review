## About the Project

This is a simple project used to review the basics of React and JavaScript. The premise for the project comes from Project #6 of [this](https://www.github.com/devmountain/react-drills) repository made and used by DevMountain for teaching React.

### The Task

The project tasks students with the following:<br />

Create an app that displays a to-do list. You will need two components, the `App` component and a `Todo` component. The `App` component should be responsible for getting new tasks and storing the list of tasks. The `Todo` component should be responsible for displaying the individual tasks from the `App` component. The `App` component should create a list of 'Todo' components passing down a `task` into the `Todo` component as a prop and display the list.

### Folder Structure

The instructions tell us right off the bat how many components we will need (2) and their names (`App` and `Todo`). Great, I know that `create-react-app` will already generate `App` for us as our highest level component. So I will need to create one additional component called `Todo`. Following good organizational practice, I will create a folder called `components` inside of `src` (remember `src` is where our React application lives). Then within `components` I will create a `Todo.js` file for my `Todo` component (always capitalize component names!). Since we are not concerned with styling, this should be all of the folder setup that we need.

### Planning

#### State Management
