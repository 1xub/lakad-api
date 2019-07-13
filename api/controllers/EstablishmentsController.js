require('app-module-path').addPath(require('app-root-path').toString());
const establishmentsStub = require('seeds/EstablishmentSeeds');
const HttpSuccess = require('api/responses/HttpSuccess');
/**
 * @param {object} req - Request to the server
 * @param {object} res - Response of the server
 * @param {object} next - Next function to be called
 */
async function getAllEstablishments(req, res, next) {
  try {
    res.locals.respObj = new HttpSuccess(
        200,
        `Successfully retrieve all Supplies`,
        establishmentsStub
    );
    return next();
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  getAll: getAllEstablishments,
};
