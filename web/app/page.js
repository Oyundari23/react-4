"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [categories, setCategories] = useState([]);

  // console.log("categories", categories)

  function loadList() {
    fetch("http://localhost:5000/categories/list")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }
  useEffect(() => {
    loadList();
  }, []);

  function createNew() {
    const name = prompt("Name...");
    fetch(`http://localhost:5000/categories/create?name=${name}`, {
      method: "POST", 
      body: JSON.stringify({
        name: name, 
        body_html: `hjkfghh<sgsg>fgskfgkshgnkshfgks` }),
      headers: {
         "Content-type": "application/json; charset=UTF-8", 
         // https://www.geeksforgeeks.org/get-and-post-method-using-fetch-api/
      },
    })
      .then((res) => res.json())
      .then(() => {
        loadList();
      });
  }

  function deleteTask(position) {
    if (confirm("Are you sure?")) {
      categories.splice(position, 1);
    
    }
  }
  function editTask(position) {
    const oldvalue = categories[position].name;
    const newvalue = prompt("Edit Task", oldvalue);
    if (newvalue !== null) {
      categories[position].name = newvalue;
    }
   
  }

  return (
    <main>
      <button onClick={createNew}> Add new </button>
      {categories.map((category) => (
        <div key={category.name}>
          <p>{category.name}
          </p>
          <button onClick={editTask}>edit</button>
          <button onClick={deleteTask}>delete</button>
        </div>
      ))}
   
    </main>
  );
}