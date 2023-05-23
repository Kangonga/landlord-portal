import { LoginButtonContainer, LoginPageContainer } from "../login/styles";
import { ForgotPasswordForm, KeyIcon } from "./styles";
import { useState } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik"
import * as yup from 'yup';
import useResetPassword from "@/hooks/useResetPassword";
import { useAppDispatch } from "@/globalHooks";
import { authActions } from "@/features/authentication/authSlice";

export default function ForgotPassword() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [isRequestSent, setIsRequestSent] = useState(false)
  const [showPhoneError, setShowPhoneError] = useState(false)
  const validationSchema=yup.object().shape({
  phoneNumber: yup.string()
  .matches(/^0[0-9]{9}$/, 'Phone number must start with 0 and have exactly 10 digits')
  .required('Phone number is required'),
})
 const phoneNumberFormik = useFormik({
  initialValues:{phoneNumber:''},
  validationSchema,
  onSubmit:async(values)=>{
      console.log(values)
      setIsRequestSent(true)
      const response = await useResetPassword(values.phoneNumber)
      if(response.status==0){
          console.log('response', response)
          setIsRequestSent(true)
          dispatch(authActions.updatePhoneNumber(values.phoneNumber))
          dispatch(authActions.updateUserId(response.data.user))
          navigate('/otp')
      }
      else {
        setIsRequestSent(false)
        setShowPhoneError(true)
      }
  }
})


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
          <LoginButtonContainer isRequestSent={isRequestSent}>
            <Button type='submit' disabled={isRequestSent}
              sx={{color:'white',width:'max-content', margin:'auto'}}>Submit</Button>
                { isRequestSent&& <CircularProgress size={23} sx={{color:'blue'}} /> }
           </LoginButtonContainer >
        </form>
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
