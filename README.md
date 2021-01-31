# TypeScript + Node + Docker (with code hot-reloading in the container)

## For running locally

`npm i`

### Start the dev server

`npm run dev`

### Build the project

`npm run build`

### Start built project

`npm start`

## For running Docker Containers

_You'll need docker installed on your machine to run this in case you didn't know!_

### Build the image

`docker-compose build`

### Start the dev server

`make up`

### Stop the server

`make down`

### Build and start production build

`make up-prod`
