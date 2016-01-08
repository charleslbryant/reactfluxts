# reactfluxts
**Playing with React Flux and Typescript**

I am watched the Pluralsight course, Building Applications with React and Flux, by Cory House. The goal was to learn the basics of React and Flux then throw Typescript in the mix.

## Requirements

- [npm](https://docs.npmjs.com/getting-started/installing-node) package manager (Node 5.2.0 used in development)
- IE 10+ or similar modern browser that supports the History API

## Install

After cloning the repo, open a console at the root path of the repo and run

>npm install

This will install the required npm packages.

## Run

To run the project, open a console at the root path of the repo and run

>gulp

This will kick off the default gulp task to run all the magic and open the index.html page in a browser.

# History

## 0.0.7

- Update dev environment to enable TypeScript development (see ToTypescript.md)
- Add React TypeScript typings.
- Add TypeScript compile task to build script.
- Add clean task to build script.
- Refactor build  script to properly synchronize dependencies.
- Fix bug in pipelineStore.js where removeListener function was misspelled.

## 0.0.6

- Implementing Flux to manage unidirectional data flow.
- Add delete pipeline functionality.

## 0.0.5

- Changed manage pipeline component and form to allow saving and updating of pipeline to include validation.
- Changed pipeline list component to add link routing to enable updating pipelines.
- Added toastr for UI messaging.

## 0.0.4

- Change routing using React-Routing with browser history (supports IE10+ class browsers).
- Not a dependency, but installed [React-DevTools for Chrome](https://fb.me/react-devtools) to make in browser development better.

## 0.0.3

- Add pipelines page component
- Add pipeline mock API

## 0.0.2

- Add home page component
- Add about page component
- Add basic routing
- Add common header component
- Add image for logo and favicon

## 0.0.1

Basic dev environment using

- Gulp: for automation.
- Browserify, Gulp-Connect, and Gulp-Open: to provide a fast feedback loop. When changes are made these tools allow automatic reloads of the changes in the browser.
- Gulp-Eslint: to enforce coding standard using the recommended rules as the base ruleset.
