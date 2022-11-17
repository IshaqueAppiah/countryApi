import React,{useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


export const CountryInfo = () => {
  const url='https://restcountries.com/v2'
 
  const {countryName} =useParams()
  const[country,setCountry]=useState([]);

  const getCountryByName =async()=>{
    try{
      const res =await fetch(`${url}/name/${countryName}`);
      if(!res.ok) throw new Error(`Can't access data ${res.status}`)

      const data = await res.json()
      setCountry(data)
    }
    catch(err){
      console.log(err + 'network error')
    }
  }

 console.log(country)


  useEffect(()=>{
    getCountryByName()
  },[countryName])
  return (
    <div className="country-info">
      <button><Link to='/'>Back</Link></button>
      <h1>hello</h1>
      {
         country.map((item, index)=>{
          return <div key={item.name}>
            <img src={item.flags.png} alt="" />
          </div>
         })
      }
    
    </div>
  )
}
