var express = require('express');
var router = express.Router();
var db = require('../database/query');
/* GET users listing. */
router.get('/', function(req, res, next) {
  const id = req.query.id
  const data = db.getOne(id);
  res.status(200).json({ data: data });
});

module.exports = router;
