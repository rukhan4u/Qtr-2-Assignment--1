import Link from'next/link';

export default function Navbar(){
    return(
        <div className='flex gap-2 text-1x1 bg-blue-200'>
            <Link href='/Home'>Home</Link>
            <br/>
            <Link href='/About'>About</Link>
            <br/>
            <Link href='/Jobs'>Jobs</Link>
            <br/>
            <Link href='/Program'>Program</Link>
            <br/>
            <Link href='/ContactUs'>ContactUs</Link>
        </div>

        

    );
}