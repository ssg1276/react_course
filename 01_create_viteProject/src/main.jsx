import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//declaring App function here only
function MyApp() {
  return (
    <>
      <h1>myApp formation</h1>
    </>
  )
}
//bundler is responsible for behind the seen syntax arrangement in react

//writing another element
const reactElement1 = {
  type: 'a', //div,paragraph etc
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'click me to visit google',
} //why is it working because it is a custom element and to render that custom render function was written and here the render is different

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
)
const anotherUser = 'chai aur react'

//using createElement in react
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherUser //evaluting the variable --->object doesn't contain if-else statement thatswhy only final result is there
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //we know app is a function
  // <>
  //   <App />
  //   <MyApp />
  //   {/* other why of calling and executing function MyApp()---> not correct */}
  //   {/* <reactElement/> ---->throw an error as it is an object and object cant be called like this */}

  //
  // </>
  anotherElement //this will get executed now as the type in render is same as expecting but in custom we have our own type -->thatswhy reactElement didn't worked
  reactElement //this will also work now
)
