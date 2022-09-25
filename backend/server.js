const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors'); //call cors http module
const port = 3001 ;

//Import Routes
const authRoute = require('./routes/auth');
const menusRoute = require('./routes/menus');
const ordersRoute = require('./routes/orders');

dotenv.config();

//middlewares
app.use(express.json());
 app.use(cors()); //use cors function
 app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//Routes Middlewares
app.use('/api/v1/users',authRoute);
app.use('/api/v1/menus',menusRoute);
app.use('/api/v1/orders',ordersRoute);

app.listen(port, () => console.log('Server Run add Port '+ port));