"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
import { Separator } from "@radix-ui/react-select";
import { CircleArrowUp } from "lucide-react";


export default function Cards( {}) {
  
  return (
    <main className="mx-auto w-[1440px]" >
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
    
    
    </main>
  );
}
