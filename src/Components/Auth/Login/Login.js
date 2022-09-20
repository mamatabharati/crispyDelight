import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Login.css'



export default function Login() {
    let navigate=useNavigate()

    let formik=useFormik({
        initialValues:{
           email:'',password:''
        },
        onSubmit:(values)=>{
            console.log("Entered data: ",values);
            axios.post('https://nodeprojectapi.herokuapp.com/login',values)
            .then(res=>{
                console.log("Login successfull");
                localStorage.setItem("TokenValue",JSON.stringify(res.data));
                navigate('/orderOnline');
            })
            .catch(err=>{
                console.log("Login Error: ",err);
            })
        }

    })


    useEffect(()=>{
        const isAuth=window.localStorage.getItem("TokenValue");
        if(isAuth)
        navigate('/weServe')
      })
      

  return (
    <>
         <center>
    <h2 className='login'>Login </h2>
        <div className='container'>
        <form onSubmit={formik.handleSubmit}>

        <input type="text" 
        name="email" 
        placeholder="Enter email" 
        onChange={formik.handleChange} 
        value={formik.values.email} 
        className='regInput'/><br/><br/>

        <input type="password" 
        name="password" 
        placeholder="Enter password" 
        onChange={formik.handleChange} 
        value={formik.values.password} 
        className='regInput'/><br/><br/>

        <input type="submit" value="Submit" className='regBtn'/>

        </form>
        </div>
        </center>
    </>
  )
}
