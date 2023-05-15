import { images } from '@/assets'
import { LoginForm, LoginPageContainer } from './styles'
import { Button, Typography } from '@mui/material'
import { useAppSelector } from '@/globalHooks';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function Login() {
  const [formData, setformData] = useState({
    email: '',
    password:'',
    keepLoggedIn: false
  })
  const authState = useAppSelector(state=>state.auth)
  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()
    console.log(formData)
  }
  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    if(e.target.name==='keepLoggedIn'){
      console.log(formData.keepLoggedIn)
       setformData({
        ...formData,
        keepLoggedIn:(!formData.keepLoggedIn)
      })}  
    else setformData({
      ...formData,
      [e.target.name]:e.target.value
    })
    console.log(e.target.name)
    console.log(e.target.value)
  }
  return (
    <LoginPageContainer>
      <LoginForm >
        <figure >
          <img src={images.logo} />
        </figure>
        <Typography className='formTitle'>
          Landord Login
        </Typography>
        <form className='form' onSubmit={handleSubmit} >
          <div className='formInput'>
            <label htmlFor="email">Email</label>
            <input value={formData.email}id='email' name='email' type='email'onChange={handleChange}/>
          </div>
          <div className='formInput'>
            <label htmlFor="password">Password</label>
            <input value={formData.password} id='password' name='password' type='password'onChange={handleChange}/>
          </div>
          {authState.error&&<Typography textAlign='center' margin='.75rem' color='red'>Invalid email or password</Typography>}
          <div className='keepLoggedInSection'>
            <label>Keep me signed in</label>
              <input 
              checked={formData.keepLoggedIn}
              value={String(formData.keepLoggedIn)}
              type='checkbox'
              onChange={handleChange}
              name='keepLoggedIn' style={{marginLeft:'1rem'}}/>
          </div>
          <Button className='button' type='submit'>Sign In</Button>
        </form>
      </LoginForm>
    </LoginPageContainer>
  )
}
