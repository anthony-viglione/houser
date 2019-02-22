require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

//controller
const controller = require('./controller')

//.env destructure
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express();

app.use(bodyParser.json())


//connection to database using massive
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);

    console.log('You can do it!                           Connected to Database!')
    app.listen(SERVER_PORT,()=>
        {console.log('Great Job!                               Server Port:      4000')})
})


//endpoints
app.get('/api/houses', controller.getAllHouses);

app.post('/api/houses', controller.addHouse)