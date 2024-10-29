import Link from "next/link"

const Nav = () => {
    return (
      <div className='z-50 fixed top-0 right-0 left-0 flex h-[4em] justify-end py-4 px-6 border-[1px]  border-white bg-black/60 backdrop-blur-lg'>
        <div className='text-xl flex gap-4'>
          <Link href='/' className='hover:font-semibold focus:font-semibold duration-300 transition-all'>WORK</Link>
          <Link href='/contact' className='hover:font-semibold focus:font-semibold duration-300 transition-all'>CONTACT</Link>
        </div>
      </div>
    )
  }

  export default Nav;