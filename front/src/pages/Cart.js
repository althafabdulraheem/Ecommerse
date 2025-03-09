import React from 'react'
import {Navbar,EmptyCart,CartItems} from '../components';
import { useSelector} from 'react-redux';

export default function Cart() {
  const cart_items=useSelector((state)=>state.cartCounter)
  return (
    <>
        <Navbar></Navbar>
        {cart_items.items.length > 0 ? <CartItems/>: <EmptyCart/>}
    </>
   
  )
}
