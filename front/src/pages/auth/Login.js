import React from 'react'
import './auth.css';
import AuthBanner from '../../components/AuthBanner';
import Form from '../../components/Form';
import AuthButton from '../../components/AuthButton';
import { useForm } from "react-hook-form";

export default function Login() {

 const{handleSubmit,register,formState:{errors}}=useForm()
 const onSubmit = data => console.log(data);


  return (
    <div>
        <div className="wrapper d-flex justify-content-center align-items-center">
                <div className="auth-card">
                  <AuthBanner/>
                  <form onSubmit={handleSubmit(onSubmit)}>
                  <Form register={register} errors={errors}/>
          
                  <AuthButton/>
                  </form>
                  <p className="text-muted mt-2 " style={{float:'right'}}>Register Now!</p>
                </div>
          
        </div>
    </div>
  )
}
