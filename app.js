//const http = require('http');
//const routes = require('./routes');
const express = require('express');
const app = express();
app.use((req, res, next)=>{
    console.log('In the middlware')
    next();// This allows the request ot continue to next middleware in line 
})
app.use((req, res, next)=>{
    console.log('In  another the middlware')
    
    res.send('<h1>Hello from Express</h1>');
});

//const server = http.createServer(app);
//const PORT = 3000;

//server.listen(PORT, () => {
  //  console.log(`Server is running on port ${PORT}`);
//});
//server.listen(3000);
app.listen(3000);