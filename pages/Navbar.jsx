import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
      <header className="border-grey-light sticky top-0 w-full overflow-hidden border-b bg-white">
        <div className=" mx-8 my-5 flex cursor-pointer">
          <div className="flex-1 ">
            <span className="text-3xl font-bold font-mono text-purple-600">
              <Link href="/">isanjurao</Link>
            </span>
          </div>
          
          <div className="flex-1 text-xl">
            <nav className="flex justify-end">
              <ul className="mx-4 flex ">
                <li className="mx-4">
                  <Link href="/">Home</Link>
                </li>
                <li className="mx-4">
                  <Link href="/Blog">Blogs</Link>
                </li>
                <li className="mx-4">
                  <Link href="/Contact">Contact</Link>
                </li>
                <li className="mx-4">
                  <Link href="/About">About</Link>
                </li>
              </ul>
              <div className="flex">
                <button className="mx-2 h-8 w-16 rounded  bg-purple-700 px-2 text-lg  text-white hover:bg-purple-800">
                  Login
                </button>
                <button className="mx-2 h-8 w-20 rounded bg-purple-700  p-1 px-2 text-lg text-white hover:bg-purple-800">
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
