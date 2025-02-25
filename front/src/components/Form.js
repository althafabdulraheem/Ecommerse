import React from 'react'

export default function Form() {
    let section=[];
    section['login']=['email','password'];
  
  return (
    <div className="form-wrapper">
        {section['login'].map((value)=>{
            console.log(value.email)
            return(
                 <div className="row mt-2">
                    <div className="form-group">
                        <input className="form-control auth-field" type={value} name={value}  placeholder={`enter your ${value}...`} autocomplete="off"/>
                    </div>
                </div>
             )
            })}
       
       
    </div>
  )
}
