const express = require('express');
const app = express();
const kuNotice = require('./kuNoticeScraping');

app.set(express.static('public'));
app.get('/', (req,res)=>{
    res.sendFile("/views/index.html", {
        root: __dirname + '/public'
    });
});
app.get('/getData',(req,res)=>{
    kuNotice.getData((err,info)=>{
        res.json(info);
    });
})

app.listen(3000,console.log("Server Started"));