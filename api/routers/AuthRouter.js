const express = require('express');
const router = new express.Router();
const {postAuth} = require('api/controllers/AuthControllers');

router.post('/auth', postAuth);

module.exports = router;
