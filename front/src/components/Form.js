import React from 'react';


export default function Form({register,errors}) {

  
  let section = {
    login: ['email', 'password']
  };

  return (
    <div className="form-wrapper">
      {section['login'].map((value, index) => (
        <div className="row mt-2" key={index}>
          <div className="form-group">
            <input 
              {...register(value,{required:'Field is required *'})} 
              className="form-control auth-field" 
              type={value === 'password' ? 'password' : 'text'} 
             
              placeholder={`Enter your ${value}...`} 
              autoComplete="off"
            />

            {errors[value]&&<label htmlFor="" className="text-danger p-2">{errors[value].message}</label>}
          </div>
        </div>
      ))}
    </div>
  );
}
