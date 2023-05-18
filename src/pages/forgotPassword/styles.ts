import { KeyOutlined } from '@mui/icons-material';
import { styled } from '@mui/material';

export const ForgotPasswordForm = styled('div')(({})=>({
    display:'flex',
    textAlign:'center',
    flexDirection:'column',
    backgroundColor:'white',
    borderRadius:'10px',
    form:{
        display:'flex',
        flexDirection:'column',
        gap:'.75rem',
        width:'500px',
        height:'max-content',
        padding:'1rem',
        input:{
            background:'lightgray',
            border:'none',
            borderRadius:'10px',
        }
    }
}))

export const KeyIcon = styled(KeyOutlined)(({})=>({
    width:'100%',
    display:'flex',
    justifyContent:'center',
    color:'#2563eb', 
    height:'60px'
}))