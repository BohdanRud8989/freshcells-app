# This is a SPA React application that allows users to login and observe his information.

Features:

- User login form with fields validation

Technologies Used:

- React
- Vite: Development server and build tool for modern web applications
- TypeScript
- cx: classnames library(to display class list depending on conditions)
- Apollo Client for GraphQL API(jwt token is stored in `sessionStorage`)

## Initial setup

Go to your project root folder and launch terminal

```
nvm use
npm install
```

## Configuration of the app:

There is `.env` file, you can configure it.

```
VITE_REACT_APP_API_URL=your.api.url
```

## Run in Development mode:

- Install dependencies: `npm install`
- build and run: `npm run dev`

## Run in Production mode:

- execute `npm run preview`

## Git settings:

- before each commit `prettier` will be run
