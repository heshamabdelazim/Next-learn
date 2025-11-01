"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

function page() {
    const x = Array.from({length:10}, (_,i)=>i+1);
    console.log(x);

    console.log(usePathname())
    
    
  return (
    <div>

    {x.map((gg, i)=>(<Link key={i} href={`${usePathname()}/${i}`}>User{i}</Link>))}

    </div>
  )
}

export default page
