import {React, useState } from 'react'

import './App.css'
import SignUp from './SignUp/SignUp'
import Email from './Email/Email'
import SignIn from './SignIn/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SignUp/>
    <Email/>
    <SignIn/>
    </>
  )
}

export default App
