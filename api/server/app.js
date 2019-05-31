const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
//const router = express.Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.route('/add')
    .post((req,res)=>{

    })
    .get((req,res)=>{

    });

app.get('/event',(req,res)=>{

});


app.listen(3000,function () {
    console.log("Ouech ça marche");
});
//module.exports = router;
