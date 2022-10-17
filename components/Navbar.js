import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div>
            <Link href= "/">
            <a>Coder wikipedia</a>  
            </Link>
                
        </div>
        <div>
            <Link href="/coders">
                <a>Coder all</a>
           
            </Link>
            <Link href="/about">
                <a>Abount</a>
            </Link>


        </div>
        
        
    </nav>
   
  )
}
