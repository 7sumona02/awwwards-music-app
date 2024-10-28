'use client'
import {motion} from 'framer-motion'

const Example = () => {
    return (
        <div className="">
            <div className='fixed top-0 left-0 w-[4em] h-[44.6em] border-x-[1px] border-b-[1px] border-white flex items-center justify-center mt-[4em] z-50 bg-black/40 backdrop-blur-lg transition-all'>
                <div className='text-xl -rotate-90 whitespace-nowrap -mt-[4em] uppercase'>
                <span>Theo Hue Williams <span className='text-neutral-500'>|</span> Production</span>
                </div>
            </div>
            <Contact />
        </div>
    )
}

const Contact = () => {
    return (
      <motion.div className="flex mr-[20vw]"
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5}}
      >
        <div className="flex justify-center items-center h-screen w-screen">
          <div className="flex flex-col gap-10">
            <h1 className="text-6xl font-medium uppercase">Contact</h1>
            <div className="flex flex-col gap-2">
              <p className="uppercase text-neutral-400">Email</p>
              <p className="font-semibold">theohwimage@gmail.com</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="uppercase text-neutral-400">Mobile</p>
              <p className="font-semibold">+447887593795</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="uppercase text-neutral-400">Insta</p>
              <p className="font-semibold">@theohuewilliams</p>
            </div>
          </div>
          <div>
  
          </div>
        </div>
        <div className="flex flex-col h-screen w-screen justify-center max-w-xl font-medium gap-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odio expedita laudantium deleniti ipsum blanditiis magni voluptas molestiae accusamus illum inventore hic libero, nostrum autem. Ea nostrum omnis harum tempora?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, in.</p>
        </div>
      </motion.div>
    );
  };
  
  export default Example;