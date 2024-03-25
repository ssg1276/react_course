import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  //accessing  user as a data from UserContext
  const { user } = useContext(UserContext)

  return !user ? <div>please login</div> : <div>Welcome {user.username}</div>
}

export default Profile
