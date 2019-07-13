require('app-module-path').addPath(require('app-root-path').toString());
const establishmentsStub = require('seeds/EstablishmentSeeds');

/**
 * @param {object} req - Request to the server
 * @param {object} res - Response of the server
 * @param {object} next - Next function to be called
 */
async function getAllEstablishments(req, res, next) {
  return res.send(establishmentsStub);
}

module.exports = {
  getAll: getAllEstablishments,
};
