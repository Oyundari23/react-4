"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { House, Fingerprint, Apple, Baby, Bean, Bug, Cannabis, Car, Cherry, Citrus, Blocks, Calendar, Check, CircleArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"


import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

// const tags = Array.from({ length: 50 }).map(
//   (_, i, a) => `v1.2.0-beta.${a.length - i}`
// )

import { Toaster, Toast } from "@/components/ui/sonner"
import { toast } from "sonner";
import { categoryColors, categoryIcons } from "./components/data";
import { Header } from "@/components/ui/comps/Header";
import { Sidebar } from "@/components/ui/comps/Sidebar";
import { RecordDialog } from "@/components/ui/comps/RecordDialog";

// import { TrendingUp } from "lucide-react"
// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"
// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ]


export default function Home() {

  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("home");
  const [color, setColor] = useState("blue");
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingCategory, setEditingCategory] = useState();

  console.log("categories: ", categories);

  function loadList() {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }

  function reset() {
    setName("");
    setColor("");
    setIcon("");
    setEditingCategory(null);
  }
  function closeDialog() {
    reset();
    setOpen(false);
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
      method: "",
    }).then((res) => {
      if (res.status === 404) {
        alert("Category not found");
      }
      loadList();
    });
  }

  function createNew() {
    setLoading(true);
    fetch(`http://localhost:4000/categories`, {
      method: "POST",
      body: JSON.stringify({
        icon: icon,
        color: color,
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
        setLoading(false);
        closeDialog();

        toast("Successfully created. ");
      });
  }
  // console.log({ editingCategory });
  useEffect(() => {
    if (editingCategory) {
      setOpen(true);
      setName(editingCategory.name);
      setIcon(editingCategory.icon);
      setColor(editingCategory.color);
    }

  }, [editingCategory]);  // dotorh ym ni uurchlugdu ued ajillana 


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

  console.log({ color, icon, name });
  return (
    <main className="mx-auto w-[1440px]" >
     <Header/>
     <Sidebar/>
     <RecordDialog/>

      {/* card */}

      <div className="flex justify-between mt-8 px-[120px]">
        <Card className="w-[384.12px] h-[219.66px]">
          <CardHeader className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 bg-[#0166FF] rounded-full"></div>
              <div className="font-bold text-base ">Total expenses</div>
            </div>
            <Separator className="" />
            <div className="flex flex-col gap-2">
              <div className="text-4xl font-bold mt-3">1,200,000₮</div>
              <div className="text-lg text-[#64748B]">Your income amount</div>
            </div>
            <div className="flex gap-4">  <CircleArrowUp className="bg-green" />
              32% from last month</div>
          </CardHeader>
        </Card>
        <Card className="w-[384.12px] h-[219.66px]">
          <CardHeader className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 bg-[#84CC16] rounded-full"></div>
              <div className="font-bold text-base ">Your income </div>
            </div>
            <Separator className="" />
            <div className="flex flex-col gap-2">
              <div className="text-4xl font-bold mt-3">1,200,000₮</div>
              <div className="text-lg text-[#64748B]">Your income amount</div>
            </div>
            <div className="flex gap-4">  <CircleArrowUp className="bg-green" />
              32% from last month</div>
          </CardHeader>
        </Card>
        <Card className="w-[384.12px] h-[219.66px]">
          <CardHeader className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 bg-[#0166FF] rounded-full"></div>
              <div className="font-bold text-base ">Total expenses</div>
            </div>
            <Separator className="" />
            <div className="flex flex-col gap-2">
              <div className="text-4xl font-bold mt-3">-1,200,000₮</div>
              <div className="text-lg text-[#64748B]">Your total expense amount</div>
            </div>
            <div className="flex gap-4">  <CircleArrowUp className="bg-green" />
              32% from last month</div>
          </CardHeader>
        </Card>
      </div>

      {/* SCROLL AREA  */}
      <div className="px-[120px] mt-8">
        <ScrollArea className="h-72 w-full rounded-md border">
          <div className="p-4">
            <h3 className="mb-4">Last records</h3>

            {categories.map(category =>
              <div key={category.id}>
                {category.name}
              </div>
            )}

          </div>
        </ScrollArea>
      </div>


      <div>
        <div>
          <Button variant="secondary" onClick={() => setOpen(true)} >Add new category</Button>
          <Dialog open={open}>
            <DialogContent onClose={closeDialog} className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add category</DialogTitle>
              </DialogHeader>
              <div className="flex gap-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="secondary">
                      <CategoryIcon iconName={icon} color={color} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid grid-cols-6 gap-3">
                      {categoryIcons.map(({ name, Icon }) => (
                        <div key={Icon} onClick={() => setIcon(name)} className={`flex justify-center items-center px-1 py-1 ${icon === name ? "bg-slate-200 rounded-lg " : ""}`}>
                          <Icon />
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-6 gap-5 mt-5">
                      {categoryColors.map(({ name, Value }) => (
                        <div key={name} onClick={() => setColor(name)} className="w-7 h-7 rounded-full text-white flex justify-center items-center " style={{ backgroundColor: Value }}>
                          {color === name && <Check className="w-4 h-4" />}
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
                <Input disabled={loading}
                  value={name} onChange={(e) => setName(e.target.value)}
                  className="col-span-6"
                />
              </div>
              <DialogFooter>
                <Button disabled={loading} className="w-full rounded-full bg-[#16A34A] hover:bg-green-700" onClick={createNew} >Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {categories.map((category) => (
        <div key={category.id} className="flex gap-4 mt-4">
          <CategoryIcon iconName={category.color} color={category.icon} />
          {category.name}<Button>Edit</Button>
          <Button onClick={() => handleDelete(category.id)}>Delete</Button>
        </div>
      ))}
      <Toaster />
    </main>
  );
}

function CategoryIcon({ iconName, color }) {
  const iconObject = categoryIcons.find((item) => item.name === color);
  const colorObject = categoryColors.find((item) => item.name === iconName);

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