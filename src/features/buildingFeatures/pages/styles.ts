import { styled } from "@mui/material";

export const BarChartContainer = styled('div')(({ theme })=>({
    display:'flex',
    gap:'.4rem',
    flexWrap:'wrap',
    [(theme.breakpoints.down('sm'))]:{
        flexDirection:'column',
    },
    '#barchart':{
        minWidth:"600px"
    }
}))

export const Bar = styled('div')(({ theme })=>({
    height:'500px',
    width:'700px',
    minWidth:'500px',
    backgroundColor:'gray',
    [( theme.breakpoints.down('lg' ))]:{
        width:'100%'
    },
}))