const express = require('express')
const products = require('./products.json');
const cors = require('cors');
const app = express();
// const packageName = require('packageName');

// middleware

app.use(cors())
app.use(express.json())

const port =  process.env.PORT ||  3000;

app.get('/', (req, res )=> {
    res.send('Server is running')
});

app.get('/products' , (req, res) =>{
    res.send(products)
})

app.post('/addProduct' , (req , res) => {
    console.log('post api hitting')
    console.log(req.body)
})
app.post('/test', (req, res) => {
    res.send('POST request to the homepage')
  })

app.listen(port, () => {
    console.log('server is running port number is', port)
})