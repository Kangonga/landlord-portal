import { images } from '@/assets'
import { LoginForm, LoginPageContainer } from './styles'
import { Button, Typography } from '@mui/material'
import { CheckBox } from '@mui/icons-material'

export default function Login() {
  const handleSubmit = ()=>{
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
        <form className='form'>
          <div className='formInput'>
            <label htmlFor="email">Email</label>
            <input id='name' type='email'/>
          </div>
          <div className='formInput'>
            <label htmlFor="password">Password</label>
            <input id='password' type='password'/>
          </div>
          <Button className='button'>Sign In</Button>
          <div className='keepLoggedInSection'>Keep me signed in
              <input type='checkbox' style={{marginLeft:'1rem'}} />
          </div>
        </form>
      </LoginForm>
    </LoginPageContainer>
  )
}
