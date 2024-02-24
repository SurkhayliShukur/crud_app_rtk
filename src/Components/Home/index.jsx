import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetAllProductQuery } from "../../redux/slices/productSlice"

const Home = () => {
  const { data, isError, isLoading, refetch } = useGetAllProductQuery();
  const navigate = useNavigate();


  useEffect(() => {
    refetch()
  }, [])
  if (isError) {
    return <h1>ERRROR</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className='h-screen w-full flex justify-center'>
        <div className="w-10/12  grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            data?.map((product) => (
              <div className='card mt-6 bg-base-100' key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className='h-[200px] w-full object-cover rounded-t-lg' />
                  <div className='bg-stone-800 text-stone-300 p-6 text-xl rounded-b-lg capitalize font-semibold'>
                    <h2 className='card-title'>{product.title}</h2>
                    <p>{product.description.slice(0,50)}</p>
                    <div className="flex justify-between items-center">
                      <p>${product.price}</p>
                      <div className="flex justify-center items-center my-2 ">

                      </div>
                    </div>
                  </div>

              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home