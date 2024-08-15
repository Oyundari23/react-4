
const port = 5002;

const express = require('express');
const cors = require('cors');
const fs = require("fs");
const app = express();

app.use(cors())

const content = fs.readFileSync("categories.json", "utf-8");

console.log ({ content });
const categories = JSON.parse(content);


app.get("/categories/list", (req, res) => {
    res.json(categories);
});

app.get("/categories/create", (req, res) => {
    const { name } = req.query;
    categories.push ({ 
        id: new Date().toISOString(),
        name: name , 
    }); 

    fs.writeFileSync("categories.json", JSON.stringify(categories));
    res.json(["success"]);
});

app.get("/categories/update", (req, res) => {
    //todo
    res.json(["success"]);
});

app.get("/categories/delete", (req, res) => {
    const { id } = req.query;
    console.log({ id });
    res.json(["success"]);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.get('/articles', (req, res) => {
    res.json([
        { id: 1, title: "hello" },
        { id: 2, title: "world" },
    ]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
