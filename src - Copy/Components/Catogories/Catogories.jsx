import React,{useState} from 'react'
import'./Catogories.css';
import Navbar from '../Navbar/Navbar';
import Toolbar from '../Toolbar';
import { book }  from '../../Dummy-data'
import Footer from '../Footer/Footer';

export default function Catogories() {

  const [books,setbook]=useState(book)
  console.log("book",books);
  
  const type = (type) =>{
   const filterdBooks= book.filter((detail)=>{
     return detail.type.includes(type)
    })
    setbook(filterdBooks)
    console.log("fbook",filterdBooks);
  }

  return (
    <>
    <Navbar/>
    <div className='back'>
      <Toolbar/>
    </div>
    <div id="background">
      <img src="assets/catogory.jpeg" id="catogory"alt=""/>  
    </div>

<div class="row">
  <div class="col-sm-3">
  <div class="card" style={{marginLeft:"5%",marginTop:"5%"}}>
    <div class="card-body">
      <h6 style={{marginTop:"3%"}}>Filter by Genres</h6>

  <div>
  <input type="radio"name="a"  value="All books"/>
<label>All Books</label></div>
<div>
  <input type="radio"name="a"   value="Horror"/>
<label>Horror</label></div>
<div>
  <input type="radio" name="a"  value="Triller"></input>
<label>Triller</label></div>
<div>
  <input type="radio"name="a"   value="Science Fiction"></input>
<label>Science Fiction</label></div>
<div>
  <input type="radio"name="a"   value="History"></input>
<label>History</label></div>

  <div><h6  style={{marginTop:"3%"}}>Filter by Price </h6><input type="range"name="bookcount"id="bookval" min="0"max="500"value="1"oninput="markoutputid.value=bookval.value"/>
    <output name="markoutputname"id="markoutputid"></output>
     </div>

    <h6 style={{marginTop:"3%"}}>Filter by Author name</h6>

  {book.map((data)=>(
    <div>
      <input type="radio"name="a"   value=""></input>
    <label>{data.author}</label></div>
  ))}
  
 



    </div>
  </div>
  </div>
  <div class="col-sm-8">
  <div class="container">
  
  <div id="demo3" class="carousel slide" data-ride="carousel">
  
  <div class="carousel-inner no-padding my-5">
    <div class="carousel-item active">
     
 
  {book.map((data)=>(
    <div class="col-xs-4 col-sm-4 col-md-4">
 <img class="img-fluid card-img-top" src={data.pic} style={{width:"55%",height:"55%"}}alt=""/>
  
 
  <p>{data.name}</p>
  <p>{data.author}</p>
  <p>{data.cost}$</p>
 </div>

  ))}
 
  
  
     
      
    </div>
  </div>

  
  
</div>
</div>
  </div>
</div>
<Footer/>
    </>
  )
}
