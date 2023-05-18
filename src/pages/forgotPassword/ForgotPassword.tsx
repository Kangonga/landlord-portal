import { LoginPageContainer } from "../login/styles";
import { ForgotPasswordForm, KeyIcon } from "./styles";
import { useFormik } from "formik";
import * as yup from 'yup';
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate()
  const [isRequestSent, setIsRequestSent] = useState(false)
  const validationSchema=yup.object().shape({
    phoneNumber: yup.string()
    .matches(/^0[0-9]{9}$/, 'Phone number must start with 0 and have exactly 10 digits')
    .required('Phone number is required'),
  })
  const phoneNumberFormik = useFormik({
    initialValues:{phoneNumber:''},
    validationSchema,
    onSubmit:(values)=>{
      console.log(values)
      setIsRequestSent(true)
    }
  })
  const verificationCodeFormik = useFormik({
    initialValues:{code:''},
    validationSchema:yup.object().shape({
      code: yup.string().required('A valid verification code is required')
    }),
    onSubmit:(values)=>{
      console.log(values)      
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
           <Button type='submit' sx={{border:'1px solid gray',width:'max-content', margin:'auto'}}>Submit</Button>
        </form>
        <div style={{width:'100%', height:'10px', backgroundColor:'#60a5fa'}}></div>
        <form onSubmit={verificationCodeFormik.handleSubmit}style={{display:isRequestSent===false?'none':'inherit'}}>
          <label>Please enter the verification code sent to your phone number</label>
          <input
           value={verificationCodeFormik.values.code}
           onChange={verificationCodeFormik.handleChange}
           onBlur={verificationCodeFormik.handleBlur}
           name="code"
           id="code"
           />
           <div style={{color:'red'}}>{verificationCodeFormik.errors.code}</div>
           <div style={{display:'flex', gap:'1rem', justifyContent:'center'}}>
            <Button type='submit' sx={{border:'1px solid gray'}} onClick={()=>navigate('/resetPassword')}>Submit</Button>
            <Button type='submit' sx={{border:'1px solid gray'}}>Resend Code</Button>
           </div>

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
