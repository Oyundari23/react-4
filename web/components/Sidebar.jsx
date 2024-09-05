// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useRouter } from 'next/navigation'
import { Button } from './ui/button';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from '@radix-ui/react-select';
import CategoryDialog from './CategoryDialog';
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from 'react';

export function Sidebar() {
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");
    return (
        <div>
            <Button onClick={() => router.push(`?creat=new`)}>  + Add</Button>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Record</Button>
                </DialogTrigger>

                <DialogContent className="w-[792px]">
                    <DialogHeader>
                        <DialogTitle>Add Record</DialogTitle>
                        <Separator className="my-2" />
                        <div className='flex'>
                            <div className='w-[396px] h-[444px] p-[24px] flex-cols gap-5'>
                                <div className='flex items-center gap-3 h-[40px] mt-3'>
                                    <Button className="rounded-full w-[172px] bg-[#0166FF]" onClick={() => className = "bg-[#0166FF]"}>Expense</Button>
                                    <Button className="rounded-full w-[172px] bg-[#16A34A]">Income</Button>
                                </div>
                                <Input id="name" value="Amount" className="col-span-3" />
                                <Input id="Category" value="Choose" className="col-span-3 mt-3" />
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="secondary" className="rounded-full">Choose date{setDate}</Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>

                            </div>
                            <div className='w-[396px] h-[444px] p-[24px]'>
                                <div className='flex items-center gap-3 h-[40px] mt-3'>
                                    <Button className="rounded-full w-[172px] bg-[#0166FF]" onClick={() => className = "bg-[#0166FF]"}>Expense</Button>
                                    <Button className="rounded-full w-[172px] bg-[#16A34A]">Income</Button>
                                </div>
                                <Input id="name" value="Amount" className="col-span-3" />
                                <Input id="Category" value="Choose" className="col-span-3 mt-3" />
                              

                            </div>
                        </div>
                        <DialogDescription className="w-396px">
                            <CategoryDialog />
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}