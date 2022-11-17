import React,{useState,useEffect} from "react"
import { Await } from "react-router-dom"
import Card from "./Card"
import Search from "./Search"
import FilterCountry from "./FilterCountry"



const Countries = () => {
    const url='https://restcountries.com/v2'
    const[countries,setCountries]=useState([])

    const getCountries=async()=>{
        try{
            const res =await fetch(`${url}/all`)
            if(!res.ok) throw new Error('Failed to retreive data')
            const data= await res.json()
            setCountries(data)
            console.log(data)
        }
        catch(error){
            console.log(error+ 'error')
        }
    }

  
    async function getCountryByRegion(regionName){
            try{
                    const res =await fetch(`${url}/region/${regionName}`)
                    if(!res.ok)  throw new Error('Failed to get Region. ')

                    const data =await res.json()
                    setCountries(data)
                   
            }
            catch(err){
                console.log(err + 'region name error')
            }
    }

    useEffect(()=>{
        getCountries()
    },[])


    let allCountries=countries.map((data)=>{
        return <Card key={data.alpha3Code}  data={data}/>
    })

    
    async function getCountriesByName(countryName){
        try{
            let res=await fetch(`${url}/name/${countryName}`)
            if(res.ok){
                let data =await res.json()
                setCountries(data)
            }
           else if(countryName===''){
                let res= await fetch(`${url}/all`)
                let data =await res.json()
                setCountries(data)
            }
            else throw new Error(alert(res.status + ' data not found'))
          

            }
            catch(err){
                console.log(err + ' data not found')
            }
    }
    

  return (
   <div className="all-country">
    <div className="country-top">
      <div className="search">
        <Search onSearch={getCountriesByName}/>
      </div>

      <div className="filter">
        <FilterCountry onSelect={getCountryByRegion}/>
      </div>
    </div>
    <div className="country-bottom">
        {allCountries}
    </div>
   </div>
  )
}

export default Countries
