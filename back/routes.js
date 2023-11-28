const Router = require('express');
const router = new Router();
const Controller = require('./controller.js');

router.get('/item', Controller.get);

module.exports = router;