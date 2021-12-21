# Raptorium Docs

- Search will not create indexes until `yarn build` is ran

## Install:

1. yarn

### Dev:

1. yarn start

## Deploy:

1. yarn build
2. yarn serve

## Docker:

Build the container:

```sudo docker build . -t raptor/docs```

Run the container:

```sudo docker run -p 3005:3000 -d raptor/docs```

This will make the applications accessible on port 3005 (via port 3000 inside container).

## To Do:

✅ Compiling guides for Win/Linux/Mac

 □ Finish .webm's for rest of CLI commands

 □ Re-work listed miners

 □ Add mining pool information

