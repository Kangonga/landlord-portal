import axios from "axios"

export default async function useVerifyOtp(otp:string, userId:string){
    const url = 'https://enerlytics.m-paya.net/user?'
    const params = {
        api:{
            request:'otp',
            user:userId
        },
        input:{
            otp
        }
    }
    const response = await axios.post(url,params)
    return response.data
}