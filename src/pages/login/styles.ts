import { styled } from '@mui/material';

export const LoginPageContainer = styled('div')(({ })=>({
    background: 'linear-gradient(to bottom, #93c5fd, #70aefc, #5196f9, #357df3, #2563eb)',
    height:'100dvh',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
}))

export const LoginForm = styled('div')(({ theme })=>({
    backgroundColor:'white',
    borderRadius:'10px',
    display:'flex',
    flexDirection:'column',
    gap:'.5rem',
    width:'500px',
    height:'max-content',
    padding:'1rem 0',
    [(theme.breakpoints.down('sm'))]:{
        width:'90%'
    },
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
    '.formTitle':{
        textAlign:'center',
        color:'#3730a3',
        fontSize:'2rem',
        fontWeight:'700'
    },
    '.formInput':{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'flex-start',
        width:'90%',
        margin:'auto',
        padding:'.5rem 1rem',
        borderRadius:'5px',
        gap:'.5rem',
        label:{
            fontSize:'.9rem'
        },
        '.input':{
            backgroundColor:'#d1d5db',
            height:'2.5rem',
            fontSize:'1rem',
            outline:'thin',
            width:'100%',
            borderRadius:'5px',
            border:'1px solid gray',
            padding:'.5rem'
        },

    },
    '.form':{
        display:'flex',
        flexDirection:'column',
        button:{
            width:'max-content',
            backgroundColor:'#3730a3',
            padding:'.75rem 1.1rem',
            color:'white',
            margin:'auto'
        }
    },
    '.keepLoggedInSection':{
        paddingBottom:'.75rem',
        textAlign:'center',
        display:'flex', 
        justifyContent:'center'
    }
}))
export const ForgotPassword = styled('div')(({})=>({
    textAlign:'center',
    paddingTop:'.75rem',
    button:{
        fontSize:'.8rem',
        textDecoration:'underline'
    }
}))