const { Certificate } = require("crypto");
const fs = require("fs");
const { v4: uuidv4 } = require ("uuid");
const { sql } = require("../configs/database");

async function createNewCategory ( input ) {
    const id = uuidv4(); 
   await sql `insert into category (id, name ) values (${id}, ${input.name})`;
    return id;
}

async function getCategories() {
    const list = await sql `select * from category`;
    console.log({list});
    return list;
}

module.exports = {
    createNewCategory, 
    getCategories,
    // getOneCategory, 
    // updateCategory, 
    // deleteCategory, 
}

// function getCategories() {
//     const content = fs.readFileSync("data/categories.json", "utf-8");
//     const categories = JSON.parse(content);
//     return categories; 
// }

// function getCategories() {}
// function getOneCategory(id) {}
// function updateCategory(id, update) {}
// function deleteCategory(id) {}

