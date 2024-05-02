const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join);
app.set('view engine','ejs');
//const request = require('request');

//admin lte
app.use('/admin', express.static('./node_modules/admin-lte-express/public'))
app.use('/', require('admin.lte-express'));

const request = require('request');

request('https://bicycle-api.vercel.app/ver', function(error, response, body){
    console.error('error', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});

/*router.get('/ver', async (req, res) => {
    //const valores = await valor.find();
    console.log("hola");
    //res.render('index.ejs');
});*/

app.listen(app.get('port'),()=>{
    console.log('Servidor funcionando en el puerto',app.get('port'))
});

