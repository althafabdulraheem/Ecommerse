import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../components';
import axios from 'axios';

export default function Item() {
    const {slug} =useParams();
    const [item,setItem]=useState(null)
    useEffect(()=>{
        const fetch=async()=>{
            const response=await axios.get(`https://fakestoreapi.com/products/${slug}`)
            setItem(response.data)
        }
        fetch()
    },[slug])
  return (
    <div>
        <Navbar/>
        {item&&<div className="container p-3">
            <div className="row">
                <div className="col-md-6">
                    <img src={item.image} alt="" className="img-fluid img-thumbnail" />
                </div>
                <div className="col-md-6">
                    <h1>{item.title}</h1>
                    <p className="text-dark">{item.description}</p>
                </div>
            </div>
        </div>}
        
    </div>
  )
}
