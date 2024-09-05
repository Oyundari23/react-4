import { useRouter } from 'next/navigation'
import { Button } from './ui/button';
import { useSearchParams } from 'next/navigation'

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



export function RecordDialog() {
    const searchParams = useSearchParams();
    const creat = searchParams.get('creat');

    const open = creat === "new";
    return (
        <Dialog open={open}>
            <DialogContent 
            
            // onClose={closeDialog} 
            
            className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add category</DialogTitle>
                </DialogHeader>
                <DialogFooter>
                    <Button 
                    // disabled={loading}
                     className="w-full rounded-full bg-[#16A34A] hover:bg-green-700" 
                    //  onClick={createNew} 
                     >Add</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
     
                    );
}