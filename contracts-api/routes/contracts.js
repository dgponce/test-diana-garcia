var express = require('express');
var router = express.Router();

/* GET contracts listing. */
router.get('/', function(req, res, next) {
  const dataArray = [
    {
      code: 'Nda',
      name: 'Confidencialidad',
      price: 500.00,
      count: 0
    },
    {
      code: 'PowerLetter',
      name: 'Carta poder',
      price: 150.50,
      count: 0
    },
    {
      code: 'TermSheet',
      name: 'Acuerdo de inversión',
      price: 100,
      count: 0
    },
    {
      code: 'Leasing',
      name: 'Arrendamiento',
      price: 342.00,
      count: 0
    },
    {
      code: 'Employment',
      name: 'Trabajo',
      price: 700.50,
      count: 0
    }
  ];

  res.json({
    data: dataArray
  });
  
});

module.exports = router;
