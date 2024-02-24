import React, { useState } from 'react'
import { useAddNewProductMutation } from '../../redux/slices/productSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import {ROUTER} from "../../constant/Router"

const initialState = {
  title: "",
  price: "",
  description: "",
  image: ""
}

const AddItem = () => {
  const [addNewProduct, { isError, isLoading }] = useAddNewProductMutation()
  const [newProduct, setNewProduct] = useState(initialState)
  const navigate = useNavigate()
  const isDisable =  Object.values(newProduct).some((value) => value === "")

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const addProduct = async () => {
    try {
      await addNewProduct(newProduct)
      toast.success("Product added successfully!", {
        autoClose: 1000,
      });
      setTimeout(() => {
        navigate(ROUTER.Home)
      },1000)
    }
    catch (error) {
      throw new Error("error", error)
    }
  }
  if (isError) {
    return <h1>ERRROR</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className='w-full flex flex-col justify-center items-center py-5'>
        <div className='my-4'>
          <input
            type="text"
            name='title'
            value={newProduct.title}
            placeholder='Title'
            onChange={handleChange}
            className='rounded-sm px-5 py-1 focus:outline-none'
          />
        </div>
        <div>
          <input
            type="number"
            name='price'
            value={newProduct.price}
            placeholder='Price'
            onChange={handleChange}
            className='rounded-sm px-5 py-1 focus:outline-none'
          />
        </div>
        <div>
          <input
            type="text"
            name='description'
            value={newProduct.description}
            placeholder='Description'
            onChange={handleChange}
            className='rounded-sm px-5 py-1 focus:outline-none'
          />
        </div>
        <div>
          <input
            type="text"
            name='image'
            value={newProduct.image}
            placeholder='Image'
            onChange={handleChange}
            className='rounded-sm px-5 py-1 focus:outline-none'
          />
        </div>
        <button className={`my-3 bg-sky-800 rounded-md px-5 py-1 font-bold w-[225px] mt-4 transition-all duration-500${
           isDisable
           ? "bg-gray-800 cursor-not-allowed"
           : "bg-stone-500 hover:bg-stone-400"
        }`}
        onClick={addProduct}
        disabled = {isDisable}
        >
          Create
        </button>

      </div>
    </>
  )
}

export default AddItem