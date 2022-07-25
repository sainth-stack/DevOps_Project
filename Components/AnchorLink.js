import React from 'react'
import Link from 'next/link'

export default function AnchorLink({ title, path = "/" }) {
  return (
    <Link href={path}>
    <a className='text-dark text-decoration-none p-2 m-2'>{title}</a> 
    </Link>
    
  )
}
