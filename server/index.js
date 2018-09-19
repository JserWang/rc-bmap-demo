const fs = require('fs');
const os = require('os');
const Koa = require('koa');
const route = require('koa-route');
const kStatic = require('koa-static');
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('../config/webpack.runtime');
const {
  appendHtml, generateErrorTemplate, compileFile, createAndSaveFile,
} = require('./util');

const app = new Koa();

const env = process.env.NODE_ENV;

let uuid = 0;
const path = `${'/tmp' || os.tmpdir()}/bmap`;

const run = async (ctx) => {
  const reqBody = ctx.query;
  if (!reqBody.code) {
    ctx.body = '';
    return;
  }

  const fileName = `${uuid}.js`;
  uuid += 1;

  createAndSaveFile(path, `${fileName}`, reqBody.code);

  // merge config, replace entry and output to tmpdir
  const mergedConfig = merge(config, {
    entry: `${path}/${fileName}`,
    output: {
      path: `${path}`,
      filename: '[name].[contenthash:12].js',
    },
  });
  const compiler = webpack(mergedConfig);

  const res = await compileFile(compiler);
  let html = '';
  if (res.hasError) {
    html = generateErrorTemplate(res.message);
  } else {
    html = appendHtml(Object.keys(res.assets));
  }
  // delete user file, just save bundle file
  fs.unlinkSync(`${path}/${fileName}`);
  ctx.body = html;
};

if (env === 'development') {
  app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:9000');
    await next();
  });

  app.use(kStatic(`${path}`));
}

app.use(route.get('/api/run', run));

app.listen(3000);
