import React from 'react'
import './Homepage.css'

export default function WeServe() {
  return (
   
    <>
        <div className="container">
            <h2 className="title">We Serve</h2>
            <div className="row">
                <div className="col-4">
                    <img src="https://i.pinimg.com/564x/86/ac/ef/86acefe8dfe5052b9aa9802e710cddd5.jpg " alt="starterImg" className='img-responsive serveImg '/>
                    <h4>Starters</h4>
                    <p>We are known for our lip smacking starters.</p>
                </div>
                <div className="col-4">
                    <img src="https://i.pinimg.com/564x/61/f9/7a/61f97a3220d4e37cc156c3e6e181396e.jpg" alt='mainCourse' className='img-responsive serveImg'/>
                    <h4>Main Course</h4>
                    <p>Tantalised your taste buds with our wide variety of main course.</p>
                </div>
                <div className="col-4">
                <img src="https://i.pinimg.com/736x/60/f0/08/60f008876cfa36dbe6bb80d9bacaf8ed.jpg" alt="dssertsImg" className='img-responsive serveImg'/>
                    <h4>Desserts</h4>
                    <p>Satiate your palate and take yourself on a culinary treat.</p>
                </div>
                <div className="col-4">
                <img src="https://i.pinimg.com/564x/5f/1d/a2/5f1da29d49370387880c8a88f6b15c29.jpg" alt="dssertsImg" className='img-responsive serveImg'/>
                    <h4>Drinks</h4>
                    <p>Relish the most authentic drinks at our restaurant.</p>
                </div>
            </div>
        </div>
    </>
  )
}
