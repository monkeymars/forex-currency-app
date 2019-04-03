# forex-currency-app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your unit tests
```
yarn run test:unit
```

## Run with Docker

### Build Docker Image
```
docker build -t grwb/forex-currency-app .
```

### Run Docker Image
```
docker run -it -p 8080:80 --rm --name forex-currency-app grwb/forex-currency-app
```

### Running
```
Then open http://localhost:8080/ to see the app.
```
