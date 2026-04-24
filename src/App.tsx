import { useState, useRef } from 'react'
import React from 'react'
import { Button } from './components/animate-ui/components/buttons/button'
import "./index.css"
import { ButtonGroup, ButtonGroupSeparator } from './components/ui/button-group'
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar"
import { Separator } from '@/components/ui/separator'
import { 
  HomeIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
  VideoIcon,
} from 'lucide-react'
import PosterRafa from './assets/Poster_Rafa.png'
import NetflixIcon from './assets/netflix-icon.svg'
import {
  Cursor,
  CursorFollow,
  CursorProvider,
} from '@/components/animate-ui/components/animate/cursor';

import { motion, spring } from "motion/react";
import useWindowDimensions from "./GetWindowsSize";

function SprigBox({ className, ...props }: React.ComponentProps<"div">) {
  const rootObject = document.getElementById("root");
  const constraintsRef = useRef(rootObject);
  return (
    <motion.div
    drag
    // animate= {{
    //  translateX: 90,
    //  translateY: -100,
    // }}
    className='bg-linear-40 from-primary to-indigo-500 rounded-l-lg rounded-r-lg p-6 flex text-sm justify-center items-center gap-6'
    whileDrag={{
      scale: 1.2,
      scaleY: 1,
      boxShadow: "0px 20px 40px rgba(0,0,0,120)"
    }}
    dragConstraints={constraintsRef}
    whileTap={{
      scale: 1.2,
      scaleY: 0.6,
      transition: {
        type: spring,
        stiffness: 1000,
        damping: 5,
        bounce: 0.5,
      }
    }}
  >
    <img width={50} height={50} draggable="false" src="https://picsum.photos/50" alt="icon" />
  </motion.div>
  )
}

function App() {
  const [count, setCount] = useState(10);
  const classUnder = "font-bold animate-bounce transition duration-350 text-primary gap-3";

  const [starButton, setStarButton] = useState(false);

  // const rootObject = document.getElementById("root");
  console.log(useWindowDimensions());
  console.log(count);

  if (starButton)
  {
    setStarButton(false);
  }
  
  return (
    <div className='p-3.5 underline-offset-5' id="rootDiv">

    <CursorProvider>
      <Cursor />
      <CursorFollow>User</CursorFollow>
    </CursorProvider>

    <div className='bg-secondary rounded-l-lg rounded-r-lg p-6 flex text-sm justify-center items-center gap-6 animate-in fade-in zoom-in-95 duration-700 h-20'>
      <Avatar>
        <AvatarImage src={NetflixIcon} alt="@Netflicks"/>
        <AvatarFallback>:O</AvatarFallback>
      </Avatar>
      <Separator orientation='vertical' className="bg-primary"/>

      <h1 className='font-bold text-4xl animate-pulse text-primary underline underline-offset-2'>EpicNet!</h1>
      
      <Separator orientation='vertical' className="bg-primary"/>
      <ButtonGroup>
        <Button>
          <HomeIcon />
          Menu principal
        </Button>
        <ButtonGroupSeparator />
        <Button>
          <SearchIcon />
          Buscar
        </Button>
        <ButtonGroupSeparator />
        <Button onClick={() => setStarButton(true)}>
          <StarIcon />
          Reseñas
        </Button>
      </ButtonGroup>

    </div>
    <div className='grid gap-7 p-7 items-center justify-items-center animate-in fade-in zoom-in-95 duration-750'>
      <h1 className='font-bold text-4xl'><a className='hover:animate-pulse text-primary underline underline-offset-2'>Netflicks</a> 2026</h1>
      <h2 className={`${classUnder} text-1.8xl`}>Mi vida entre códigos</h2>
      <p>
        "El <a className='underline decoration-primary'>exelente documental</a> sobre Rafael Tangyan ha salido!
        Descubre sobre como el futuro le dío la verdad a Rafael y le cambio por siempre y de verdad. 
        En esta historia veremos muchas cosas sobre su pasado y daremos un pequeño repaso sobre su vida actual."
      </p>
      <img width={300} height={300} src={PosterRafa} alt="Movie Poster"></img>
      <Button className='bg-auto'>
        <VideoIcon />
        Ver trailer
      </Button>
      <ButtonGroup>
        <Button onClick={() => setCount(count + 1)}>
          <PlusIcon />
          Incrementar
        </Button>
        <ButtonGroupSeparator />
        <Button onClick={() => setCount(count - 1)}>
          <MinusIcon />
          Decrementar
        </Button>
      </ButtonGroup>

      <p 
        className="bg-linear-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent"
      >Colorido!!</p>

      <SprigBox/>

    </div>
    </div>
  )
}

export default App