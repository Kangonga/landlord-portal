import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useUpdatePassword from '@/hooks/useUpdatePassword';
import { useAppSelector } from '@/globalHooks';
import { LoginForm, LoginPageContainer } from '../login/styles';
import { images } from '@/assets';
import { Button, Typography } from '@mui/material';

export default function ResetPassword() {
    const state = useAppSelector(state=>state.auth)
    const token = useAppSelector(state=>state.auth.token)
    const userId = useAppSelector(state=>state.auth.userId)
    console.log('token and id',token,userId)
    console.log('state of the app', state )
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isPasswordChanged, setIsPasswordChanged] = useState(false)
    const handleSubmit = (e:FormEvent)=>{
        e.preventDefault()
        setIsPasswordChanged(true)
        if (confirmPassword===password){(async()=>{
            const response = await useUpdatePassword(userId,password,token)
            console.log('after password update', response)
            navigate('/') 
        })}
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
                <input disabled={isPasswordChanged} className='input' name="password"value={password} onChange={(e)=>setPassword(e.target.value)}/>
               </div>
               <div className='formInput'>
                <label htmlFor="confirmPassword" >Confirm Password</label>
                <input disabled={isPasswordChanged} className='input' name="confirmPassword"value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
               </div>
               {!(confirmPassword===password)&&
               <div  style={{textAlign:'center',color:'coral', paddingBottom:'.75rem'}}>passwords do not match</div>}
               <Button disabled={isPasswordChanged} className='button' type='submit'>Sign In</Button>
            </form>
        </LoginForm>
    </LoginPageContainer>
  )
}
