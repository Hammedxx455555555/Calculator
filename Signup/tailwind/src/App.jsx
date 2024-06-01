// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Signup from './Signup'
import Login from './Login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>

<Router>
     <Routes>
            <Route exact path='/' Component={Signup}/>
            <Route path='/login' Component={Login}/>
     </Routes>
</Router>

    </>
  )
}

export default App
