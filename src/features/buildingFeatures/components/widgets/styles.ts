import { styled } from "@mui/material";

export const WidgetsContainer = styled('div')(({})=>({
    display:'flex',
    gap:'1rem',
    padding:'.75rem',
}))

export const BuildingWidget = styled('div')(({})=>({
    display:'flex',
    gap:'.3rem',
    backgroundColor:'#a5b4fc',
    height: 'max-content',
    padding:'.75rem',
    borderRadius:'5px',
    '#clientLabel':{
        color:'#374151',
        fontWeight:'500'
    },
    '#clientName':{
        fontWeight:'700'
    }
}))