# To-do list

## Summary

This is a to-do list app, made as a technical take home task for Planet V. The task was to
create a ReactJS that allowed an anonymous user to add to-do items to a list, display them and then mark them as complete. The list should persist when the user returns to the app.

## Setup

- Run `npm install` to install dependencies.
- Run `npm dev` to run the development server, and then open [http://localhost:5173](http://localhost:5173) to view the app in a browser.
- Run `npm test` to run the tests.

## Implementation

This project was setup using [Vite](https://vitejs.dev/), configured to use React and TypeScript, and the tests were implemented using [React Testing Library](https://testing-library.com/).

## Comments

- The app meets the requirements of allowing a user to add to-do list items, and then mark them complete, and persists the to do list between visits to the app.
- It was out of scope for this task, but if given the time it would have been great to add a button that allowed users to delete completed list items.
- I kept styling pretty basic, the default styles that the Vite project comes with I thought were quite nice so I kept them, and then styled the input and list sections of the app.
- Next step would be to clean up local storage when the to-do list reaches 0 items, so that we're not arbitrarily storing an empty array in local storage.
