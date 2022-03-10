import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
      <header className="border-grey-light sticky top-0 w-full overflow-hidden border-b bg-white">
        <div className="md:mx-8 my-5 flex cursor-pointer">
          <div className="flex-1 ">
            <span className="md:text-3xl text-lg font-bold font-mono text-purple-600">
              <Link href="/">isanjurao</Link>
            </span>
          </div>
          
          <div className="flex-1 md:text-xl">
            <nav className="md:flex justify-end">
              <ul className="md:mx-4 flex ">
                <li className="mx-1 md:mx-4">
                  <Link href="/">Home</Link>
                </li>
                <li className="mx-1 md:mx-4">
                  <Link href="/Blog">Blogs</Link>
                </li>
                <li className="mx-1 md:mx-4">
                  <Link href="/Contact">Contact</Link>
                </li>
                <li className="mx-1 md:mx-4">
                  <Link href="/About">About</Link>
                </li>
              </ul>
              <div className="flex">
                <button className="mx-1 md:mx-2 md:h-8 md:w-16 rounded  bg-purple-700 p-1 md:px-2 md:text-lg  text-white hover:bg-purple-800">
                  Login
                </button>
                <button className="mx-1 md:mx-2 md:h-8 md:w-20 rounded bg-purple-700  p-1 md:px-2 md:text-lg text-white hover:bg-purple-800">
                  Signup
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
