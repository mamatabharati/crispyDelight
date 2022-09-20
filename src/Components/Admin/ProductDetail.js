import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
// import { NavItem } from 'react-bootstrap';
// import {Link} from 'react-router-dom';

export default function ProductDetail() {

let {pid}=useParams();
console.log(pid);

const [state,setState]=useState([])

useEffect(()=>{
  axios.get(`http://localhost:1000/product/${pid}`)
  .then((res)=>{
    console.log((res.data));
    setState(res.data)
  })
  .catch(err=>{
    console.log("Detail page error: ",err);
  })
},[setState,pid])



  return (
    <>

        {/* <div className="row text_Div">
         <p>{state.pname}</p>
         <p>{state.pprice}</p>

      </div> */}


      <div className="container">
  <div className="card">
    <div className="container-fliud">
    
      <div className="wrapper row">
    {
        <div className="preview col-md-6">
          <div className="preview-pic tab-content">
            <div className="tab-pane active" id="pic-1">
              <img src={state.pimage} alt="productImage" />
            </div>
          </div>
          <h3 className="product-title">{state.pname}</h3>
          <div className="rating">
            <div className="stars">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
            <span className="review-no">41 reviews</span>
          </div>
          <p className="product-description">
            {state.pdesc}
          </p>
          <h4 className="price">
            current price: <span>{state.pprice}</span>
          </h4>
          <p className="vote">
            <strong>91%</strong> of buyers enjoyed this product!{" "}
            <strong>(87 votes)</strong>
          </p>
         
          <div className="action">
            <button type="button">
              add to cart
            </button>
      
          </div>
        </div>
       
     
    }
    </div>
    </div>
  </div>    
</div>
  
    </>
  )
}
