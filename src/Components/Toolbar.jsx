import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Toolbar() {
  const navigate=useNavigate()
  return (
    <>
     <div className='toolbar'>
<p style={{marginLeft:"25%"}} onClick={()=>{navigate("/")}}>Home</p>
<p style={{marginLeft:"5%"}}>Categores</p>
<p style={{marginLeft:"5%"}}>About</p>
<p style={{marginLeft:"5%"}}>Pages</p>
<p style={{marginLeft:"5%"}}>Blog</p>
<p >Contect</p>

    </div>
    </>
  )
}
