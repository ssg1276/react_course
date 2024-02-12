//props make component usable

import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    userName: 'sahil',
    rollNo: 21,
  }

  //passing array inside the [props]
  let myArr = [1, 2, 3]
  return (
    <>
      <h1 className="bg-green-400 text-black mb-4">hello Tailwind test</h1>

      {/* making Card as acomponent and using it again */}
      {/* Passing some values to be inserted inside the props */}
      {/* can't pass array and object directly we have to use extra variable to make them pass */}
      <Card
        channel="Chai aur Code"
        someObje={myObj}
        newArr={myArr}
        btnText="Click me"
      />
      <Card />
    </>
  )
}

export default App
