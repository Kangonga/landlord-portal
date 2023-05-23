import { LoginPageContainer } from "../login/styles";
import { ForgotPasswordForm, KeyIcon } from "./styles";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik"
import * as yup from 'yup';
import useVerifyOtp from "@/hooks/useVerifyOtp";
import useResetPassword from "@/hooks/useResetPassword";
import { useAppDispatch } from "@/globalHooks";
import { authActions } from "@/features/authentication/authSlice";
import ResendCodeButton from '../../shared/timer/Timer';
export default function ForgotPassword() {
  const dispatch = useAppDispatch()
  const [isCodeSent, setIsCodeSent] = useState(false)
  const navigate = useNavigate()
  const [isRequestSent, setIsRequestSent] = useState(false)
  const [showPhoneError, setShowPhoneError] = useState(false)
  const [showCodeError, setShowCodeError] = useState(false)
  const [userToken,setUserToken] = useState('')
 const validationSchema=yup.object().shape({
  phoneNumber: yup.string()
  .matches(/^0[0-9]{9}$/, 'Phone number must start with 0 and have exactly 10 digits')
  .required('Phone number is required'),
})
 const phoneNumberFormik = useFormik({
  initialValues:{phoneNumber:''},
  validationSchema,
  onSubmit:async(values)=>{
      setIsCodeSent(true)
      console.log(values)
      const response = await useResetPassword(values.phoneNumber)
      if(response.status==0){
          setIsRequestSent(true)
          setUserToken(response.data.user)
          setIsCodeSent(false)
      }
      else {
        setIsRequestSent(false)
        setShowPhoneError(true)
        setIsCodeSent(false)
      }
  }
})
 const verificationCodeFormik = useFormik({
  initialValues:{code:''},
  validationSchema:yup.object().shape({
      code: yup.string().required('A valid verification code is required')
  }),
  onSubmit:async(values)=>{
      setIsCodeSent(true)
      const response = await useVerifyOtp(values.code, userToken)
      console.log(response)
      if(response.status==0){
        console.log('successful otp')
        setShowCodeError(false)
        dispatch(authActions.login(response.data))
        navigate('/resetPassword')
      }
      else{
        setIsCodeSent(false)
        setShowCodeError(true)
      }
  }
})
const handleResendCode = ()=>{

}
  return (
    <LoginPageContainer>
        <ForgotPasswordForm>
        <KeyIcon />
        <Typography textAlign='center' fontSize='1.5rem'>Forgot Password</Typography>
        <form onSubmit={phoneNumberFormik.handleSubmit}>
          <label>
            Enter Your phone number and we will send you a code to reset your password
          </label>
          <input
           value={phoneNumberFormik.values.phoneNumber}
           onChange={phoneNumberFormik.handleChange}
           onBlur={phoneNumberFormik.handleBlur}
           name="phoneNumber"
           id="phoneNumber"
           />
           <div style={{color:'coral'}}>{phoneNumberFormik.errors.phoneNumber}</div>
           {showPhoneError&&<div style={{color:'coral'}}>Phone number account not found</div>}
           <Button type='submit'
            disabled={isCodeSent}
           sx={{border:'1px solid gray',width:'max-content', margin:'auto'}}>Submit</Button>
        </form>
        <div style={{width:'100%', height:'10px', backgroundColor:'#3b82f6', borderLeft:'#3b82f6', borderRight:'#3b82f6'}}></div>
        {isRequestSent
        &&
        <form onSubmit={verificationCodeFormik.handleSubmit}>
          <label>Please enter the verification code sent to your phone number</label>
          <input
           value={verificationCodeFormik.values.code}
           onChange={verificationCodeFormik.handleChange}
           onBlur={verificationCodeFormik.handleBlur}
           disabled={isCodeSent}
           name="code"
           id="code"
           />
           <div style={{color:'coral'}}>{verificationCodeFormik.errors.code}</div>
           <div style={{display:'flex', gap:'1rem', justifyContent:'center'}}>
            <Button 
              disabled={isCodeSent}
              type='submit'
              sx={{border:'1px solid gray'}} 
              >
                Submit
            </Button>
            <Box sx={{border:'1px solid gray'}}>
            {/* <Button 
              disabled={isCodeSent}
              onClick={handleResendCode}
              >
                Resend Code
            </Button> */}
            <ResendCodeButton/>
           </Box>
           </div>
           {showCodeError&&<div style={{color:'coral'}}>Invalid or expired code</div>}
        </form>
        }
        <Button 
          onClick={()=>navigate('/')} 
          type='button' 
          sx={{
            textDecoration:'underline',
            color:'gray', 
            width:'max-content', 
            margin:'auto'}}
        >
          Go back to login page</Button>
        </ForgotPasswordForm>
    </LoginPageContainer>
  )
}
