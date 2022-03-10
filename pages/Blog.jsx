import Link from "next/link"
const Blog = () => {
  return <>

  <div className="mt-8 h-screen mx-20">
    
  <div className='h-[160px] w-[700px]'>
  <Link href='/blogpost/This is my first blog'> 
  <h1 className='cursor-pointer text-3xl'>This is my first blog</h1>
  </Link>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis excepturi ab obcaecati nihil autem at pariatur enim fuga nam quaerat deserunt natus repudiandae rem, ratione mollitia, veritatis quisquam nisi? Fugit id vero fuga error.</p>
  </div>
  <div className='h-[160px] w-[700px]'>
    <h1 className='text-3xl'>Lorem ipsum dolor sit amet consectetur.</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis excepturi ab obcaecati nihil autem at pariatur enim fuga nam quaerat deserunt natus repudiandae rem, ratione mollitia, veritatis quisquam nisi? Fugit id vero fuga error.</p>
  </div>
  <div className='h-[160px] w-[700px]'>
    <h1 className='text-3xl'>Lorem ipsum dolor sit amet consectetur.</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis excepturi ab obcaecati nihil autem at pariatur enim fuga nam quaerat deserunt natus repudiandae rem, ratione mollitia, veritatis quisquam nisi? Fugit id vero fuga error.</p>
  </div>
  <div className='h-[160px] w-[700px]'>
    <h1 className='text-3xl'>Lorem ipsum dolor sit amet consectetur.</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis excepturi ab obcaecati nihil autem at pariatur enim fuga nam quaerat deserunt natus repudiandae rem, ratione mollitia, veritatis quisquam nisi? Fugit id vero fuga error.</p>
  </div>

  </div>

  </>
}

export default Blog