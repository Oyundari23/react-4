"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Chart } from "@/components/ui/chart";
import { Button, button } from "@/components/ui/button";

export default function Home() {

  const [categories, setCategories] = useState([]);

  // console.log("categories", categories)

  function loadList() {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }
  useEffect(() => {
    loadList();
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:4000/categories/${id}`, {
      method:"DELETE",
    }).then((res) => { 
      if (res.status === 404) {
        alert ("Category not found");
      }
      loadList();
    });
  }
  function handleEdit(id) {
    fetch(`http://localhost:4000/categories/${id}`, {
      method:"",
    }).then((res) => { 
      if (res.status === 404) {
        alert ("Category not found");
      }
      loadList();
    });
  }
   
  function createNew() {
    const name = prompt("Name...");
    fetch(`http://localhost:4000/categories`, {
      method: "POST", 
      body: JSON.stringify({
        name: name, 
        }),
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

  return (
    <main>     
      <Button onClick={createNew}> add new</Button>
      {categories.map((category) => (
        <div key={category.name}>
          <p>{category.name}
          </p>
          {/* <Button onClick={editTask}>edit</Button> */}
          <Button onClick={ () => handleDelete (category.id)}>Delete</Button>
          <Button onClick={ () => handleEdit  (category.id)}> Edit</Button>       
        </div>
      ))}
      <div>
        wrong data 
        <button onClick={( ) => handleDelete("wrong ID")}>Delete</button>
      </div>   
    </main>
  );
}