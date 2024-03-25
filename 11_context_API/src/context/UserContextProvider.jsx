import UserContext from './UserContext'
import { useState } from 'react'

//creating a method for provider
const UserContextProvider = ({ children }) => {
  //used to give data
  const [user, setUser] = useState(null)
  return (
    //Alone (UserContext.Provider) is not going to work therefor we have to pass some data and for that we will use (useState)
    //in value we are passing the object values for which we are going to provide the UserContext
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
