// import { useEffect, useState } from "react"

// interface timerProps{
//     duration:number
// }

// export const CustomTimer = ( { duration }:timerProps)=>{
//     const [ timeLeft, setTimeLeft] = useState(duration)
//     console.log('remounted', timeLeft)
//     useEffect(()=>{
//         const timer = setInterval(()=>{
//             if(timeLeft>0){
//                 setTimeLeft(timeLeft-1)
//             }
//         }, 1000)
//         return ()=>clearInterval(timer)
//     },[timeLeft])
//     return(
//         <div>
//             {timeLeft}
//         </div>
//     )
// }
import { Box, Button } from '@mui/material';
import React, { useState } from 'react';

export const ResendCodeButton: React.FC = () => {
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(0);

  const handleClick = () => {
    setDisabled(true);
    setTimer(10);

    const countdown = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    setTimeout(() => {
      setDisabled(false);
      clearInterval(countdown);
    }, 10000);
  };

  return (
    <Box sx={{display:'flex', gap:'.75rem',alignItems:'center'}}>
      <Button onClick={handleClick} disabled={disabled}>
        Resend Code
      </Button>
      {timer > 0 && <span style={{color:'darkgray'}}>{timer} seconds</span>}
    </Box>
  );
};

export default ResendCodeButton;

