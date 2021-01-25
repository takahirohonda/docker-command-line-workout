# Node.js with Docker Containers - MySQL and Node.js server


### Containers

Using the latest MySQL (8.0.17) and LTS Node version (14.15.4)


### Setting up Prisma

Used documentation (https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project-typescript-postgres)

#### (1) Install Dependency and Set up

```bash
# install prisma
yarn add @prisma/cli --save-dev

# invoke the Prisma CLI with npx
npx prisma

# Create Prisma schema file template
npx prisma init
```

# (2) Edit connection

Update connection in `./prisma/schema.prisma` and `.env`


### Miscellaneous

Node.js docker container stops when Node process stops.

For example, if index.js file only contains `console.log('hello');`, it will console log 'hello' and exit with code 0. 

If we have an express server running, the container will keep running.

