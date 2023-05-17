import { styled } from "@mui/material";

export const ProfilePageContainer = styled('div')(({  })=> ({
    display:'flex',
    flexDirection:'column',
    height:'100dvh'
}))

export const ProfileTopSection = styled('div')(({ theme })=> ({
    display:'flex',
    backgroundColor:'#f3f4f6',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    padding:'1rem 3rem',
    '.nameContainer':{
        display:'flex',
        flex:'2',
        alignItems:'center',
        flexDirection:'column',
        gap:'.5rem',
        '.name':{
            fontSize:'1.3rem',
            fontWeight:'bold',
            textAlign:'start',
            width:'150px'
        },
        '.email':{
            fontSize:'1rem',
            color:'#374151',
            textAlign:'start',
            width:'150px'
        }
    },
    [( theme.breakpoints.down('sm') )]:{
        flexDirection:'column'
    }
}))

export const Form = styled('form')(({  })=>({
    width:'65%',
    padding:'1rem 0 1rem 5rem',
    display:'flex',
    flexDirection:'column',
    gap:'1rem',
    '& > div':{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    'input':{
        borderRadius:'10px',
        border:'none',
        outline:'thin',
        backgroundColor:'lightgray',
        height:'3rem',
        width:'300px',
        padding:'.5rem',
        fontSize:'1rem'
    }
}))