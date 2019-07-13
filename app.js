require('app-module-path').addPath(require('app-root-path').toString());
const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

app.use(
    '/api/lakad',
    require('api/routers/EstablismentsRouter')
);

app.listen(8080, () => {
  console.log(`Listening to port 8080`);
});
