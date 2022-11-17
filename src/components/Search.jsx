import React,{useState,useEffect} from "react"


const Search = (props) => {
const[input,setInput]=useState('')


function handleSubmit(e){
  e.preventDefault()
 props.onSearch(input)

}


  return (
  <form onSubmit={handleSubmit}>
    <input type='text' placeholder="search for a country" value={input} onChange={(e)=>{
    setInput(e.target.value)
    }}/>
  </form>
  )
}

export default Search