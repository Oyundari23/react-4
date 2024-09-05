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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Toaster, Toast } from "@/components/ui/sonner"
import { toast } from "sonner";

import { Separator } from "@/components/ui/separator"
import { categoryColors, categoryIcons } from "@/app/components/data";


export default function CategoryDialog( {open, onClose, onComplete }) {

  const [icon, setIcon] = useState("home");
  const [color, setColor] = useState("blue");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  function reset() {
    setName("");
    setColor("");
    setIcon("");
  }
  function closeDialog() {
    reset();
    onClose (false);
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
        onComplete();
        setLoading(false);
        closeDialog();

        toast("Successfully created. ");
      });
  }
  
  return (
    <main className="mx-auto w-[1440px]" >
        <div>
          {/* <Button variant="secondary" onClick={() => setOpen(true)} >Add new category</Button> */}
          <Button>add new category</Button>
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