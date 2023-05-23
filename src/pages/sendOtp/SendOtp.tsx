import { Box, Button } from "@mui/material";
import { ForgotPasswordForm, KeyIcon } from "../forgotPassword/styles";
import ResendCodeButton from "@/shared/timer/Timer";
import { useFormik } from "formik";
import * as yup from 'yup';
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/globalHooks";
import { useNavigate } from "react-router-dom";
import useVerifyOtp from "@/hooks/useVerifyOtp";
import { authActions } from "@/features/authentication/authSlice";
import { LoginPageContainer } from "../login/styles";

export default function SendOtp() {
  const authState = useAppSelector(state=>state.auth)
    const dispatch = useAppDispatch()
    const [isCodeSent, setIsCodeSent] = useState(false)
    const navigate = useNavigate()
    const [showCodeError, setShowCodeError] = useState(false)
    const userid =  useAppSelector(state=>state.auth.userId)
   const verificationCodeFormik = useFormik({
    initialValues:{code:''},
    validationSchema:yup.object().shape({
        code: yup.string().required('A valid verification code is required')
    }),
    onSubmit:async(values)=>{
        setIsCodeSent(true)
        const response = await useVerifyOtp(values.code, userid)
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
  return (
    <LoginPageContainer>
    <ForgotPasswordForm>
        <KeyIcon />
        <form onSubmit={verificationCodeFormik.handleSubmit}>
          <label>Please enter the verification code sent to {authState.phone}</label>
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
            <ResendCodeButton/>
           </Box>
           </div>
           {showCodeError&&<div style={{color:'coral'}}>Invalid or expired code</div>}
        </form>
        <Button
          onClick={()=>navigate('/')} 
          type='button' 
          sx={{
            textDecoration:'underline',
            color:'gray', 
            width:'max-content', 
            margin:'auto'}}
        >Go back to login page</Button>
    </ForgotPasswordForm>
    </LoginPageContainer>
  )}