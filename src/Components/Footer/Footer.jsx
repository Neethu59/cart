import React from 'react'
import'./Footer.css';
import {Facebook,Instagram,LinkedIn,YouTube,Favorite} from '@mui/icons-material';

export default function Footer() {
  return (
    <>
   <div className='back' >
<div class="row" style={{marginLeft:"5%",marginTop:"2%"}}>
<div class="col-sm-3">
<img src="assets/books.webp"id="book1"/>
<h6 id="abc">Get the breathing space now, 
and we'll extend your term at the other end year for go. </h6>
<div id="media">
<Facebook id="fa"/>
<Instagram  id="in"style={{marginLeft:"5%"}}/>
<LinkedIn  id="li"style={{marginLeft:"5%"}}/>
<YouTube  id="yo"style={{marginLeft:"5%"}}/>
</div>
</div>
<div class="col-sm-3">
 <h5>Book Catogory</h5>
 <ul id="ul1">
    <li>History</li>
    <li>Horror-Triller</li>
    <li>Love Stories</li>
    <li>Science- Fiction</li>
    <li>Bussiness</li>
 </ul>
</div>

<div class="col-sm-3">
<ul id="ul1">
    
    <li style={{marginTop:"15%"}}>History</li>
    <li>Horror-Triller</li>
    <li>Love Stories</li>
    <li>Science- Fiction</li>
    <li>Bussiness</li>
 </ul>
</div>
<div class="col-sm-3">
<h5>Site Map</h5>
<ul id="ul1">
    <li>Home</li>
    <li>About Us</li>
    <li>FAQs</li>
    <li>Blog</li>
    <li>Contact</li>
 </ul>
 </div>
</div>
<center>
<h6 style={{ marginTop:"5%"}}>  Copyright ©2022 All rights reserved | This template is made with<i style={{marginTop:"15%",width:"11px"}}> <Favorite /></i> by Colorlib</h6>
</center>
</div> 
    </>
  )
}
