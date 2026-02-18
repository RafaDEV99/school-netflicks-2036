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

  return (
    <>
    <div className='bg-secondary p-6 flex justify-between items-center'>
      <h1 className='text-2xl'>Epic!</h1>
      <Avatar>
        <AvatarImage src='src/assets/react.svg' alt="@RafaDEV99"/>
        <AvatarFallback>&gt;:3</AvatarFallback>
      </Avatar>
    </div>
    <div className='grid gap-7 p-7 items-center justify-items-center'>
        <h1 className='font-bold text-4xl'><a className='hover:animate-pulse text-primary underline underline-offset-2'>Netflicks</a> 2026</h1>
        <h2 className={`${classUnder} text-1xl`}>Mi vida entre códigos</h2>
        <p>
          "Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <img src="src/assets/Poster_Rafa.png" className='h-75'></img>
        <Button className='bg-auto'>Ver trailer</Button>
        <ButtonGroup className='gap-3'>
          <Button onClick={() => setCount(count + 1)}>Incrementar</Button>
          <Button onClick={() => setCount(count - 1)}>Decrementar</Button>
        </ButtonGroup>
    </div>
    </>
  )
}

export default App