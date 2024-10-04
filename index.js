const express = require('express')
const app = express();
const port = 3000


app.get('/', (req, res)=>{
    res.send('hello welcome')

})

app.get('/sumoftwo', (req, res)=>{
    let n1 = parseInt(req.query.n1)
    let n2 = parseInt(req.query.n2)
    res.send('this is profile page'+ (n1+n2))
})

app.listen(port, () =>{
    console.log(`connected to ${port}`);
    
})