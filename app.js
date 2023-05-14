const express = require("express");
const morgan = requre("morgan");
const postBank = requre("./postBank")
const app = express();

app.use(morgan('dev'));
app.get("/", (req, res) => {
  const posts = postBank.list();
  const html = `<!DOCTYPE html>
  <html>
    <head>
      <title>Wizard News by Gracie</title>
    </head>
    <body>
      <ul>
        ${postMessage.map(post => `<li>${}</li>`)} 
      </ul>
    </body>
  </html><!DOCTYPE html>
  <html>
    <head>
      <title>Wizard News by Gracie</title>
    </head>
    <body>
      <ul>
        ${postMessage.map(post => `<li>${}</li>`)} 
      </ul>
    </body>
  </html>`

  res.send(html)
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
