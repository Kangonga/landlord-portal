import { styled } from '@mui/material';

export const BuildingStatementsContainer = styled('div')(({ theme })=>({
    display:'flex',
    flexDirection:'column',
    gap:'1rem',
    width:'300px',
    height:'400px',
    '#dateHolder': {
        display:'flex',
        flexDirection:'column',
        [( theme.breakpoints.up('sm'))]:{
            flexDirection:'row',
            width:'60dvw',
            padding:'0 1rem',
            justifyContent:'space-between',
        },
        [( theme.breakpoints.up('lg'))]:{
            flexDirection:'column',
            width:'inherit'
        },
    },
    '#customDateHolder':{
        display:'flex',
        flexDirection:'column',
        '&:nth-child(2)':{
            display:'flex',
            flexDirection:'column',
            gap:'.75rem'
        }
    },
    '#defaultDateHolder':{
        display:'flex',
        gap:'.75rem',
        justifyContent:'center',
        [(theme.breakpoints.up('sm'))]:{
            flexDirection:'column',
            paddingTop:'2.5rem',
            justifyContent:'flex-start',
        },
        [(theme.breakpoints.up('lg'))]:{
            flexDirection:'row',
            paddingTop:'0'
        }
    }
}))