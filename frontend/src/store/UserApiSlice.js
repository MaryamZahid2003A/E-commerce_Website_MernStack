import { ApiSlice } from "./ApiSlice";
const baseUrl='/user'

export const UserApiSlice=ApiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login : builder.mutation({
            query : (data)=>({
                method : 'POST',
                url:`${baseUrl}/login`,
                body:data,
            })
        }),
        register : builder.mutation({
            query : (data)=>({
                method : 'POST',
                url:`${baseUrl}/register`,
                body:data,
            })
        }),
        logout : builder.mutation({
            query : (data)=>({
                method : 'POST',
                url:`${baseUrl}/logout`,
                body:data
            })
        })
    })
})

export const {useLoginMutation,useRegisterMutation,useLogoutMutation}=UserApiSlice;