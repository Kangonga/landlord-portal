import { styled } from "@mui/material";

export const BarChartContainer = styled('div')(({ theme })=>({
    display:'flex',

    [(theme.breakpoints.down('sm'))]:{
        flexDirection:'column',
    }
}))