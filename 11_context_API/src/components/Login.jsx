import UserContext from '../context/UserContext'
import { useState, useContext } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  //way to use UserContext
  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    //for preventing the value not to go here and there after the button gets clicked
    e.preventDefault()
    setUser({ username, password })
  }
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />{' '}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
