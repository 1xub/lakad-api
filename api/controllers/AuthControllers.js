require('app-module-path').addPath(require('app-root-path').toString());
const HttpSuccess = require('api/responses/HttpSuccess');
/**
 * @param {object} req - Request to the server
 * @param {object} res - Response to the server
 * @param {object} next - Next function to be called
 */
async function AuthUser(req, res, next) {
  res.locals.respObj = new HttpSuccess(200, `Successfully logged in!`);
  return next();
}
module.exports = {
  postAuth: AuthUser,
};
