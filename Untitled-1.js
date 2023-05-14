<!DOCTYPE html>
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
  </html>