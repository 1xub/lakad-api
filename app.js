require('app-module-path').addPath(require('app-root-path').toString());
require('dotenv').config();
const express = require('express');
const HttpSuccess = require('api/responses/HttpSuccess');
const app = express();

app.use('/api/lakad', require('api/routers/EstablismentsRouter'));

// Success middleware
app.use((req, res, next) => {
  if (res.locals.respObj && res.locals.respObj instanceof HttpSuccess) {
    return res.status(res.locals.respObj.status).json(res.locals.respObj);
  }
  return next();
});

app.listen(process.env.APP_PORT || 8080, () => {
  console.log(`Listening to port ${process.env.APP_PORT}`);
});
