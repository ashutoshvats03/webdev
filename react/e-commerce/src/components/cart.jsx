import React, { useContext, useEffect, useState } from 'react';
import { IoAddCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { counterContext } from '../../context/context';

function products() {

  const saveToLS = (params) => {
    localStorage.setItem("ecom", JSON.stringify(products))
  }
  useEffect(() => {
    let ecomstring = localStorage.getItem("ecom")
    if (ecomstring) {
      let ecom = JSON.parse(localStorage.getItem("ecom"))
      setproducts(ecom)
    }
  }, [])

  const clearAllStorage = () => {
    localStorage.clear();
    setproducts([]); // Optionally clear the products state as well
  };

  const { products, setproducts } = useContext(counterContext);

  const shortenProductName = (productName) => {
    if (typeof productName === 'string') {
      return productName.length > 10 ? productName.substring(0, 10) + "..." : productName;
    }
    return productName;  // Return as-is if not a string
  };

  const handleDel = (e, id) => {
    const newpdt = products.filter((item) => {
      return item.id !== id
    })
    setproducts(newpdt);
    saveToLS()
  }

 
  const handleCart = (e,id) => {
    const updatedProducts = products.map((item) => {
      if (item.id === id) {
        return { ...item, cart: true, quantity: item.quantity + 1 };
      }
      return item;
    });
  
    setproducts(updatedProducts);
    saveToLS(); 
  };
  
  useEffect(() => {
  }, ); 
  
  
  const sum=()=>{
     let sumT=0;
     (products).map(item=>{
        sumT=item.quantity*item.price + sumT
    })
    return sumT
  }
  

  return (

    <div className='min-h-screen'>
      <button onClick={clearAllStorage}>Clear All Storage</button>
      <div className='bg-neutral-500 max-w-3xl mt-24 ml-10'>
        {(products).map(item => {
          return item.cart === true && <div key={item.id} className="  container flex justify-between my-5">
            <div className=' flex max-w-80 max-h-8 overflow-y-hidden'>
              <MdDelete onClick={(e) => handleDel(e, item.id)} className='w-6 h-6 mx-3 my-auto' />
              <div className="mx-3 pdt text-xl underline font-bold m-auto">
                {shortenProductName(item.name)}</div>
            </div>
            <div className='flex text-2xl  font-bold my-auto mr-5'>
              <div className='w-4 mx-5 '>{item.price}</div>
              <IoAddCircleOutline onClick={(e) => { handleCart(e, item.id) }} className='w-8 h-8 ml-5 my-auto' />
              <div className=' w-4 '>{item.quantity}</div>
            </div>
          </div>

        })}
      </div>
      <div className="sum flex justify-between bg-neutral-500 max-w-3xl mt-5 ml-10 text-xl font-bold">
        <div>Total sum is</div>
        <div className='mr-12'>{sum()}</div>
      </div>
    </div>
  );
}

export default products;
