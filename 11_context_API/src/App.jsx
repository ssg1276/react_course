import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>React with Chai</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
