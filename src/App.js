import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Carousel from "./component/Carousel";
import Home from "./component/Home";
import About from "./component/About";
import Menu from "./component/Menu";
import Reservation from "./component/Reservation";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./component/Footer";
import data from "./component/MenuApi";
import Cart from "./component/Cart";

 


function App(){

  const { products } = data;
  
  const [check, setCheck] = useState(products);

  useEffect(()=>{
    if(products){
      const initialData = products.filter((curElem) =>{
        return curElem.category === "pizza";
      });
      setCheck( initialData );
    }
  },[products])
  const filterItem = (categItem) =>{
    const updatedItem = products.filter((curElem) =>{
      return curElem.category === categItem;
    });
    setCheck( updatedItem );
  }
  //function for getting the items into cart
  const[cartItems, setCartItems] = useState([]);





  //function for adding the product to the cart
  const onAdd = (product) =>{
   const exist = cartItems.find((x) => x.id === product.id);
   if(exist){
     setCartItems(
       cartItems.map((x) =>
       x.id === product.id ? { ...exist, qty:exist.qty + 1 } : x 
       )
     );
   }else{
     setCartItems([...cartItems,{ ...product,qty:1}]);
   }
  }

  //function of removing the item from the cart
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty == 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    }else{
      setCartItems(
        cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty:exist.qty - 1 } : x 
        )
      );
    }
  }
  return(
    <div>
      <Router>
      <Navbar countItems={cartItems.length} />
      <Carousel />
      <Switch>
        <Route exact path = "/" component={Home} />
        <Route path = "/about" component={About} />
       <Menu path="/menu" products={check} filterItem={filterItem} onAdd={onAdd} />
       <Cart  path="/cart" cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
        <Route path = "/reservation" component={Reservation} />
        <Route path = "/contact" component={Contact} />
        <Route path = "/login" component={Login} />
        <Route path = "/signup" component={Signup} />
      </Switch>
      <Footer />
      </Router>
    </div>
  )
     }
export default App;
