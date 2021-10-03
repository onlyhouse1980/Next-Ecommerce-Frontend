import Link from "next/link";
import { useRouter } from 'next/router'
import Over from '../../pages/over/[last_name]'
export default function Users() {

    const router = useRouter();

    return (
        <main>
            <h1>👤 <em>{router.query.name}'s Account</em></h1>
           
            <Link href="/">back to homepage</Link>
            
        </main>
    );
}