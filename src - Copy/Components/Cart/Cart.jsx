import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Toolbar from '../Toolbar';
import './Cart.css';
// import {DeleteIcon} from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
// import { DetailsTwoTone } from '@mui/icons-material';
export default function Cart() {
  const key="cartdata"
  const [state,setState]=useState(JSON.parse(localStorage.getItem(key))||[])
  
  const[total,setTotal]=useState(0)
  console.log(state)
  useEffect(()=>{
localStorage.getItem(state)
  },[state])

  const deletedata=(id)=>{
    const delele=state.filter(Details=>{
      return Details.id!==id
    } )
    window.location.reload();
    setState(delele)

    console.log(id)
alert("Deleted!")
  }
useEffect(()=>{
  localStorage.setItem(key,JSON.stringify(state))
  setTotal(state.reduce((total,currentItem) =>  total = total + currentItem.cost , 0 ));
  console.log(total)
},[state])
const navigate=useNavigate()
  return (
    <>
    <Navbar/>
    <Toolbar/>
   
    <div className="container py-5 h-100">
  <div className="row d-flex justify-content-center align-items-center h-100">

    <div className="col-12">
      <div
        className="card card-registration card-registration-2"
        style={{ borderRadius: 15 }}>
        <div className="card-body p-0">
          <div className="row g-0">
            <div className="col-lg-8">
              <div className="p-5">
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                  <h6 className="mb-0 text-muted">{state.length} items</h6>
                </div>
                <hr className="my-4" />

{state&&state.map((data)=>(
  <div className="row mb-4 d-flex justify-content-between align-items-center">
  <div className="col-md-2 col-lg-2 col-xl-2">
    <img
      src={data.pic}
      className="img-fluid rounded-3"
      alt="Cotton T-shirt"
    />
  </div>

  <div className="col-md-3 col-lg-3 col-xl-3">
    <h6 className="text-muted">{data?.name}</h6>
    <h6 className="text-black mb-0">{data?.type}</h6>
  </div>
  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
    <button
      className="btn btn-link px-2"
      onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
    >
      <i className="fas fa-minus" />
    </button>
    <input
      id="form1"
      min={0}
      name="quantity"
      defaultValue={1}
      type="number"
      className="form-control form-control-sm"
    />
    <button
      className="btn btn-link px-2"
      onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
    >
      <i className="fas fa-plus" />
    </button>
  </div>

  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
    <h6 className="mb-0">??? {data?.cost}</h6>
  </div>


  <div className="col-md-3 col-lg-1 col-xl-1 offset-lg-1">
    <DeleteIcon style={{color:"red"}} onClick={()=>{deletedata(data?.id)}}/>
      
  </div>

  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
    <a href="#!" className="text-muted">
      <i className="fas fa-times" />
    </a>
  </div>
  
</div>



))
  
}

                

                <div className="pt-5">
                  <h6 className="mb-0">
                    
                      <button className="fas fa-long-arrow-alt-left me-2" style={{marginLeft:"2%",color:"blue"}}
                       onClick={()=>{navigate("/all")}}> Back to shop</button>
                     
                    
                  </h6>
                </div>
              </div>
            </div>




            <div className="col-lg-4 bg-grey">
              <div className="p-5">
                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                <hr className="my-4" />
                <div className="d-flex justify-content-between mb-4">
                  <h5 className="text-uppercase">items  {state.length}</h5>
                  <h5> ???{total}</h5>
                </div>
                <h5 className="text-uppercase mb-3">Shipping</h5>
                <div className="mb-4 pb-2">
                  <select className="select">
                    <option value={1}>Standard-Delivery- ???5.00</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                    <option value={4}>Four</option>
                  </select>
                </div>
                <h5 className="text-uppercase mb-3">Give code</h5>
                <div className="mb-5">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Examplea2"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Examplea2">
                      Enter your code
                    </label>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="d-flex justify-content-between mb-5">
                  <h5 className="text-uppercase">Total price</h5>
                  <h5>??? {total}</h5>
                </div>
                <button
                  type="button"
                  className="btn btn-dark btn-block btn-lg"
                  data-mdb-ripple-color="dark">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}
