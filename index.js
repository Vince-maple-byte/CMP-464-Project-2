const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('./public'));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, './public', 'index.html'))
});

app.get('/Iverson', (req, res) =>{
    res.sendFile(path.join(__dirname, './public', 'Iverson.html'))
});

app.post('/comment', (req, res) => {
    let data = '';
  
    req.on('data', chunk => {
      data += chunk;
    });
  
    req.on('end', () => {
      res.send(data);
    });
  });

app.listen(port,() => {
    console.log(`This process is listening at port ${port}`);
});