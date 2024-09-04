import { useRouter } from 'next/navigation'
import { Button } from '../button';



export function Sidebar () {
    const router = useRouter();
    return <aside>
        
        Sidebar
        <Button onClick= {()=> router.push(`?creat=new`)}>  + Add</Button>
        </aside>;
}