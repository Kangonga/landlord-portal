import { images } from '@/assets'
import { ForgotPassword, LoginForm, LoginPageContainer } from './styles'
import { Button, Typography } from '@mui/material'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import useLogin from '@/hooks/useLogin';
import { useState } from 'react';
import { useAppDispatch } from '@/globalHooks';
import { authActions } from '@/features/authentication/authSlice';

export default function Login() {
  const dispatch = useAppDispatch()
  const [isError, setIsError] =  useState(false)
  const [isRequestSent,setIsRequestSent] =  useState(false)

  const navigate = useNavigate()
  interface formInterface {
    phone:string,
    password:string,
    keepLoggedIn:boolean
}
interface apiResult {
  data:{
      user:number,
      token:string
  },
  status:number,
  statusDesc:string
}
  const formData = {
    phone: '',
    password:'',
    keepLoggedIn: false
  }
  const validationSchema=yup.object().shape({
    phone: yup.string()
    .matches(/^0[0-9]{9}$/, 'Phone number must start with 0 and have exactly 10 digits')
    .required('Phone number is required'),
    password: yup.string().required('Password is required'),
  })
  const handleSubmit = async (values:formInterface)=>{
    setIsRequestSent(true)
    const response:apiResult = await useLogin({phone:values.phone, password:values.password})
    // console.log(response)
    if(response.status===1){
      setIsError(true)
      setIsRequestSent(false)
    }
    else{
      const user = response.data.user
      const token = response.data.token
      setIsError(false)
      dispatch(authActions.login({user, token}))
      navigate('/home')
    }
  }
  const formik = useFormik({
    initialValues:formData,
    validationSchema,
    onSubmit:async (values:formInterface)=>await handleSubmit(values)
  })
  return (
    <LoginPageContainer>
      <LoginForm >
        <figure >
          <img src={images.logo} />
        </figure>
        <Typography className='formTitle'>
          Landord Login
        </Typography>
        <form className='form' onSubmit={formik.handleSubmit} >
          <div className='formInput'>
            <label htmlFor="phone">Phone Number</label>
            <input disabled={isRequestSent} className='input' value={formik.values.phone}id='phone' name='phone' type='text'placeholder='e.g 0712345678'onBlur={formik.handleBlur}onChange={formik.handleChange}/>
            {formik.touched.phone && formik.errors.phone &&
              <Typography color='coral' fontSize='.9rem'>{formik.errors.phone}</Typography>
            }
          </div>
          <div className='formInput'>
            <label htmlFor="password">Password</label>
            <input disabled={isRequestSent} className='input' value={formik.values.password} id='password' name='password' type='password'onBlur={formik.handleBlur}onChange={formik.handleChange}/>
            {formik.touched.password && formik.errors.password&&
              <Typography color='coral' fontSize='.9rem'>{formik.errors.password}</Typography>
            }
          </div>
          <>
          {isError&&<Typography textAlign='center' margin='.75rem' color='red'>Invalid phone number or password</Typography>}
          </>
          {/* <div className='keepLoggedInSection'>
            <label>Keep me signed in</label>
              <input 
              checked={formik.values.keepLoggedIn}
              type='checkbox'
              onChange={formik.handleChange}
              name='keepLoggedIn' style={{marginLeft:'1rem'}}/>
          </div> */}
          <Button 
            disabled={isRequestSent} 
            className='button'
            sx={{backgroundColor:isRequestSent?'gray':'#3730a3'}} 
            type='submit'>
              Sign In
          </Button>
        </form>
        <ForgotPassword className='forgotPassword'>
            <Button onClick={()=>navigate('/forgotPassword')}>Forgot password? Click to reset</Button>
        </ForgotPassword>
      </LoginForm>
    </LoginPageContainer>
  )
}
