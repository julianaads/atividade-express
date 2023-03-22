var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  const { name, email } = req.body;
  console.log(name);
  var u = {name, email};
  users.push(u);
  res.status(204).send(u);
})

module.exports = router;
