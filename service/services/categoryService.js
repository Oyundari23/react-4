const { Certificate } = require("crypto");
const fs = require("fs");
const { v4: uuidv4 } = require ("uuid");
const { sql } = require("../configs/database");

async function createNewCategory ( {name, color, icon } ) {
    const id = uuidv4(); 
   await sql `insert into category (id, name, icon, color) values (${id}, ${name}, ${color}, ${icon})`;
    return id;
}

async function getCategories() {
    const list = await sql `select * from category order by name asc`;
    return list;
}

async function getOneCategories(id) {
    const list = await sql `select * from category where id = ${id}`;   // where used as filter ==> where age > 18 and gender = 'female';
    if (list.length) {
        return list [0];
    }
    return null;
}


async function deleteOneCategory(id) {
   await sql `delete from category where id = ${id}`;
}


async function updateOneCategory(id, update) {
   await sql `update category set name = ${update.name}   where id = ${id}`;   // where used as filter ==> where age > 18 and gender = 'female';
    
}

module.exports = {
    createNewCategory, 
    getCategories,
    getOneCategories,
    deleteOneCategory,
    updateOneCategory,
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

