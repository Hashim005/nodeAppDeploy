const express = require('express')
const app = express();
const port = 3000


app.get('/', (req, res)=>{
    res.send('hello welcome')

})

app.get('/getProfile', (req, res)=>{
    res.send('this is profile page')
})

app.listen(port, () =>{
    console.log(`connected to ${port}`);
    
})