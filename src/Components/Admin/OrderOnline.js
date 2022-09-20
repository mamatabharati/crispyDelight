import React from 'react';
import {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import './orderOnline.css'


export default function OrderOnline() {

    const [productState,setProductState]=useState([]);

    const getProduct=()=>{
        axios.get('http://localhost:1000/product')
        .then((res)=>{
            console.log("Product list:",res);
            setProductState(res.data);
        })
        .catch(err=>{
            console.log("Error",err);
        })
    
    }
  
    useEffect(()=>{
        getProduct()
    },[])



  return (

    <>

 
  <div className="text-center container allFoodDiv">
    <h4 className="mt-4 mb-4">
    </h4>
    <div className="row mt-4 mb-4">
   {
    productState.map(item=>{
return(
      <div className="col col-md-3 py-3" key={item.id}>
        <div className="card py-3 ms-auto " >
          <div
            className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light"
          >
            <img
              src={item.pimage}
              className="foodimg"
              alt='foodImage'
            />
          </div>
          <div className="card-body">
              <h5 className="card-title mb-2">{item.pname}</h5>
            <h6 className="mb-3"> ₹ {item.pprice}</h6>
             <Link to={`/productDetail/${item.id}`}>
             <button className='orderBtn'>Add </button>
             </Link>      
          </div>
        </div>
      </div>
     )
 })
   }
  </div>
</div>

 </>
)
}