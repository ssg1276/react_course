import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')
  return (
    <>
      <div
        className="bgupdate w-[100vw] h-[100vh] justify-center flex tex"
        style={{ backgroundColor: color }}
      >
        <div
          className="footer fixed
        w-[1000px] h-[50px] bg-white flex flex-row justify-evenly bottom-4"
        >
          <button
            className=" outline-none p-1 w-[60px] m-2"
            style={{ backgroundColor: 'red' }}
            //if u want to pass the parameter then u have to use this type of syntax
            //onClick={setColor}--->its a reference now and setColor except the function onClick needs a function only function
            onClick={() => {
              setColor('red')
            }}
          >
            red
          </button>
          <button
            className=" outline-none p-1 w-[60px] m-2"
            style={{ backgroundColor: 'brown' }}
            onClick={() => {
              setColor('brown')
            }}
          >
            brown
          </button>
          <button
            className=" outline-none p-1 w-[60px] m-2"
            style={{ backgroundColor: 'blue' }}
            onClick={() => {
              setColor('blue')
            }}
          >
            blue
          </button>
          <button
            className=" outline-none p-1 w-[60px] m-2"
            style={{ backgroundColor: 'pink' }}
            onClick={() => {
              setColor('pink')
            }}
          >
            pink
          </button>
          <button
            className=" outline-none p-1 w-[60px] m-2"
            style={{ backgroundColor: 'yellow' }}
            onClick={() => {
              setColor('yellow')
            }}
          >
            yellow
          </button>
          <button
            className=" outline-none p-1 w-[60px] m-2"
            style={{ backgroundColor: 'green' }}
            onClick={() => {
              setColor('green')
            }}
          >
            green
          </button>
        </div>
      </div>
    </>
  )
}

export default App
