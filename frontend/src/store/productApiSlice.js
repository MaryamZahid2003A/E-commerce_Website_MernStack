import { ApiSlice } from "./ApiSlice";
const baseurl='/api/user'

const productApiSlice=ApiSlice.injectEndpoints({
    endpoints:(builder)=>({
        beverage : builder.mutation({
            query: (data)=>({
                method:'GET',
                url:`${baseurl}/beverage`,
                body:data
            })
        }),
        bakery : builder.mutation({
            query: (data)=>({
                method:'GET',
                url:`${baseurl}/bakery`,
                body:data
            })
        })
    })
})

export const {useBeverageMutation}=productApiSlice;