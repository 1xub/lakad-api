require('app-module-path').addPath(require('app-root-path').toString());
require('dotenv').config();
const express = require('express');
const app = express();

app.use(
    '/api/lakad',
    require('api/routers/EstablismentsRouter')
);

app.listen(process.env.APP_PORT || 8080, () => {
  console.log(`Listening to port ${process.env.APP_PORT}`);
});
