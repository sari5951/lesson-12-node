
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const categoreisController=require('./controllers/categories');
const productController=require('./controllers/product')
const userController = require('./controllers/user');
const authMiddleware = require('./middleware/authMiddleware');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoURI = 'mongodb://localhost:27017/CategoryAndProducts';
mongoose.set('strictQuery', false); 
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = mongoose.connection;
  
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB!');
  });

app.use('/categories',categoreisController);
app.use('/product',productController);
app.post('/login', userController.login);
app.post('/signup', userController.signup);

app.use(authMiddleware.authenticateToken);



app.use((req, res, next) => {
    console.log('Middleware log: Controller is about to be called');
    next();
});


app.use((req, res, next) => {
    console.log(`Request URL: ${req.url} | Time: ${new Date()} | Method: ${req.method}`);
    next();
});


app.use((req, res, next) => {
    if ((req.method === 'PUT' || req.method === 'POST') && Object.keys(req.body).length === 0) {
        return res.status(400).send('Error: Request body cannot be empty');
    }
    next();
});



app.listen(3001, () => {
    console.log(`Example app listening on port 3001`);
});
module.exports = mongoose;
