//require('/config/config');

require('../config/config');

const express = require('express');
const app = express();


var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//
app.use(bodyParser.json())
 

app.get('/usuario', function (req, res) {
  res.json('Get usuario')
});



app.post('/usuario', function(req, res) {

  let body = req.body;

  if (body.nombre  === undefined) {

      res.status(400).json({
          ok: false,
          mensaje: 'El nombre es necesario'
      });

  } else {
      res.json({
          persona: body
      });
  }

});

  app.delete('/usuario', function (req, res) {
    res.json('Delete usuario')
  });

 
app.listen( process.env.PORT, () => {

    console.log("escuchando el puerto: " , process.env.PORT);
});