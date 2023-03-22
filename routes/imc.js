var express = require('express');
var router = express.Router();

function translateImc(imc){
    if (this.imc < 18.5) this.imcDescription = "magreza";
    else if (this.imc <= 24.9) this.imcDescription = "normal";
    else if (this.imc <= 29.9) this.imcDescription = "sobrepeso";
    return  "obesidade";
}

function calculateImc(height, weight) {
   return Number((weight / height ** 2).toFixed(2))
}

router.post('/calculate', function(req, res, next) {
    const { weight, heigth } = req.body;
    const imc = calculateImc(weight, heigth);
    const imcDescription = translateImc(imc);

    res.json({heigth, weight, imc, imcDescription});
    
  })


module.exports = router;