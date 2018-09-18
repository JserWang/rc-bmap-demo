const Koa = require('koa');
const route = require('koa-route');
const fs = require('fs');
const os = require('os');
const webpack = require("webpack");
const tmpDir = os.tmpdir();

const app = new Koa();

const run = ctx => {
  let uid = getUid(ctx);
  // 当前用户不存在唯一标识
  const path = `${tmpDir}/${uid}`;
  const fileName = saveTmpFile(ctx, path);  

  const compiler = webpack({ 
    entry: `${path}/${fileName}.js`, 
    output: {
      path: `${path}`,
      filename: `${fileName}_bundle.js`
    }
  });

  compileFile(compiler)
    .then((res) => {
      console.log(res);
    });
}

function getUid(ctx) {
  let uid = ctx.cookies.get('uid');
  // 当前用户不存在唯一标识
  if (!uid) {
    uid = Date.now();
    ctx.cookies.set('uid', uid);
  }
  return uid;
}

function saveTmpFile(ctx, path) {
  const reqBody = ctx.query;
  // 检测目录是否存在
  const exists = fs.existsSync(path);
  if (!exists) {
    fs.mkdirSync(path);
  }
  // 创建临时文件
  const fileName = `${Date.now()}`;
  fs.appendFileSync(`${path}/${fileName}.js`, `${reqBody.code}`);
  return fileName;
}

function compileFile(compiler) {
  return new Promise((resolve, reject) => {
    // 编译文件
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) {
        resolve({
          assets: stats.compilation.errors,
          hasError: true,
        });
      } else {
        resolve({
          assets: stats.compilation.assets,
          hasError: false,
        });
      }
    });
  });
}

app.use(route.get('/run', run));

app.listen(3000);
