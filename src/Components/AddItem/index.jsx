import React, { useState } from 'react'
import { useAddNewProductMutation } from '../../redux/slices/productSlice'
import { useNavigate } from 'react-router-dom'

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }))
  }
  return (
    <>
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='my-4'>
          <input
            type="text"
            value={newProduct.title}
            placeholder='Title'
            onChange={handleChange}
            className='rounded-sm px-5 py-1'
          />
        </div>
        <div>
          <input
            type="text"
            value={newProduct.price}
            placeholder='Price'
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            value={newProduct.description}
            placeholder='Description'
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            value={newProduct.image}
            placeholder='Image'
            onChange={handleChange}
          />
        </div>

      </div>
    </>
  )
}

export default AddItem