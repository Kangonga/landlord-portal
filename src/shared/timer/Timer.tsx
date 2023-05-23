import { useEffect, useState } from "react"

interface timerProps{
    duration:number
}

export const CustomTimer = ( { duration }:timerProps)=>{
    const [ timeLeft, setTimeLeft] = useState(duration)
    console.log('remounted', timeLeft)
    useEffect(()=>{
        const timer = setInterval(()=>{
            if(timeLeft>0){
                setTimeLeft(timeLeft-1)
                console.log('yow', timeLeft)
            }
        }, 1000)
        return ()=>clearInterval(timer)
    })
    return(
        <div>
            {timeLeft}
        </div>
    )
}
