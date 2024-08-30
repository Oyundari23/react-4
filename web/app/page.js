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

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

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
  const [name, setName] = useState("");

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


  console.log({color, icon, name} );
  return (
    <main className="mx-auto w-[1440px]" >
      {mainpages.map((mainpage) => (
        <div key={mainpage.title}>
          <p>{mainpage.title}
          </p>
          <p>{mainpage.id}
          </p>
        </div>
      ))}

      <div className="px-[120px] bg-white flex gap-10 justify-between bg-slate-50 h-[72px] items-center ">
        <div className="w-[225px] flex gap-6">
          <div><Image src="/images/Vector.png" width={100} height={100} alt="logo" /></div>
          <div>Dashboard</div>
          <div>Records</div>
        </div>
        <div className="w-[163px] h-[40px] flex gap-6  p-1 ">
          <Button className="w-[99px] rounded-2xl bg-[#0166FF] h-[32px]">+ Record</Button>
          <div> <Image src="/images/Placeholder.png" width={50} height={50} alt="profile" /></div>
        </div>
      </div>

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

      {/* graph */}
      {/* <Card>
        <CardHeader>
          <CardTitle>Bar Chart - Multiple</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer >
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card> */}

      {/* SCROLL AREA  */}
      <div className="px-[120px] mt-8">
        <ScrollArea className="h-72 w-full rounded-md border">
          <div className="p-4">
            <h3 className="mb-4">Last records</h3>
            {tags.map((tag) => (
              <>
                <div key={tag} className="text-sm">
                  {tag}
                </div>
                <Separator className="my-2" />
              </>
            ))}
          </div>
        </ScrollArea>
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
                    <div className="grid grid-cols-6 gap-3">
                      {categoryIcons.map(({ name, Icon }) => (
                        <div key={name} onClick={()=> setIcon(name)} className={`flex justify-center items-center px-1 py-1 ${icon === name ? "bg-slate-200 rounded-lg " : ""}`}>
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
                  value={name} onChange={(e)=> setName(e.target.value)}
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