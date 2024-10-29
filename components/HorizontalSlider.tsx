import { motion, useTransform, useScroll } from "framer-motion";
import { ArrowUpRight, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const Example = () => {
  return (
    <motion.div
    >
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div> */}
      <div>
      <div className='fixed top-0 left-0 w-[4em] h-[44.6em] border-x-[1px] border-b-[1px] border-white flex items-center justify-center mt-[4em] z-50 bg-black/40 backdrop-blur-lg transition-all'>
         <div className='text-xl -rotate-90 whitespace-nowrap -mt-[4em] uppercase'>
           <span>Theo Hue Williams <span className='text-neutral-500'>|</span> Production</span>
         </div>
       </div>
       <div className='fixed top-0 right-0 h-[44.6em] border-r-[1px] border-b-[1px] border-white flex items-center justify-center mt-[4em] z-50'>
       </div>
             <div className='h-screen w-screen border-[1px] border-white fixed'></div>

      </div>
      <HorizontalSlider />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </motion.div>
  );
};

const HorizontalSlider = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-53%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-2" initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    // <div
    //   key={card.id}
    //   className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    // >
    //   <div
    //     style={{
    //       backgroundImage: `url(${card.url})`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //     }}
    //     className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
    //   ></div>
    //   <div className="absolute inset-0 z-10 grid place-content-center">
    //     <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-black backdrop-blur-lg">
    //       {card.title}
    //     </p>
    //     <div className="text-5xl mt-4 text-black">
    //       {card.client && <p className="text-lg">{card.client}</p>}
    //       {card.director && <p className="text-lg">{card.director}</p>}
    //     </div>
    //   </div>
    // </div>
    <motion.div key={card.id} className=" h-[350px] w-[350px] ml-16 flex flex-col gap-6 -mt-24">
        <div className="img relative group z-50">
            <a target="_blank" href={card.website}><img 
                src={card.url} 
                className="w-full group-hover:opacity-50 duration-700 transition-all" 
            />
            <div className="absolute top-[10em] left-[9.5em] opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
                <SquareArrowOutUpRight size={50} strokeWidth={2} />
            </div></a>
        </div> 
        <div className="content flex flex-col gap-4">
            <p className="font-semibold text-2xl">{card.title}</p>
            <div className="flex justify-between">
                <div>
                    <p className="uppercase text-neutral-400 text-sm">Client</p>
                    <p className="font-semibold">{card.client}</p>
                </div>
                <div className="pr-1">
                    <p className="uppercase text-neutral-400 text-sm">Director</p>
                    <p className="font-semibold">{card.director}</p>
                </div>
            </div>
            <div>
                <p className="uppercase text-neutral-400 text-sm">Further Info</p>
                <div className="flex items-center gap-2">
                    <Link href={card.website} className="font-semibold z-50">Show</Link> 
                    <ArrowUpRight strokeWidth={3} className="text-neutral-400 w-[18px]" />
                </div>
            </div>
        </div>
    </motion.div>
  );
};

export default Example;

type CardType = {
    url: string;
    title: string;
    client?: string; // Made optional
    director?: string; // Made optional
    website: string;
    id: number;
  };

const cards: CardType[] = [
  {
    url: "/imgs/1.jpg",
    title: "After Hours",
    client: "Weeknd",
    director: "Olafur",
    website: "https://arcticmonkeys.com/",
    id: 1,
  },
  {
    url: "/imgs/2.jpg",
    title: "Yellow",
    client: "Coldplay",
    director: "Felix",
    website: "https://arcticmonkeys.com/",
    id: 2,
  },
  {
    url: "/imgs/3.jpg",
    title: "Wanna be yours",
    client: "Arctic Monkeys",
    director: "Felix",
    website: "https://arcticmonkeys.com/",
    id: 3,
  },
  {
    url: "/imgs/4.jpg",
    title: "See you again",
    client: "Tyler",
    director: "Saad",
    website: "https://arcticmonkeys.com/",
    id: 4,
  },
  {
    url: "/imgs/5.jpg",
    title: "Westcoast",
    client: "Lana Del Rey",
    director: "Walid",
    website: "https://arcticmonkeys.com/",
    id: 5,
  },
  {
    url: "/imgs/6.jpg",
    title: "Let it Happen",
    client: "Tame Impala",
    director: "Dexter",
    website: "https://arcticmonkeys.com/",
    id: 6,
  },
  {
    url: "/imgs/7.jpg",
    title: "Eva",
    client: "Gaga",
    director: "Noah",
    website: "https://arcticmonkeys.com/",
    id: 7,
  },
];

