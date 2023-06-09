const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank")
const app = express();

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

app.use(express.static('public'))
app.use(morgan('dev'));
app.get("/", (req, res) => {
  const posts = postBank.list();
  const html = `<!DOCTYPE html>
  <html>
    <head>
      <title>Wizard News by Gracie</title>
      <link rel="stylesheet" href="/public/style.css" /> 
    </head>
    <body>
      <div class="newsList">
        ${postMessage.map(post => `
            <div class="newsItem">
                <p>
                    <span class="newsPosition">${post.id}</span>
                    ${post.title}
                    <small>(by ${post.name})</small>
                </p>
                <small class="newsInfo">
                    ${post.upvotes} upvotes | ${post.date}
                </small>
            </div>
        `).join('')}
      </div>
    </body>
  </html>`

  res.send(html)
});
app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);
  if (!post.id) {
    throw new Error ('404 Not Found')
  }
  res.send()
})