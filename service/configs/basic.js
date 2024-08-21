const port = 5000;
const express = require('express');  // backend import hiihde rqeuire ashiglana 
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());   // body parser



function startApp() {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    });
    return app;
}

module.exports = {
    startApp, 
}