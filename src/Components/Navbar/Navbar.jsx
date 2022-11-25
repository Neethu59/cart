import React from 'react'
import'./Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import {Search} from '@mui/icons-material/';
import {ShoppingCartSharp} from '@mui/icons-material';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import {Badge} from '@mui/material';

export default function Navbar() {
  const navigate=useNavigate()
  const key="cartdata"
  const[state,setState]=useState(JSON.parse(localStorage.getItem(key)))
  const[count,setCount]=useState(0)
 useEffect(()=>
 {

 },[state])
  
  useEffect(()=>{
    console.log(count)
     setCount(state.length)
  },[count])
  return (
    <>
    <div className=' navbook'>
<img src="assets/books.webp"id="book"></img>

<input type="text" placeholder="search book by author or publisher "  id="inputtext"></input><Search id="search"/>

  <p style={{marginLeft:"15%",marginTop:"2%"}}>FAQ</p>
  <p style={{marginLeft:"3%",marginTop:"2%"}}>Track Order</p>

  <Badge 
   badgeContent={count} 
   color="primary" id="badge" >
  <ShoppingCartSharp id="cart" onClick={()=>{navigate("/cart")}}/></Badge> 
  <input type="button" class="btn btn-danger" value="sign in" style={{marginLeft:"5%",height:"10%",marginTop:"1%",borderRadius:"50px"}}></input>
  
    </div>
    
    </>
  )
}
