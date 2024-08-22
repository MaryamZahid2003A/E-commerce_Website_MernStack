import { ApiSlice } from "./ApiSlice";
const baseurl='/api/user'

export const UserApiSlice=ApiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login : builder.mutation({
            query : (data)=>({
                method : 'POST',
                url:`${baseurl}/login`,
                body:data
            })
        })
    })
})

export const {useLoginMutation}=UserApiSlice;