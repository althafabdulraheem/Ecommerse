import React,{useEffect,useState} from 'react'
import axios from 'axios';



export default function Products() {
    const [data,setData]=useState([])
    useEffect(()=>{
       const getProducts=async()=>{
            const response=await axios.get('https://fakestoreapi.com/products/');
           
            setData(response.data)
       }
       getProducts();
    },[])

  return (
    <div className='container mt-4'>
        <h1>Expolre Products</h1>
        <div className="row">
            {data.map((value,id)=>{
                return(
                    <div className="col-12 col-md-4 mt-4" key={id}>
                    <div className="card product-card">
                        <div className="card-header">
                            <img src={value.image} alt="" />
                        </div>
                        <div className="card-body">
                            {value.title}
                        </div>
                        <div className="card-footer">
    
                        </div>
                    </div>
                </div>
                ) 

            })}
          
            
        </div>
       
    </div>
  )
}
