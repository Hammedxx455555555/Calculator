/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header/Header'
import Contact from './Contact/Contact'
import Companies from './Companies/Companies'
import Hero from './Hero/Hero'
import Residencies from './Residencies/Residencies'
import Value from './Value/Value'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
<Router>
      <Header/>
         <Routes>
              <Route path='/' Component={Hero}/>
              <Route path='/companies' Component={Companies}/>
              <Route path='/residencies' Component={Residencies}/>
              <Route path='/value' Component={Value}/>
              <Route path='/contact' Component={Contact}/>
         </Routes>
</Router>

    </>
  )
}

export default App
