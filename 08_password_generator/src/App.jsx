import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  //setting up for length variable UI
  const [length, setLength] = useState(8)

  //setting up for numners variable UI
  const [number, setNumber] = useState(false)

  //setting up for characters variable UI
  const [character, setCharacter] = useState(false)

  //setting up for password present inside the input field
  const [password, setPassword] = useState('')

  //random password generator function
  //using useCallback for triggering/calling the function at mnultiple position
  const passGen = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (number) str += '0123456789'
    if (character) str += '!@#$%^&*-_+=[]{}~`'

    for (let i = 1; i <= length; i++) {
      //generating random index
      const element = Math.floor(Math.random() * str.length + 1)
      //adding the char to the password at index element that is generated random
      pass += str.charAt(element)
    }
    setPassword(pass)
  }, [length, character, number, setPassword]) //passing dependencies in array as wee are using useCallback

  useEffect(() => {
    passGen()
  }, [length, number, character, passGen])

  //copying concept---by using useRef
  const passwordRef = useRef(null) //--->it is used for better UI interface

  const copyPassword = useCallback(() => {
    //selecting copied text and changing its bg color
    passwordRef.current?.select()
    //defining the range to be selected for copy the generatored password
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
    //alert('copied')
  }, [password])
  return (
    <>
      {/* setting background of main screen black */}
      <div className=" bg-black w-[100vw] h-[100vh] flex text-center  justify-center">
        <div className=" flex  flex-col m-10 w-[480px] h-fit rounded-lg shadow-lg bg-slate-600 ">
          <h1 className=" text-white p-5">PASSWORD GENERATOR</h1>
          <div className=" m-3">
            <input
              type="text"
              className="p-1 rounded-md w-[320px]"
              placeholder="Password"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPassword}
              className=" text-cyan-500 bg-yellow-300  rounded-md p-1"
            >
              Copy
            </button>
          </div>

          <div className=" flex flex-row  justify-center text-center text-white">
            <input
              type="range"
              id="length"
              min={8}
              max={50}
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label htmlFor="length">Length: {length}</label>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={number}
                id="numberInput"
                onChange={() => {
                  //interview counter question same approach
                  setNumber((prev) => !prev)
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={character}
                id="characterInput"
                onChange={() => {
                  //interview counter question same approach
                  setCharacter((prev) => !prev)
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
