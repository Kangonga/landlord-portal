import { styled } from "@mui/material";

export const MeterContainer = styled('div')(({ theme })=>({
    display:'flex',
    flexDirection:'row',
    gap:'1rem',
    padding:'.75rem',
    [(theme.breakpoints.down('lg'))]:{
        flexDirection:'column'
    }
}))