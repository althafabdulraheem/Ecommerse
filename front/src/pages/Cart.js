import React from 'react'
import {Navbar,EmptyCart,CartItems} from '../components';
import { useSelector} from 'react-redux';

export default function Cart() {
  const cart_items=useSelector((state)=>state.cartCounter.items)
  return (
    <>
        <Navbar></Navbar>
        {cart_items.length > 0 ? <CartItems items={cart_items} />: <EmptyCart/>}
    </>
   
  )
}
