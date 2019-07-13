require('app-module-path').addPath(require('app-root-path').toString());
const user = require('seeds/UserSeeds');
const HttpError = require('api/responses/HttpError');
const HttpSuccess = require('api/responses/HttpError');
/**
 * @param {object} req - Request to the server
 * @param {object} res - Response to the server
 * @param {object} next - Next function to be called
 */
async function AuthUser(req, res, next) {
  try {
    const {username, password} = req.body;
    console.log(user);
    if (user.username !== username || user.password !== password) {
      return next(new HttpError(500, 9999, 'User not found'));
    }
    res.locals.respObj = new HttpSuccess(
        200,
        `Successfully logged in!`,
    );
  } catch (error) {
    return next(new HttpError(500, 9999, error.message));
  }
}

module.exports = {
  postAuth: AuthUser,
};
