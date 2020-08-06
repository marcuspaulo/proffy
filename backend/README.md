# Create project

```sh
$ yarn init -y
```

# Install TypeScript

```sh
$ yarn add typescript -D
```

# Create TypeScript Config

```sh
$ yarn tsc --init
```

# Configure

```json
 "target": "es2017", // Node Support
```

# Execute and watch all ts files (Similar to Nodemon)

```sh
$ yarn add ts-node-dev -D
```

# Add package.json

# respawn - restart automatically

```json
"scripts": {
    "start": "tsnd --transpile-only --ignore-watch node_modules --respawn src/server.ts"
 }
```

# Install express (microframework)

```sh
$ yarn add express
```

## Error express (JavaScript)

```ts
import express from 'express';
```

## Solution

```sh
$  Try `yarn add @types/express`
```

# Additonal Info

- Request body - When you need to send data from a client (let's say, a browser) to your API, you send it as a request body.
- Route params - Route parameters are parts of the URL that will change based on the object we want to display.
- Query params - a query string is a part of a uniform resource locator (URL) that assigns values to specified parameters.

# Install knex sqlite3

```sh
$ yarn add knex sqlite3
```

# Install Cors

```sh
$ yarn add cors
```

and

```sh
$ yarn add @types/cors -D
```
