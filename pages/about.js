import React from 'react'
import Link from 'next/link'

export default function About(){
  return(
    <div>
     <ul>
      <li>
       <Link href="/">
        <a>Home</a>
       </Link>
      </li>
      <li>
       <Link href="/about">
        <a>Sobre o Projeto</a>
      </Link>
      </li>
     </ul>
    </div>
  )
}
