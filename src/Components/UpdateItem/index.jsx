import React, { useState,useEffect } from 'react'
import { useUpdateProductMutation, useGetProductByIdQuery } from "../../redux/slices/productSlice"
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from "react-toastify"
import { IoChevronBackCircle } from "react-icons/io5";
import { ROUTER } from '../../constant/Router'

const initialState = {
    title: "",
    price: "",
    description: "",
    image: ""
}

const UpdateItem = () => {
    const [editProduct, setEditProduct] = useState(initialState)
    const [updateProduct] = useUpdateProductMutation()
    const navigate = useNavigate()
    const { id } = useParams()
    const { data, error, isLoading } = useGetProductByIdQuery(id);
    const isDisable =  Object.values(editProduct).some((value) => value === "")


    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };


    const editedProduct = async () => {
        try {
            updateProduct({ id, updateProduct: editProduct })
            toast.success("edited successfully", {
                autoClose: 1000
            })
            setTimeout(() => {
                navigate(ROUTER.Home)
            }, 1500)
        }
        catch (error) {
            throw new Error("error", error)
        }
    }
    useEffect(() => {
        if (data) {
            setEditProduct(data);
        }
    }, [data]);

    if (error) {
        return <h1>ERRROR</h1>;
    }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <div className='w-full flex flex-col justify-center items-center py-5'>
                <div>
                    <div className='my-4'>
                        <input
                            type="text"
                            name='title'
                            value={editProduct.title}
                            placeholder='Title'
                            onChange={handleChange}
                            className='rounded-sm px-5 py-1 focus:outline-none'
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            name='price'
                            value={editProduct.price}
                            placeholder='Price'
                            onChange={handleChange}
                            className='rounded-sm px-5 py-1 focus:outline-none'
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name='description'
                            value={editProduct.description}
                            placeholder='Description'
                            onChange={handleChange}
                            className='rounded-sm px-5 py-1 focus:outline-none'
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name='image'
                            value={editProduct.image}
                            placeholder='Image'
                            onChange={handleChange}
                            className='rounded-sm px-5 py-1 focus:outline-none'
                        />
                    </div>
                    <button className={`my-3 bg-sky-800 rounded-md px-5 py-1 font-bold w-[225px] mt-4 transition-all duration-500${isDisable
                        ? "bg-gray-800 cursor-not-allowed"
                        : "bg-stone-500 hover:bg-stone-400"
                        }`}
                        onClick={editedProduct}
                        disabled={isDisable}
                    >
                        Update
                    </button>
                </div>
                <div className="card mt-6 bg-base-100 w-96 " key={data.id}>
                    <img
                        src={data.image}
                        alt="product.images"
                        className="h-[200px] w-full object-cover rounded-t-lg"
                    />

                    <div className="bg-stone-800 text-stone-300 p-6 text-xl rounded-b-lg capitalize font-semibold">
                        <h2 className="card-title">{data.title}!</h2>
                        <p className="my-2">{data.description.slice(0, 50)}</p>
                        <div className="flex justify-between items-center">
                            <p>$ {data.price}</p>
                            <IoChevronBackCircle
                                onClick={() => navigate(ROUTER.Home)}
                                className="my-2 text-3xl text-cyan-200 cursor-pointer hover:scale-110 transition-all duration-500  "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateItem