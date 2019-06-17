const fs = require('fs');
const { SERVER_PORT } = require('../const');

function appendHtml(scripts) {
  let template = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&ak=WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"></script>
          <style>html, body, #root { margin: 0; padding: 0; height: 100%; }</style>
        </head>
        <body>
          <div id="root"></div>
      `;
  scripts.forEach((fileName) => {
    template += `<script src="//localhost:${SERVER_PORT}/${fileName}" crossorigin="anonymous"></script>`;
  });
  template += `
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

function createAndSaveFile(path, fileName, content) {
  // // check directory exists
  const exists = fs.existsSync(path);
  if (!exists) {
    fs.mkdirSync(path);
  }
  // create temp file
  fs.appendFileSync(`${path}/${fileName}`, `${content}`);
}

module.exports = {
  appendHtml,
  generateErrorTemplate,
  compileFile,
  createAndSaveFile,
};
