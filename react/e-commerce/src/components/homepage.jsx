import { React, useState, useEffect } from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react'
import { counterContext } from '../../context/context'

function homepage() {

  const [creation, setcreation] = useState(false)
  const { products, setproducts } = useContext(counterContext)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    let ecomstring = localStorage.getItem("ecom")
    if (ecomstring) {
      let ecom = JSON.parse(localStorage.getItem("ecom"))
      setproducts(ecom)
    }
  }, [])

  const saveToLS = (params) => {
    localStorage.setItem("ecom", JSON.stringify(products))
  }

  const clearAllStorage = () => {
    localStorage.clear();
    setproducts([]); // Optionally clear the products state as well
  };


  const onSubmit = (data) => {
    const price = data.price;
    const Rproduct = data.name.toLowerCase().split(" ");
    var productArray = [];
    for (var i = 0; i < Rproduct.length; i++) {
      productArray.push(Rproduct[i].charAt(0).toUpperCase() + Rproduct[i].slice(1));
    }
    const name = productArray.join(" ");
    setproducts([...products, { id: uuidv4(), price, name, cart: false, quantity: 0 }]);
    setcreation(false);
    reset();
    console.log(products)
    saveToLS()
  }

  const handleDel = (e, id) => {
    const newpdt = products.filter((item) => {
      return item.id !== id
    })
    setproducts(newpdt);
    saveToLS()
  }

  const handleCart = (e, id) => {
   
  
      const updatedProducts = products.map((item) => {
        if (item.id === id) {
          if (item.cart === true) {
            item.quantity+=1
          }else{
            return { ...item, cart: true, quantity: item.quantity + 1 };
          }
        }
        return item;
      });
    setproducts(updatedProducts);
    saveToLS();
  };


  return (
    <div className='bg-zinc-700 min-h-screen relative'>
      <button onClick={clearAllStorage}>Clear All Storage</button>

      <div className="container flex justify-between bg-zinc-800 text-yellow-700 mt-10 h-16">
        <div className='flex'>
          <MdDelete onClick={handleDel} className='w-6 h-6 mx-3 my-auto' />
          <div className=" mx-3 pdt text-2xl font-bold m-auto">name</div>
        </div>
        <div className='flex text-2xl font-bold my-auto'>
          <div>price</div>
          <IoAddCircleOutline className='w-8 h-8 mx-5 my-auto' />

        </div>
      </div>
      {products.map((item) =>
        <div key={item.id} className="container flex justify-between bg-zinc-800 text-yellow-700 mt-5 h-16">
          <div className='flex'>
            <MdDelete onClick={(e) => { handleDel(e, item.id) }} className='w-6 h-6 mx-3 my-auto' />
            <div className=" mx-3 pdt text-2xl font-bold m-auto">{item.name}</div>
          </div>
          <div className='flex text-2xl font-bold my-auto'>
            <div>{item.price}</div>
            <IoAddCircleOutline onClick={(e) => { handleCart(e, item.id) }} className='w-8 h-8 mx-5 my-auto' />
          </div>
        </div>

      )}
      {creation
        ?
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container flex bg-zinc-800 text-yellow-700 mt-10 h-12">
            <input className="bg-zinc-900 mx-5 pdt text-2xl font-bold my-auto" type="text"  {...register("name", { required: true })} />
            <input className='bg-zinc-900 text-2xl font- my-auto' type="number" {...register("price", { required: true })} />
            <input className='mx-5' type="submit" />
          </div>
        </form>
        :
        <button onClick={() => setcreation(true)} className='bg-orange-700 px-3 py-1 rounded-lg font-bold m-5'>Create</button>
      }


    </div>

  )

}


export default homepage
