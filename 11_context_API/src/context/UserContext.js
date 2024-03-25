import React from 'react'


//creating a context and storing it in a variable
const UserContext = React.createContext()
//creating context will return provider --->here UserContext is aprovider


//all the components wrapped inside the USerCOntext will have the access of it.
{/* <UserContext>
<Login/>
<Card/>
<Dashboard>
      <About/>
<Dashboard/>
</UserContext> */}


//Creating a provider-->mth-01
//in different file





export default UserContext;