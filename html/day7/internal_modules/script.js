const http = require('http');
const fs = require('fs'); // Corrected require statement

const data = fs.readFileSync('./data.json', 'utf8');
const dataobj = JSON.parse(data);

const htmlTemplate = `
<!DOCTYPE HTML>
<html>
<head>
</head>
<body>  
_PRODUCT_CARDS_
</body>
</html>
`;

const cardTemplate = `
<div class ='product-card'>
<h4>_TITLE_</h4>
<p>_INFO_</p>
</div>`;

const card1 = cardTemplate
  .replace('_TITLE_', 'REALME 9') // Corrected placeholder name
  .replace('_INFO_', 'THIS IS AN INDIAN MOBILE'); // Corrected placeholder name

const card2 = cardTemplate
  .replace('_TITLE_', 'iPhone') // Corrected placeholder name
  .replace('_INFO_', 'THIS IS ALSO AN INDIAN MOBILE'); // Corrected placeholder name

const allCards = card1 + card2;

const page = htmlTemplate.replace('_PRODUCT_CARDS_', allCards); // Corrected placeholder name

const server = http.createServer((req, res) => {
  console.log('Request received!');
  console.log(req.url);
  res.writeHead(200, {
    'content-type': 'text/html',
  });
  res.end(page);
});

server.listen(2000, () => {
  console.log("Server started at port 2000...");
});
