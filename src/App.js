import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import commerce from "./library/commerce";
import { useEffect, useState } from "react";
import ProductCategoryWise from "./components/ProductCategoryWise";
import ProceedToCheckout from "./components/ProceedToCheckout";
import ThankYou from "./components/ThankYou";

function App() {
  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  

  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
      // console.log(products.data)
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }


  const addToCart = async(prodId, qty) => {
    const response = await commerce.cart.add(prodId, qty);
      setCart(response.cart);
      // console.log(response.cart)
      // console.log(response.data)
    
    };
  
  const removeFromCart = async (prodId) => {
    const response = await commerce.cart.remove(prodId);
    setCart(response.cart)
  }

  const FetchCart = async (removeFromCart) => {
    setCart(await commerce.cart.retrieve());
  }
  
  const fetchCategory = async () => {
    const response = await commerce.categories.list();
    // console.log(response.data)
    setCategories(response.data);
  }

  useEffect(() => {
    fetchProducts();
    FetchCart();
    fetchCategory();
  }, []);
  
  return (
    <BrowserRouter>
      <div className="app">

        <Routes>
          {/* <Route path="/login" element={<><Login /></>} /> */}
          <Route path="/" element={<><Header cart={cart} categories={categories}/><Home products={products} addToCart={addToCart}/></>} />
          <Route path="/checkout" element={<><Header categories={categories}/><Checkout cart={cart} removeFromCart={removeFromCart}/></>} />
          <Route path="/thankyou" element={<><Header categories={categories}/><ThankYou cart={cart} removeFromCart={removeFromCart}/></>} />
          <Route path="/proceedtocheckout" element={<><Header categories={categories}/><ProceedToCheckout cart={cart} removeFromCart={removeFromCart}/></>} />
          <Route path="/category/:slug" element={<><Header cart={cart} categories={categories}/><ProductCategoryWise addToCart={addToCart}/></>} />
          {/* <Route path="/payment" element={<><Header />
            <Elements
              stripe={promise}
            >
              <Payment />
            </Elements>
          </>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
