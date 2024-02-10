import { useState } from 'react'

function App() {
  //for UI updation purpose
  let [c, setCount] = useState(0) //any value can be inserted inside (_)
  //what useState returns is --->value at 0th index is count and the other is function setCount name can be anything

  function changeIncrease() {
    //normal function can also be used
    //assignment
    if (c == 20) {
      c = 20
    } else {
      c = c + 1
    }
    console.log(c)
    setCount(c)
  }
  const changeDecrease = () => {
    //arrow function can also be used
    if (c == 0) {
      c = 0
    } else {
      c = c - 1
    }

    setCount(c) //updating UI
  }

  return (
    <>
      <h1>COUNTER APP</h1>
      <p className="result">{c}</p>
      <button onClick={changeIncrease} id="plus">
        +
      </button>
      <button onClick={changeDecrease} id="minus">
        -
      </button>
    </>
  )
}

export default App
