"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { House, Fingerprint, Apple, Baby, Bean, Bug, Cannabis, Car, Cherry, Citrus, Blocks, Calendar, Check, CircleArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button"

import { Toaster, Toast } from "@/components/ui/sonner"
import { toast } from "sonner";
import { categoryColors, categoryIcons } from "./components/data";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { RecordDialog } from "@/components/RecordDialog";
import CategoryDialog from "@/components/CategoryDialog";
import Cards from "@/components/Cards";


export default function Home() {

  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState();

  console.log("categories: ", categories);

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
      method: "DELETE",
    }).then((res) => {
      if (res.status === 404) {
        alert("Category not found");
      }
      loadList();
    });
  }
  function handleEdit(id) {
    fetch(`http://localhost:4000/categories/${id}`, {
      method: "EDIT",
    }).then((res) => {
      if (res.status === 404) {
        alert("Category not found");
      }
      loadList();
    });
  }

  function updateCategory() {
    setLoading(true);
    fetch(`http://localhost:4000/categories/${editingCategory.id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        color: color,
        icon: icon,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        // https://www.geeksforgeeks.org/get-and-post-method-using-fetch-api/
      },
    })
      .then(() => {
        loadList();
        setLoading(false);
        closeDialog();
        toast("Successfully updated. ");
      });
  }

  return (
    <main className="mx-auto w-[1440px]" >
      <Header />
      <Cards/>
      <Sidebar/>
      <RecordDialog />
      <CategoryDialog open={open} onClose={() => setOpen(false)} onComplete={loadList} />
      <Button variant="secondary" onClick={() => setOpen(true)} >Add new category</Button>

      {categories.map((category) => (
        <div key={category.id} className="flex gap-4 mt-4">
          <CategoryIcon iconName={category.icon} color={category.color} />
          {category.name}<Button onClick={() => setEditingCategory(category)}>Edit</Button>
          <Button onClick={() => handleDelete(category.id)}>Delete</Button>
        </div>
      ))}
      <Toaster />
    </main>
  );
}

function CategoryIcon({ iconName, color }) {
  const iconObject = categoryIcons.find((item) => item.name === iconName);
  const colorObject = categoryColors.find((item) => item.name === color );

  console.log("colorObject", colorObject)
  console.log("iconObject", iconObject)

  if (!iconObject) {
    return <House />;
  }

  let hexColor;
  if (!colorObject) {
    hexColor = "#000";
  } else {
    hexColor = colorObject.Value;
  }
  const { Icon } = iconObject;
  return <Icon style={{ color: hexColor }} />;
}
