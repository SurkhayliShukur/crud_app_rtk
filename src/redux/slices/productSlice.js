import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4005"
    }),

    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => "/products"
        }),

        addNewProduct: builder.mutation({
            query: (newProduct) => ({
                url: "/products",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: newProduct
            }),
            invalidatesTags: ["Product"],
        }),

        updateProduct: builder.mutation({
            query: (id,updatedProduct) => ({
                url: `/product/${id}`,
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: updatedProduct,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "Product", id }],
        })

    })
})

export const { useGetAllProductQuery, useAddNewProductMutation, useUpdateProductMutation } = productApi