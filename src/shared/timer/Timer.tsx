import { authActions } from '@/features/authentication/authSlice';
import { useAppDispatch, useAppSelector } from '@/globalHooks';
import useResetPassword from '@/hooks/useResetPassword';
import { LoginButtonContainer } from '@/pages/login/styles';
import {  Button } from '@mui/material';
import { useState } from 'react';

interface timerProps {
  setShowError(val:boolean):any
}
export function ResendCodeButton ({setShowError}:timerProps) {
  const dispatch = useAppDispatch()
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isRequestSent, setIsRequestSent] = useState(false)
  const phone = useAppSelector(state=>state.auth.phone)
  const handleClick = () => {
    setDisabled(true);
    setTimer(20);
    setIsRequestSent(true)
    const resendCode = async()=>{
      const response = await useResetPassword(phone)
      if(response.status==0){
        console.log('response type',typeof(response.status))
        dispatch(authActions.updateUserId(response.data.user))
      }
      else{
        setShowError(true)
      }
    }
    resendCode()
    const countdown = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    setTimeout(() => {
      setDisabled(false);
      clearInterval(countdown);
      setIsRequestSent(false)
    }, 20000);
  };

  return (
    <LoginButtonContainer isRequestSent={isRequestSent}>
      <Button onClick={handleClick} disabled={disabled}sx={{color:'white'}}>
        Resend Code
      </Button>
      {timer > 0 && <span style={{color:'darkgray'}}>{timer} seconds</span>}
    </LoginButtonContainer>
  );
};

export default ResendCodeButton;

