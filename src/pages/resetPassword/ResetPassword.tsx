import { FormEvent, useState } from 'react'
import { LoginForm, LoginPageContainer } from '../login/styles'
import { images } from '@/assets'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const handleSubmit = (e:FormEvent)=>{
        e.preventDefault()
        if (confirmPassword===password){
            navigate('/')
        }
        console.log(password)
    }
    return (
    <LoginPageContainer>
        <LoginForm>
            <figure>
                <img src={images.logo} />
            </figure>
            <>{console.log(confirmPassword)}</>
            <Typography className='formTitle'>
                Password Reset
            </Typography>
            <form onSubmit={(e:FormEvent)=>handleSubmit(e)} className='form'>
               <div className='formInput'>
                <label htmlFor="password" >Enter New Password</label>
                <input className='input' name="password"value={password} onChange={(e)=>setPassword(e.target.value)}/>
               </div>
               <div className='formInput'>
                <label htmlFor="confirmPassword" >Confirm Password</label>
                <input className='input' name="confirmPassword"value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
               </div>
               {!(confirmPassword===password)&&
               <div  style={{textAlign:'center',color:'coral', paddingBottom:'.75rem'}}>passwords do not match</div>}
               <Button className='button' type='submit'>Sign In</Button>
            </form>
        </LoginForm>
    </LoginPageContainer>
  )
}
