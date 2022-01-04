import React, { useState } from 'react'



function Menu(props) {

  const { products, filterItem, onAdd } = props;
 

 

    return (
    <div>
      <div className="Menu">    
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="menu_text">
                <h2>Our Menu</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla, in suscipit erat sodales id. Nullam ultricies eu turpis at accumsan. Mauris a sodales mi, eget lobortis nulla.</p>
              </div>
              <div className="nav">
                <ul>
                  <li onClick={() => filterItem('pizza')} id="btn9">Pizza</li>
                  <li onClick={() => filterItem('burger')} id="btn10">Burger</li>
                  <li onClick={() => filterItem('shawarma')} id="btn11">Shawarma</li>
                  <li onClick={() => filterItem('deals')} id="btn12">Deals</li>
                  <li onClick={() => filterItem('desi food')} id="btn13">Desi Food</li>
                  <li onClick={() => filterItem('drinks')}id="btn14">Drinks</li>
                </ul> 
              </div>
              </div>
          </div>
        </div>
       </div>
       <div className="menu_div">
       <div className="container">
                <div className="row">
                {
                  products.map((pro) =>(
                    <div className="col-md-4">
                      <div className="menu_item">
                      <img src={pro.image} />
                      <h1>{pro.name}</h1>
                      <h2>{pro.size}</h2>
                      <p>{pro.price}</p>
                      <button onClick={() => onAdd(pro)}className="btn">+Add</button>
                      </div>
                    </div>
                  ))
                }
                </div>
              </div>
          </div>
    </div>
      
                  
    )
}

export default Menu
