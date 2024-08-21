const { app } = require("./configs/basic");
const { sql } = require("./configs/database");
const { getCategories, createNewCategory  } = require("./services/categoryService"); 


// read  olon too no id needed
app.get("/categories", async (req, res) => {
    const list = await getCategories();
    res.json(list);
});   

// create
app.post("/categories", async (req, res) => {
    const input = req.body;
    const id = await createNewCategory ( input );
    res.status(201).json({ id });
    }); 

    app.get("/dbtest", async (req, res) => {
        const result = await sql`select version()`;
        console.log(result);
        res.json(result);
    });  
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 5000;

// app.use(cors())
// app.use(express.json());   // body parser

// const fs = require("fs");
// const { v4: uuidv4 } = require ("uuid");


// const app = startApp();   // basic js iig ajillulahin tuld 

// app.get("/categories", );
// app.get("/categories/:id", );
// app.post("/categories");
// app.put("/categories/:id");
// app.delete("/categories/:id");


// const content = fs.readFileSync("data/categories.json", "utf-8");
// const categories = JSON.parse(content);

// async function createNewCategory ( form ) {
//     const id = uuidv4(); 
//     form.id = id; 
//     categories.push(form);
//     fs.writeFileSYnc("data/categories.json", JSON.stringify(categories));
//     return id;
// }         //categoryService.js ruu oruulsan 





  

// // read one item
// app.get("/categories/:id", (req, res) => {
//     const {id } = req.params;
//     const one = getOneCategory(id);
//     // const category  = categories.find(cat.id === id);   // neg shirheg barij avah uchras CATEGORY
//     res.json(one);
// });


 

// //update 
// app.put("/categories/:id",async (req, res) => {
//     const { id } = req.params;
//     const { name } = req.body;
   
//     if ( !name ) {
//         res.status(400).json({ message: "`name ` field is required"}); 
//         return; 
//     }
//     await updateCategory(id, {name}); 
//     res.sendStatus(204);
// });

// //delete
// app.delete("/categories/:id", async (req, res) => {
//     const { id } = req.params;
//     const deleteIndex = categories.findIndex ( (cat) => cat.id === id);
//     if (deleteIndex < 0 ) {
//         res.sendStatus(404);
//         return;
//     }

//     await deleteCategory(id); 
//     res.sendStatus(204);
// });



// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// });
