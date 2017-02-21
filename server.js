const express = require('express');
const fallback = require('express-history-api-fallback');
const port = process.env['PORT'] || 4200;
const app = express();
const root = __dirname + '/dist';

app.use(express.static(root))
app.use(fallback('index.html', { root: root }));

app.listen(port, () => {
  console.log(`Server has started at http://localhost:${port}`);
});
