import React from 'react'

export default function CartItems({items}) {

  return (
   
        <div className="container mt-2">
            <div className="row">
                <div className="card">
                    <div className="card-header">
                        <h1>Cart Items</h1>
                    </div>
                    <div className="card-body">
                        {items&&items.map((item)=>(
                            
                                <div className="row">
                                <div className="col-md-2">
                                    <img src={item.image} alt="" width="100%" height="75px" style={{objectFit:'contain'}}/>
                                </div>
                                <div className="col-md-4">
                                    <p className="text-dark">{item.title}</p>
                                </div>
                                <div className="col-md-4">{item.qty} x ${item.price}</div>
                            </div>
                            )
                            )}  
                      
                    </div>
                </div>
            </div>
      </div>
 
  )
}
