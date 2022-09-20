import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Reg.css';

export default function Reg() {

    let navigate = useNavigate();

    let formik = useFormik({
        initialValues: {
            fname:'',
            lname: '',
            email: '',
            password:'',
        },
        onSubmit: (values) => {
            console.log("Sign Up entered data:", values);
            axios.post('https://nodeprojectapi.herokuapp.com/register', values)
                .then(result => {
                    console.log("SignUp Successfull");
                    navigate('/login')
                })
                .catch(err => {
                    console.log("Sign Up error", err.response);
                })
        }
    })


    return (
        <>
             <center>
    <h2 className='login'>Get Started</h2>
    {/* <iframe src="https://giphy.com/embed/jKaFXbKyZFja0" title='gif' width="580" height="150" frameBorder="0" class="giphy-embed" allowFullScreen className='gif'></iframe> */}

        <div className='container'>
        <form onSubmit={formik.handleSubmit}>

        <input type="text" 
        name="fname"
        placeholder="Enter First Name" 
        onChange={formik.handleChange} 
        value={formik.values.fname} 
        className='regInput'/><br/><br/>

        <input type="text" 
        name="lname"
        placeholder="Enter Last Name" 
        onChange={formik.handleChange} 
        value={formik.values.lname} 
        className='regInput'/><br/><br/>


        <input type="email" 
        name="email" 
        placeholder="Enter Email" 
        onChange={formik.handleChange} 
        value={formik.values.email} 
        className='regInput'/><br/><br/>

       <input type="password" 
        name="password"
        placeholder="Enter Password" 
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
