import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  return (
    <div style={{height:'60vh',width:"100%"}}>
      <DotLottieReact
      src="https://lottie.host/97c08682-8451-44ad-9bf7-02a3f928661b/LEE4Gt8gac.lottie"
      loop
      autoplay
    />
    <p className="text-dark text-center fw-bold">Cart Is Empty</p>
    <div className="d-flex justify-content-center">
      <Link to="/landing" className="btn btn-success">Go To Shopping</Link>

    </div>
    </div>
    
  )
}

