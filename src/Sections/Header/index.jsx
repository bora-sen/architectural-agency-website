import React from 'react'

function Header() {
  return (
    <header className='w-full h-auto py-4 z-50 fixed top-0 flex justify-center md:justify-start items-center md:px-12 bg-white bg-opacity-20 backdrop-blur-lg'>
        <a className='text-3xl font-bold' href="/">architecture</a>
    </header>
  )
}

export default Header