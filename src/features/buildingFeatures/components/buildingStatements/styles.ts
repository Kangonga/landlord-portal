import { styled } from '@mui/material';

export const BuildingStatementsContainer = styled('div')(({ theme })=>({
    display:'flex',
    flexDirection:'column',
    gap:'1rem',
    width:'max-content',
    height:'400px',
    flexWrap:'wrap',
    [( theme.breakpoints.up('sm'))]:{
        width:'100%',
    },
    [( theme.breakpoints.up('lg'))]:{
        width:'inherit'
    },
    '#dateHolder': {
        display:'flex',
        flexDirection:'column',
        [( theme.breakpoints.up('sm'))]:{
            flexDirection:'row',
            width:'100%',
            padding:'0 1rem',
            justifyContent:'space-between',
        },
        [( theme.breakpoints.up('lg'))]:{
            flexDirection:'column',
            width:'inherit'
        },
        // [( theme.breakpoints.down('md'))]:{
        //     flexDirection:'column',
        //     width:'max-content',
        // },
    },
    '#customDateHolder':{
        display:'flex',
        flexDirection:'column',
        minWidth:'200px',
        '&:nth-child(2)':{
            display:'flex',
            flexDirection:'column',
            gap:'.75rem'
        },
        [( theme.breakpoints.up('sm'))]:{
            marginLeft:'1.2rem'
        },
        [( theme.breakpoints.up('lg'))]:{
            marginLeft:'0'
        },
    },
    '#defaultDateHolder':{
        display:'flex',
        gap:'.75rem',
        justifyContent:'center',
        [(theme.breakpoints.up('sm'))]:{
            flexDirection:'row',
            paddingTop:'2.5rem',
            justifyContent:'flex-start',
        },
        [(theme.breakpoints.up('lg'))]:{
            flexDirection:'row',
            paddingTop:'0'
        }
    }
}))