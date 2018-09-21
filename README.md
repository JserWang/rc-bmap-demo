# rc-bmap-demo

## Install

```bash
yarn install
```

## Quick Start

### Development env

Since the example requires the webpack compilation function provided by the node service, the local startup service is required.

``` bash
yarn run serv // or npm run serv
```

When you see the message `Service started successfully` on the command line, it proves that the node service has started successfully.

Start web service access via webpack-dev-server.

```bash
yarn start // or npm start
```

> Note: The default startup port of the node is `3000` and the web service is `9000`.
> You can change it at the `const/index.js` file.

Open your browser and preview it with url: `http://localhost:9000`.
