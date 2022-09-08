import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: "ProductsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://fakestoreapi.com"}),
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:()=>"products",
        })
    })
})

export const {useGetAllProductsQuery} = productsApi