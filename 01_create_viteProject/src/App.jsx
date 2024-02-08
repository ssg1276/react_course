import Chai from './Chai'

function App() {
  const username = 'chai aur code'
  return (
    <>
      {/* use {}--->to inject variable inside the react component */}
      {/* INTERVIEW QUESTION---->  {username}---> it is evaluated expression which means final result */}
      <h1>vite project {username}</h1>
      <Chai />
    </>
  )
}

export default App
