const fs = require('fs');
const os = require('os');
const Koa = require('koa');
const route = require('koa-route');
const kStatic = require('koa-static');
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('../config/webpack.runtime');

const path = `${'/tmp' || os.tmpdir()}/bmap`;

const app = new Koa();
let uuid = 0;

function getUid(ctx) {
  let uid = ctx.cookies.get('uid');
  // if no uid then set cookies
  if (!uid) {
    uid = uuid;
    ctx.cookies.set('uid', `${uuid}`);
    uuid += 1;
  }
  return uid;
}

function createAndSaveFile(fileName, content) {
  // // check directory exists
  const exists = fs.existsSync(path);
  if (!exists) {
    fs.mkdirSync(path);
  }
  // create temp file
  fs.appendFileSync(`${path}/${fileName}`, `${content}`);
}

function compileFile(compiler) {
  return new Promise((resolve) => {
    // compile file
    compiler.run((err, stats) => {
      if (err && err.details) {
        resolve({
          message: err.details,
          hasError: true,
        });
        return;
      }

      if (stats.hasErrors()) {
        const info = stats.toJson();
        resolve({
          message: info.errors,
          hasError: true,
        });
        return;
      }

      resolve({
        assets: stats.compilation.assets,
        hasError: false,
      });
    });
  });
}

function appendHtml(uid) {
  const template = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>html, body, #root { margin: 0; padding: 0; height: 100%; }</style>
        </head>
        <body>
          <div id="root"></div>
          <script src="//localhost:3000/${uid}_bundle.js?${Date.now()}" crossorigin="anonymous"></script>
          <script src="//localhost:3000/0.${uid}_bundle.js?${Date.now()}" crossorigin="anonymous"></script>
        </body>
      </html>
  `;

  return template;
}

function generateErrorTemplate(err) {
  const strToHtml = str => (str || '')
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, "'")
    .replace(/\[(\d+)m/g, '')
    .replace(/ /g, ' ')
    .replace(/\n/g, '<br />');
  const template = `
          <!DOCTYPE html> 
          <html>
          <head>
          </head>
          <body>
            <div style="color: orangered">
              ${strToHtml(err.toString()) || ''}
            </div>
          </body>
          </html>`;
  return template;
}

const run = async (ctx) => {
  const reqBody = ctx.query;
  if (!reqBody.code) {
    ctx.body = '';
    return;
  }

  const uid = getUid(ctx);
  const fileName = `${uid}.js`;

  createAndSaveFile(`${fileName}`, reqBody.code);

  // merge config, replace entry and output to tmpdir
  const mergedConfig = merge(config, {
    entry: `${path}/${fileName}`,
    output: {
      path: `${path}`,
      filename: `${uid}_bundle.js`,
    },
  });
  const compiler = webpack(mergedConfig);

  const res = await compileFile(compiler);
  let html = '';
  if (res.hasError) {
    html = generateErrorTemplate(res.message);
  } else {
    html = appendHtml(uid);
  }
  // delete user file, just save bundle file
  fs.unlinkSync(`${path}/${fileName}`);
  ctx.body = html;
};

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:9000');
  await next();
});

app.use(route.get('/api/run', run));

app.use(kStatic(`${path}`));

app.listen(3000);
