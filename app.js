require('app-module-path').addPath(require('app-root-path').toString());
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const HttpSuccess = require('api/responses/HttpSuccess');
const HttpError = require('api/responses/HttpError');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/lakad', require('api/routers/AuthRouter'));
app.use('/api/lakad', require('api/routers/EstablismentsRouter'));
// Success middleware
app.use((req, res, next) => {
  if (res.locals.respObj && res.locals.respObj instanceof HttpSuccess) {
    return res.status(res.locals.respObj.status).json(res.locals.respObj);
  }
  return next();
});
// Error middleware
app.use((error, req, res, next) => {
  if (!(error instanceof HttpError)) {
    const errorObj = new HttpError();
    return res.status(errorObj.status).json(errorObj);
  } else {
    return res.status(error.status).json(error);
  }
});

app.listen(process.env.APP_PORT || 8080, () => {
  console.log(`Listening to port ${process.env.APP_PORT}`);
});
