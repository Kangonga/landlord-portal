import { images } from '@/assets'
import { ForgotPassword, LoginForm, LoginPageContainer } from './styles'
import { Button, Typography } from '@mui/material'
import { useAppSelector } from '@/globalHooks';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()
  interface formInterface {
    phoneNumber:string,
    password:string,
    keepLoggedIn:boolean
}
  const formData = {
    phoneNumber: '',
    password:'',
    keepLoggedIn: false
  }
  const validationSchema=yup.object().shape({
    phoneNumber: yup.string()
    .matches(/^0[0-9]{9}$/, 'Phone number must start with 0 and have exactly 10 digits')
    .required('Phone number is required'),
    password: yup.string().required('Password is required'),
  })
  const handleSubmit = (values:formInterface)=>{
    console.log(values)
  }
  const formik = useFormik({
    initialValues:formData,
    validationSchema,
    onSubmit:(values:formInterface)=>handleSubmit(values)
  })

  const authState = useAppSelector(state=>state.auth)
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
            <label htmlFor="phoneNumber">Phone Number</label>
            <input className='input' value={formik.values.phoneNumber}id='phoneNumber' name='phoneNumber' type='text'placeholder='e.g 0712345678'onBlur={formik.handleBlur}onChange={formik.handleChange}/>
            {formik.touched.phoneNumber && formik.errors.phoneNumber &&
              <Typography color='coral' fontSize='.9rem'>{formik.errors.phoneNumber}</Typography>
            }
          </div>
          <div className='formInput'>
            <label htmlFor="password">Password</label>
            <input className='input' value={formik.values.password} id='password' name='password' type='password'onBlur={formik.handleBlur}onChange={formik.handleChange}/>
            {formik.touched.password && formik.errors.password&&
              <Typography color='coral' fontSize='.9rem'>{formik.errors.password}</Typography>
            }
          </div>
          <>
          {authState.error&&<Typography textAlign='center' margin='.75rem' color='red'>Invalid email or password</Typography>}
          </>
          <div className='keepLoggedInSection'>
            <label>Keep me signed in</label>
              <input 
              checked={formik.values.keepLoggedIn}
              type='checkbox'
              onChange={formik.handleChange}
              name='keepLoggedIn' style={{marginLeft:'1rem'}}/>
          </div>
          <Button className='button' type='submit'>Sign In</Button>
        </form>
        <ForgotPassword className='forgotPassword'>
            <Button onClick={()=>navigate('/forgotPassword')}>Forgot password? Click to reset</Button>
        </ForgotPassword>
      </LoginForm>
    </LoginPageContainer>
  )
}
