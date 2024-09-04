import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Button } from '../button';


export function Header() {
    return <header>
        <div className="px-[120px] bg-white flex gap-10 justify-between bg-slate-50 h-[72px] items-center ">
            <div className="w-[225px] flex gap-6">
                <div><Image src="/images/Vector.png" width={100} height={100} alt="logo" /></div>
                <div>Dashboard</div>
                <div>Records</div>
            </div>
            {/* <div className="w-[163px] h-[40px] flex gap-6  p-1 ">
                <Button className="w-[99px] rounded-2xl bg-[#0166FF] h-[32px]">+ Record</Button>
                <div> <Image src="/images/Placeholder.png" width={50} height={50} alt="profile" /></div>
            </div> */}
             <Button onClick= {()=> router.push(`?creat=new`)}>  + Add</Button>
        </div>
    </header>;
}