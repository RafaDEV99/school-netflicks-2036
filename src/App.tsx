import { useState } from 'react'
import { Button } from './components/ui/button'
import "./index.css"
import { ButtonGroup } from './components/ui/button-group'
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"

function App() {
  const [count, setCount] = useState(10)
  console.log(count)
  const classUnder = "font-bold animate-bounce transition duration-350 text-primary gap-3"

  // NOTE: add more funtionality, like, pressing a button triggers something
  // Ok!!

  return (
    <>
    <div className='bg-secondary p-6 flex justify-between items-center'>
    <h1 className='font-bold text-4xl animate-pulse text-primary underline underline-offset-2'>Epic!</h1>
      <Avatar>
        <AvatarImage src='src/assets/react.svg' alt="@RafaDEV99"/>
        <AvatarFallback>:O</AvatarFallback>
      </Avatar>
    </div>
    <div className='grid gap-7 p-7 items-center justify-items-center'>
      <h1 className='font-bold text-4xl'><a className='hover:animate-pulse text-primary underline underline-offset-2'>Netflicks</a> 2026</h1>

      <h2 className={`${classUnder} text-1xl`}>Mi vida entre códigos</h2>
      <p>
        "El exelente documental sobre Rafael Tangyan ha salido!
        Descubre sobre como el futuro le dío la verdad a Rafael"
      </p>
      <img src="src/assets/Poster_Rafa.png" className='h-75'></img>
      <Button className='bg-auto'>Ver trailer</Button>
      <ButtonGroup className='gap-3'>
        <Button onClick={() => setCount(count + 1)}>Incrementar</Button>
        <Button onClick={() => setCount(count - 1)}>Decrementar</Button>
      </ButtonGroup>
      <p className="test">Colorido!!</p>
    </div>
    </>
  )
}

export default App