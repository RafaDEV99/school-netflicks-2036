import { useState } from 'react'
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
  type CursorFollowProps,
} from '@/components/animate-ui/components/animate/cursor';

function App() {
  const [count, setCount] = useState(10)
  const classUnder = "font-bold animate-bounce transition duration-350 text-primary gap-3"
  console.log(count)

  return (
    <div className='p-3.5'>

    <div className='bg-secondary rounded-l-lg rounded-r-lg p-6 flex text-sm justify-center items-center gap-6 animate-in fade-in zoom-in-95 duration-700 h-20'>
      <Avatar>
        <AvatarImage src={NetflixIcon} alt="@RafaDEV99"/>
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
        <Button>
          <StarIcon />
          Reseñas
        </Button>
      </ButtonGroup>

    </div>
    <div className='grid gap-7 p-7 items-center justify-items-center animate-in fade-in zoom-in-95 duration-750'>
      <h1 className='font-bold text-4xl'><a className='hover:animate-pulse text-primary underline underline-offset-2'>Netflicks</a> 2026</h1>
      <h2 className={`${classUnder} text-1.8xl`}>Mi vida entre códigos</h2>
      <p>
        "El exelente documental sobre Rafael Tangyan ha salido!
        Descubre sobre como el futuro le dío la verdad a Rafael y le cambio por siempre y de verdad"
      </p>
      <img width={300} height={300} src={PosterRafa}></img>
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

      <CursorProvider>
        <Cursor />
        <CursorFollow>Netflicks is cool!</CursorFollow>
      </CursorProvider>

      <p 
        className="bg-linear-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent"
      >Colorido!!</p>
    </div>
    </div>
  )
}

export default App