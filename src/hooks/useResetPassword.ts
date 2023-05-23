import axios from "axios"

export default async function useResetPassword(phone:string){
    const url = 'https://enerlytics.m-paya.net/user?'
    const params = {
        api:{
            request:'resetPassword'
        },
        input:{
            phone
        }
    }
    const response = await axios.post(url,params)
    return response.data
}