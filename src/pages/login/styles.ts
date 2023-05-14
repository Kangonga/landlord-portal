import { styled, Button } from '@mui/material';

export const LoginPageContainer = styled('div')(({ })=>({
    background: 'linear-gradient(to bottom, #93c5fd, #70aefc, #5196f9, #357df3, #2563eb)',
    height:'100dvh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}))

export const LoginForm = styled('div')(({})=>({
    backgroundColor:'white',
    borderRadius:'10px',
    display:'flex',
    flexDirection:'column',
    width:'500px',
    height:'max-content',
    padding:'1rem 0',
    'figure':{
        padding:'1rem 0',
        display:'flex',
        justifyContent:'center',
        width:'100%',
        height:'100px',
        'img':{
            height:'60px'
        }
    },
    '.formInput':{
        backgroundColor:'#d1d5db',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'90%',
        margin:'auto',
        padding:'1rem',
        borderRadius:'5px',
        input:{
            height:'2rem',
            fontSize:'1rem',
            outline:'thin'
        },

    },
    '.form':{
        display:'flex',
        flexDirection:'column',
        gap:'2rem',
        padding:'1rem 0',
        button:{
            width:'max-content',
            backgroundColor:'#3730a3',
            padding:'.75rem 1rem',
            color:'white',
            margin:'auto'
        }
    }
}))