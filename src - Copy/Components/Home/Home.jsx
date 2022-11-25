import React, { useState } from 'react'
import'./Home.css';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


// import All from '../All/All';

import {book} from '../../Dummy-data'


import {useNavigate} from "react-router-dom"
import Toolbar from '../Toolbar';
export default function Home() {
  const [books,setbook]=useState(book)
console.log("book",books);

const type = (type) =>{
 const filterdBooks= book.filter((detail)=>{
   return detail.type.includes(type)
  })
  setbook(filterdBooks)
  console.log("fbook",filterdBooks);
}
const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <div className='back' >
    {/* <div className='toolbar'>
<p style={{marginLeft:"25%"}}>Home</p>
<p style={{marginLeft:"5%"}}>Categores</p>
<p style={{marginLeft:"5%"}}>About</p>
<p style={{marginLeft:"5%"}}>Pages</p>
<p style={{marginLeft:"5%"}}>Blog</p>
<p >Contect</p>

    </div> */}
   

   <Toolbar/>
    <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src='/assets/carosil1.webp' alt="Los Angeles"style={{width:"80%",marginLeft:"10%"}}/>
      <div class="carousel-caption">
      <button type="button" class="btn btn-light" id="btn">Science Fiction</button>
       <div id="history">
        <h1 >The History</h1> 
         <h1> of Phipiano</h1> 
         </div>
          <button id="brows">Brows store</button>
          
      </div>   
    </div>
    <div class="carousel-item">
      <img src='/assets/carosil2.webp' alt="Chicago"style={{width:"80%",marginLeft:"10%"}}/>
      <div class="carousel-caption">
      <button type="button" class="btn btn-light"id="btn">Science Fiction</button>
      <div id="history">
        <h1 >The History</h1> 
         <h1> of Phipiano</h1> 
         </div> 
        <button id="brows">Brows store</button>
         
          
      </div>   
    </div>

    <div class="carousel-item">
      <img src='/assets/carosil3.webp' alt="Chicago"style={{width:"80%",marginLeft:"10%"}}/>
      <div class="carousel-caption">
      <button type="button" class="btn btn-light"id="btn">Science Ficton</button>
      <div id="history">
        <h1 >The History</h1> 
         <h1> of Phipiano</h1> 
         </div>
        <button id="brows">Brows store</button>
         
          
      </div>   
    </div>


  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"id="sp"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"id="sp"></span>
  </a>
</div>

<center>
<h2 style={{marginTop:"5%"}}>Best Selling Book Ever</h2>
</center>










</div>

 <div class="row">
  <div class="col-sm-8">
    <div id="view">
  <h2 style={{marginLeft:"20%"}}>Featued This Week </h2>
  <button style={{marginLeft:"30%",border:"none"}}onClick={()=>{navigate("/all")}} >View All</button>
  </div>
  <div id="demo1" class="carousel slide" data-ride="carousel"style={{backgroundColor:"red",width:"90%",marginLeft:"10%",height:"83%",marginTop:"5%"}}>
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src='/assets/evanwinter.jpeg' alt="Los Angeles"style={{width:"30%",marginLeft:"10%",marginTop:"5%"}}/>
      <div class="carousel-caption">
      
       <div id="history">
        <h2  id="range"> The Range of Dragon</h2> 
         <p id="evan"> By Evan Winter</p>
         <h1>$50.00</h1>
         <button id="btttn" style={{color:"white",backgroundColor:"red",borderRadius:"25px",padding:"2%"}}>View Details</button> 
         </div>
          
          
      </div>   
    </div>
    <div class="carousel-item">
      <img src='/assets/evanwinter.jpeg' alt="Chicago"style={{width:"30%",marginLeft:"10%",marginTop:"5%"}}/>
      <div class="carousel-caption">
      
      <h2 id="range"> The Range of Dragon</h2> 
         <p id="evan"> By Evan Winter</p>
         <h1>$50.00</h1>
         <button id="btttn" style={{color:"white",backgroundColor:"red",borderRadius:"25px",padding:"2%"}} >View Details</button> 
         </div>
    </div>


  </div>
  <a class="carousel-control-prev" href="#demo1" data-slide="prev">
    <span class="carousel-control-prev-icon"id="sp"></span>
  </a>
  <a class="carousel-control-next" href="#demo1" data-slide="next">
    <span class="carousel-control-next-icon"id="sp"></span>
  </a>
</div>



  </div>
  
    
  
  <div class="col-sm-4">
<img src="assets/drama.jpeg"alt=""/>
  </div>
 </div>
 {/* <div style={{marginLeft:"10%",width:"30%"}}>
  <img src="assets/Redplanet.jpeg" style={{height:"10%"}}/>
  <img src="assets/good.jpeg"/>
 </div> */}


 {/* <div className='items'>
  <h2 style={{marginLeft:"10%"}}>Latest Published items</h2>
  <button id="alll" onClick={()=>{navigate("/all")}}  class="all0">All</button>
  <button id="all" onClick={()=>{type("horror")}} class="all1">Horror</button>
  <button id="all" onClick={()=>{type("triller")}} class="all2">Triller</button>
  <button id="all" onClick={()=>{type("science fiction")}} class="all3">Science Fiction</button>
  <button id="all" onClick={()=>{type("history")}} class="all4">History</button>

 </div> */}
 {/* <All bookData={books}/> */}
{/* {book.all===true ? <All/> :
<>
{book.horror===true ? <All/> : ""}
</>
} */}
 
<div>
  <h1 style={{marginLeft:"7%"}}>Latest published Books</h1>
<button style={{marginLeft:"30%",border:"none",marginTop:"2%"}}onClick={()=>{navigate("/all")}} >View All</button>
</div>
<Footer/>
    </>
  )
}
