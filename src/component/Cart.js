import React from 'react'

function Cart(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a,c) => a+c.qty * c.price, 0);


    return (
        <div className="container">
            <h1 className ="text-center display-3">cart</h1>
            {
                cartItems.length === 0 && <div><h1 className="text-center display-4">Your Cart is Empty </h1></div>
            }
            <table className="table table-bordered">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th colSpan="2">Action</th>
                </tr>
            {
                cartItems.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.qty} x {item.price}</td>
                        <td><button onClick={() => onAdd(item)} className="btn-info">+</button></td>
                        <td><button onClick={() => onRemove(item)} className="btn-danger">-</button></td>
                    </tr>
                   
                ))
            }
            </table>
           {
               cartItems.length !== 0 &&(
                   <>
                   <div className="row">
                       <div className="col-4 ml-auto"><p>Grand Total: {itemsPrice}</p></div>
                   </div>
                   </>
               )
           }
           
        </div>
    )
}

export default Cart
