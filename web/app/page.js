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


const categoryIcons = [
  {
    name: 'home',
    Icon: House,
  },
  {
    name: 'fingerprint',
    Icon: Fingerprint,
  },
  {
    name: 'blocks',
    Icon: Blocks,
  },
  {
    name: 'apple',
    Icon: Apple,
  },
  {
    name: 'baby',
    Icon: Baby,
  },
  {
    name: 'bean',
    Icon: Bean,
  },
  {
    name: 'bug',
    Icon: Bug,
  },
  {
    name: 'Cannabis',
    Icon: Cannabis,
  },
  {
    name: 'car',
    Icon: Car,
  },
  {
    name: 'cherry',
    Icon: Cherry,
  },
  {
    name: 'citrus',
    Icon: Citrus,
  },
  {
    name: 'calendar',
    Icon: Calendar,
  },
]

const categoryColors = [
  {
    name: 'blue',
    Value: "#0166FF",
  },
  {
    name: 'lightblue',
    Value: "#01B3FF",
  },
  {
    name: 'green',
    Value: "#41CC00",
  },
  {
    name: 'yellow',
    Value: "#F9D100",
  },
  {
    name: 'orange',
    Value: "#FF7B01",
  },
  {
    name: 'purple',
    Value: "#AE01FF",
  },
  {
    name: 'red',
    Value: "#FF0101",
  },
]
export default function Home() {

  const [mainpages, setMainpages] = useState([]);
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");

  function loadList() {
    fetch("http://localhost:4000/mainpages")
      .then((res) => res.json())
      .then((data) => {
        setMainpages(data);
      });
  }
  useEffect(() => {
    loadList();
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:4000/mainpages/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 404) {
        alert("Category not found");
      }
      loadList();
    });
  }
  function handleEdit(id) {
    fetch(`http://localhost:4000/mainpages/${id}`, {
      method: "",
    }).then((res) => {
      if (res.status === 404) {
        alert("Category not found");
      }
      loadList();
    });
  }

  function createNew() {
    const name = prompt("Name...");
    fetch(`http://localhost:4000/mainpages`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        color: color,
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
    <main className="mx-auto w-[1440px]"  >
      {mainpages.map((mainpage) => (
        <div key={mainpage.title}>
          <p>{mainpage.title}
          </p>
          <p>{mainpage.id}
          </p>
        </div>
      ))}

      <div className="w-[1440px] bg-white flex gap-10 justify-between ">
        <div className="w-[225px] flex gap-6">
          <p>icon </p>
          <p>Dashboard</p>
          <p>Records</p>
        </div>
        <div className="w-[163px] h-[40px] flex gap-6  p-1 ">
          <div className="w-[99px] h-[32px] rounded-2xl bg-[#0166FF] text-center py-1 text-white text-sm">+ Record</div>
          <div> zurag</div>
        </div>
      </div>

      {/* card */}

      <div className="flex justify-between mt-8 px-[120px]">
        <Card className="w-[384.12px] h-[219.66px]">
          <CardHeader>
            <CardTitle>Your income </CardTitle>
            <CardDescription>
              <p>10,000,000 MNT</p>
              <p>Your income amount</p> </CardDescription>
          </CardHeader>
          <CardContent>

          </CardContent>
          <CardFooter className="flex gap-2">
          <CircleArrowUp className=""/>
          <p>32% from last month</p>
          </CardFooter>
        </Card>
        <Card className="w-[384.12px] h-[219.66px]">
          <CardHeader>
            <CardTitle>Your income </CardTitle>
            <CardDescription>
              <p>10,000,000 MNT</p>
              <p>Your income amount</p> </CardDescription>
          </CardHeader>
          <CardContent>

          </CardContent>
          <CardFooter className="flex gap-2">
          <CircleArrowUp />
          <p>32% from last month</p>
          </CardFooter>
        </Card>
        <Card className="w-[384.12px] h-[219.66px]">
          <CardHeader>
            <CardTitle>Total expenses</CardTitle>
            <CardDescription>
              <p>10,000,000 MNT</p>
              <p>Your income amount</p> </CardDescription>
          </CardHeader>
          <CardContent>
          </CardContent>
          <CardFooter className="flex gap-2">
          <CircleArrowUp />
          <p>32% from last month</p>
          </CardFooter>
        </Card>

      </div>

      <div>
        <div>
          <Button variant="secondary" onClick={() => setOpen(true)}>Add new category</Button>
          <Dialog open={open}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add category</DialogTitle>
              </DialogHeader>
              <div className="flex gap-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="secondary"><House /></Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid grid-cols-6 gap-5">
                      {categoryIcons.map(({ name, Icon }) => (
                        <div key={name}>
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
                <Input
                  id="username"
                  defaultValue="Name"
                  className="col-span-6"
                />
              </div>
              <DialogFooter>
                <Button className="w-full rounded-full bg-[#16A34A] hover:bg-green-700">Add</Button>
                {/* <Button onClick= {() => setOpen(false)}>Close</Button> */}
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </main>
  )
}