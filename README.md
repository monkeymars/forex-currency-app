# forex-currency-app

## Build Docker Image
```
docker build -t grwb/forex-currency-app .
```

## Run Docker Image
```
docker run -it -p 8080:80 --rm --name forex-currency-app grwb/forex-currency-app
```

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

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
