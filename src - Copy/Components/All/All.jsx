import React, { useState } from 'react'
// import { Navigate } from 'react-router-dom';
import {book} from '../../Dummy-data'
import {useNavigate} from "react-router-dom"
import'./All.css';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Toolbar from '../Toolbar';
export default function All() {
  const navigate=useNavigate()
const key="cartdata"
  const [value,setvalue]=useState(book)
  const[cart,setCart]=useState(JSON.parse(localStorage.getItem(key))||[])
  console.log("book",value);
  const type = (type) =>{
    const filterdBooks= book.filter((detail)=>{
      return detail.type.includes(type)
     })
     setvalue(filterdBooks)
     console.log("fbook",filterdBooks);

   }
   const[name,setname]=useState("Latest Published Books")
   console.log(name);
   const dd = (e)=>{
   
    
    setname(e);
   }
console.log(value)
const cartdetails=(name)=>{
  const filterdata=value.filter(details=>{
    return details.name===name })
    console.log(filterdata)
    console.log(name)

    setCart([...cart,
      ...filterdata])
    console.log("cart",cart);
    // navigate('/cart')
    alert("Add to Cart   "+name)
   
  }
useEffect(()=>{
localStorage.setItem(key,JSON.stringify(cart))
},[cart])

  
  

  return (
    <>
<Navbar/>
<Toolbar/>
<div className='items'>
  <h2 style={{marginLeft:"10%"}}>{name}</h2>
  <button id="alll" onClick={()=>{setvalue(book); dd("All Books")} } class="all0">All</button>
  <button id="all" onClick={()=>{type("horror"); dd("Horror Books")}} class="all1">Horror</button>
  <button id="all" onClick={()=>{type("triller"); dd("Triller Books")}} class="all2">Triller</button>
  <button id="all" onClick={()=>{type("science fiction"); dd("Science fiction Books")}} class="all3">Science Fiction</button>
  <button id="all" onClick={()=>{type("history"); dd("History Books")}} class="all4">History</button>

 </div>
    <div class="container">
  
  <div id="demo3" class="carousel slide" data-ride="carousel">
  
  <div class="carousel-inner no-padding my-5">
    <div class="carousel-item active">
  {value.map((data)=>(
    <div class="col-xs-4 col-sm-4 col-md-4">
 <img class="img-fluid card-img-top" src={data.pic} style={{width:"55%",height:"55%"}}alt=""/>
  <p>{data.name}</p>
  <p>{data.author}</p>
  <p>{data.cost}$</p>
   <button style={{backgroundColor:"green",color:"white",borderRadius:"25px"}} onClick={()=>{cartdetails(data.name)}}>Add to Cart</button>
 
 </div>

  ))}
   </div>
  </div>  
</div>
</div>
<Footer/>

  
  
    </>
  )
}
