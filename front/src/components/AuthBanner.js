import React from 'react'

export default function AuthBanner(){

    return (
      <div className="authBannerWrapper d-flex flex-column align-items-center">
            <img src="/assets/login.png" alt=""/>
            <p class="mt-2 authBannerTitle">Please login to your account</p>
      </div>
    )
  
}
