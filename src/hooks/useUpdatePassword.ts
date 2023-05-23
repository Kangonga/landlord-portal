import axios from "axios"

export default async function useUpdatePassword(userId:string, password:string, token:string){
    const url = 'https://enerlytics.m-paya.net/profile?'
    const params = {
        api:{
            request:'updatePassword',
            user:userId,
            token
        },
        input:{
            pass0:password,
            pass1:password
        }
    }
    const response = await axios.post(url,params)
    return response.data
}