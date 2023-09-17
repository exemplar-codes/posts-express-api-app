# posts-express-api-app

The main goal is to build the backend. I copied the frontend from Udemy.

## What is this app

1. The goal is to build a REST API (data) app.
2. There is a React frontend, but it's optional.
3. The API endpoints work independently too.

## Code

- backend: root folder
- frontend: [/frontend](/frontend)

## To run

Advice: use `pnpm` especially for React. It's a very bad FE app I copied from Udemy - takes a very long time with 'npm'.

1. Do `npm install` at root folder, and inside `/frontend`.
2. To start frontend - `npm run fe`. To run be - `npm run be`.
3. To start both (e.g. at deployment machine) - run `npm run serve`

## FE fuck up

FE code I copied is ancient, uses class components and takes more than 10 min to `npm install`.

- use `pnpm`
- Don't build it on the deploy site (render.com, AWS), instead build it locally and place it in (as) `public/build`. I've added gitignore exception for this.
