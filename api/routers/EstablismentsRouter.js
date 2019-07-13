const express = require('express');
const router = new express.Router();
const {getAll} = require('api/controllers/EstablishmentsController');


router.get(
    '/establishments', getAll);

module.exports = router;
