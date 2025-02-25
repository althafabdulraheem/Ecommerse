import React from 'react'
import './auth.css';
import AuthBanner from '../../components/AuthBanner';
import Form from '../../components/Form';
import AuthButton from '../../components/AuthButton';

export default function Login() {
  return (
    <div>
        <div className="wrapper d-flex justify-content-center align-items-center">
                <div className="auth-card">
                  <AuthBanner/>
                  <Form/>
                  <AuthButton/>
                  <p class="text-muted mt-2 " style={{float:'right'}}>Register</p>
                </div>
          
        </div>
    </div>
  )
}
