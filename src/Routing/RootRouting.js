import React,{lazy,Suspense} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../Layout/Header/Header'
import Homepage from '../Components/Homepage/Homepage'
import Footer from '../Layout/Footer/Footer'
import AboutUs from '../Components/Homepage/AboutUs'
import WeServe from '../Components/Homepage/WeServe'
import Reg from '../Components/Auth/Reg/Reg'
import Login from '../Components/Auth/Login/Login'
import OrderOnline from '../Components/Admin/OrderOnline'
import BookTable from '../Components/Admin/bookTable';
import ProtectedRouting from './ProtectedRouting';
import LinkAccount from '../Components/Auth/LinkAccount';
import AddToCart from '../Components/Admin/addToCart/addToCart';
import PageNotFound from '../Components/PageNotFound';
import Cart from '../Components/Admin/addToCart/cart';
import ProductDetail from '../Components/Admin/ProductDetail';

const Gallery=lazy(()=>{
  return new Promise(resolve=>{
    setTimeout(()=>resolve(import('../Components/Homepage/Gallery')),1000)
  })
  
})

export default function RootRouting() {
  return (
    <>
    <Router>
    <Header/>
    <Suspense fallback={
     <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row" className='spinner'>
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
    }>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="*" element={<PageNotFound/>}/>

            <Route path='/aboutUs' element={<AboutUs/>}/>
            <Route path='/weServe' element={<WeServe/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
           
            <Route path="/signUp" element={<Reg/>}/>
            <Route path='/login' element={<Login/>}/>

            <Route path='linkAccount' element={<LinkAccount/>}/>

            <Route path='/addToCart' element={<AddToCart/>}/>
            <Route path='/cart/:pname' element={<Cart/>}/>

            <Route path='/productDetail/:pid' element={<ProductDetail/>}/>
            <Route path='/bookTable' element={<BookTable/>}/>
            

            <Route element={<ProtectedRouting/>}>
           
            <Route path='/orderOnline' element={<OrderOnline/>}/>

            </Route>
         
        </Routes>
     </Suspense>
        <Footer/>
    </Router>

    </>
  )
}
