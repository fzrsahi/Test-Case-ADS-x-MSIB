# Test Case ADS x MSIB

This repositroy was made with the aim of completing the Test Case ADS x MSIB

# Tech Stack

- NodeJS
- Typescript
- Express JS
- Prisma ORM
- Postgree SQL

# Installation

1. Clone this repository
2. Install Dependencies

```bash
$ yarn install
```

# Configure The database

This App use docker compose to configure the Postgree SQL database.
configure the docker compose :

rename the docker-compose copy.yml to docker-compose.yml

```bash

version: '3.8'
services:
  dev-db:
    image: postgres:alpine3.18
    ports:
      - 5434:5432
    environment:
      POSTGRES_USER: yourhostname
      POSTGRES_PASSWORD: yourpassword
      POSTGRES_DB: yourdbname

      # change the value to your configuration

```

And then Run :
`docker compose up` in your terminal

# Configure the .env file

rename the .env copy to .env

```bash
 example .env file :
 - DATABASE_URL="postgresql://yourhostname:yourpassword@localhost:5434/yourdbname?schema=public"
 - PORT =3000 # default

 #NOTE : if you use the docker compose , please make sure the value you use in the .env DATABASE_URL same with value you use in docker-compose.yml
```

# Build the database

```bash
# generate prisma
$ npx prisma generate

# push the schema
$ npx prisma db push
```

# Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

Run
`localhost:3000/api/v1/products?sort=price&order=asc&page=1&limit=10 `
in your browser

## Stay in touch

- Author - [Fazrul Anugrah Sahi](https://instagram.com/fzrsahi)
