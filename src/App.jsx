import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Countries from './components/Countries'
import { CountryInfo } from './components/CountryInfo'

function App() {
 return (
<>
<header className="header">
  <div className="container">
    <h5>Where in the world</h5>
   </div> 
</header>
<div className="container">
  <Routes>
    <Route path='/' exact element={<Countries/>}/>
    <Route path='/:countryName'  element={<CountryInfo/>}/>
  </Routes>
</div>
</>

 )
  

}

export default App
