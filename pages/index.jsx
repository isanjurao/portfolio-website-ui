
import Head from 'next/head'
import Link from "next/link"

const Home = () => {
  return <>
    <div className="mt-8 h-screen ">
      <Head>
        <title>isanjurao.com</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      
        <div className="flex">
        <div className="flex flex-col w-1/2 items-center justify-center ">
          <div className="flex text-3xl md:text-5xl text-center font-semibold ml-40 md:ml-0 w-[300px] md:w-fit">
            <span className="text-gray-800">Welcom to</span>
            <span className="ml-2 text-indigo-600">isanjurao</span>
          </div>
          <div className='mt-8 ml-40 md:ml-0 text-sm text-gray-500 md:w-1/2 md:h-fit h-[190px] w-[240px] '>
            <p>
              Confused on which course to take? I have got you covered. Browse
              courses and find out the best course for you. Its free! Code With
              Harry is my attempt to teach basics and those coding techniques to
              people in short time which took me ages to learn.
            </p>
          </div>
          <div className=' bg-gray-300 p-2 rounded-md hover:bg-gray-400 mt-4'>
            <Link href='/Blog'><button>Explore blogs</button></Link>
          </div>
        </div>
        <div className="hidden md:inline flex-1 bg-clip-content ">
          <img className="h-[300px] xl:h-[600px] rounded-md xl:rounded-full" src="./logo.png" alt="" />
          </div>
      </div>
    </div>
    </>
}
export default Home

        

