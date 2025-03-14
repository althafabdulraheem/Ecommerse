import React from 'react'
import {useDispatch } from 'react-redux';
import { addItem,removeItem } from '../redux/cart';
import { BiPlus,BiMinus,BiX } from "react-icons/bi";
export default function CartItems({items}) {

    const disptch=useDispatch();
    let sub_total=0;
    let total_qty=0;

    items.forEach((value)=>{

        sub_total+=(value.price*value.qty)
        total_qty++

    })

  return (
   
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-7">
                    <div className="card">
                        <div className="card-header">
                            <h1>Cart Items</h1>
                        </div>
                        <div className="card-body">
                            {items&&items.map((item,index)=>(
                                
                                    <div className="row mt-4" key={index}>
                                    <div className="col-md-2">
                                        <img src={item.image} alt="" width="100%" height="75px" style={{objectFit:'contain'}}/>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="poduct-title">{item.title}</p>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex justify-content-around btn-cart-op-wrapper">
                                            <button className="btn-cart-op btn" onClick={()=>{disptch(addItem(item))}}><BiPlus/></button>
                                            <p className='text-dark'>{item.qty}</p>
                                            <button className="btn-cart-op btn" onClick={()=>disptch(removeItem(item))}><BiMinus/></button>
                                        </div>
                                        <p className='text-muted text-center mt-2'>{item.qty} <BiX/> ${item.price}</p>
                                    </div>
                                </div>
                                )
                                )}  
                        
                        </div>
                    </div>
                </div>
              <div className="col-md-5">
                    <div className="card">
                            <div className="card-header">
                                <h1>Order Summary</h1>
                            </div>
                            <div className="card-body">
                                <div className="list d-flex justify-content-between">
                                    <p  className='text-dark'>Sub Total ({total_qty})</p>
                                    <p className='text-dark'>${sub_total.toFixed(3)}</p>
                                </div>
                                <div className="list d-flex justify-content-between">
                                    <p  className='text-dark'>Shipping</p>
                                    <p className='text-dark'>$5</p>
                                </div>
                                <div className="list d-flex justify-content-between">
                                    <p  className='text-dark fw-bold'>Grand Total</p>
                                    <p className='text-dark fw-bold'>${(sub_total+5).toFixed(3)}</p>
                                </div>
                            </div>
                    </div>
              </div>
              
            </div>
      </div>
 
  )
}
