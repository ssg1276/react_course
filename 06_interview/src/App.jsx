import { useState } from 'react'

function App() {
  let [c, setCount] = useState(0)

  const decHandler = () => {
    c = c - 1
    setCount(c)
    //interview question Does the value be incremented by 1 or more then that based on how many setCount is written
    //Answer--->it will increment by 1 as useState sends all the updation which or same in a batch
    setCount(c)
    setCount(c)
    setCount(c)
    setCount(c)
    setCount(c)
    //all gets inside a same batch and increment the count by 1

    setCount(() => {}) //setCount have a callback inside it
    //Now to uppdate the counter by all the setCount statement use prevCounter--->last updated state is getting fetched and incremented (prevCounter is just a name)
    setCount((prevCounter) => {
      prevCounter + 1
    })
    setCount((prevCounter) => {
      prevCounter + 1
    })
    setCount((prevCounter) => {
      prevCounter + 1
    })

    //count will now increment by 3 as setCount is written 3times
  }
  const incHandler = () => {
    c = c + 1
    setCount(c)
  }
  return (
    <>
      <h1>Counter App:-</h1>
      <p>{c}</p>
      <button className="increase" onClick={incHandler}>
        +
      </button>
      <button className="decrease" onClick={decHandler}>
        -
      </button>
    </>
  )
}

export default App
