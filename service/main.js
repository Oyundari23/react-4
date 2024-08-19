
const port = 5000;

const express = require('express');
const cors = require('cors');
const fs = require("fs");
const app = express();

app.use(cors())
app.use(express.json());   // body parser

const content = fs.readFileSync("categories.json", "utf-8");

console.log ({ content });
const categories = JSON.parse(content);

// read  olon too no id needed
app.get("/categories", (req, res) => {
    res.json(categories);
});    


// read one item
app.get("/categories/:id", (req, res) => {
    const {id } = req.params;
    const category  = categories.find(cat.id === id);   // neg shirheg barij avah uchras CATEGORY
    res.json(category);
});


// create
app.post("/categories", (req, res) => {
    const { name } = req.body;
    const id = new Date().toISOString();
    categories.push ({ 
        id, name: name 
    }); 
    fs.writeFileSync("categories.json", JSON.stringify(categories));
    res.status(201).json({ id });
});

//update 
app.put("/categories/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const index = categories.findIndex((cat) => cat.id === id);
    categories[index].name = name;
    fs.writeFileSync("categories.json", JSON.stringify(categories));
    res.json(["success"]);
});

//delete
app.delete("/categories/:id", (req, res) => {
    const { id } = req.params;
   categories = categories.filter((cat) => cat.id !== id);
   fs.writeFileSync("categories.json", JSON.stringify(categories));
   res.sendStatus(204);
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
