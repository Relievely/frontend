# ReadMe

## Build

### Troubleshooting

If starting the server does not work try to execute
`$env:NODE_OPTIONS="--openssl-legacy-provider"`
on your powershell CLI

## Docker Compose

### Login

To use the docker compose file you first have to make sure that you are logged in currently. For that you need the user and the token of him to log into it.

If those are missing you have to find a new user an enter this token as a secret or add an extra secret key and change the name for it in the file.

### Update

When you want to update the images that are used in this docker compose file. You have to use the following commands.

```shell
docker compose down
docker compose pull
docker-compose up --force-recreate --build -d
docker image prune -f
docker-compose up
```