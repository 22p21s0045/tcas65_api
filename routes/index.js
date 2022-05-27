var express = require('express');
var router = express.Router();
const db = require('../database/query');
/* GET home page. */
router.get('/', async function(req, res, next) {
  const data = await db.getAll();
  console.log(data);
 
  
  res.json({ title: 'tcas65_data', data: data });
  

  
});

module.exports = router;
