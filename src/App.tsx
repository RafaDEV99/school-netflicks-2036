import { useState } from 'react'
import { Button } from './components/ui/button'
import "./index.css"
import { ButtonGroup } from './components/ui/button-group'

function App() {
  const [count, setCount] = useState(10)
  console.log(count)
  const classUnder = "font-bold animate-bounce transition duration-350 text-primary gap-3"

  return (
    <div className='grid gap-7 p-7 items-center justify-items-center'>
        <h1 className='font-bold text-4xl'><a className='hover:animate-pulse text-primary underline underline-offset-2'>Netflicks</a> 2026</h1>
        <h2 className={`${classUnder} text-1xl`}>Mi vida entre códigos</h2>
        <p className="mask-type-alpha">
          "Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <Button className='bg-auto'>Ver trailer</Button>
        <ButtonGroup className='gap-3'>
          <Button onClick={() => setCount(count + 10)}>Incrementar</Button>
          <Button onClick={() => setCount(count - 10)}>Decrementar</Button>
        </ButtonGroup>
    </div>
  )
}

export default App