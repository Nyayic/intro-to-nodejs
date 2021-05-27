const express = require('express'); // require is a mkeyword

const app = express();

// to use our app you need to create a server so that the browser can listen
app.listen(3000, ()=>{
    console.log('Port is listening') // check if the server is running
})