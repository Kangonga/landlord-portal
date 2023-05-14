import { Box } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

interface utilityTableRow {
    id: string,
    mainMeter:string,
    utility:string,
    subMeter:string,
    collections:string,
    paid:string,
    balance:string,
    action:string
}
export const columns: GridColDef[] = [
    {field:'id', headerName:'ID', width:50},
    {field:'mainMeter', headerName:'Meter no.', width:100},
    {field:'utility', headerName:'Utility', width:100},
    {field:'subMeter', headerName:'M-Paya Meters', width:120},
    {field:'collections', headerName:'Gross Collected', width:120},
    {field:'paid', headerName:'Amount Paid', width:120},
    {field:'balance', headerName:'Balance', width:80},
    {field:'action', headerName:'', width:150, 
        renderCell:(params:GridRenderCellParams<utilityTableRow>)=>{
            return <Box sx={{padding:'.75rem', backgroundColor:'lightblue', ':hover':{cursor:'pointer'}}}>
                {params.row.action}
            </Box>
        }
    }
]

export  const rows:utilityTableRow[] = [
    {id:'1',mainMeter:'59044016',utility:'electricity', subMeter:'2', collections:'5000',paid:'1200', balance:'1000', action:'view meter details'},
    {id:'2',mainMeter:'59044107',utility:'water', subMeter:'2', collections:'5000',paid:'1200', balance:'1000', action:'view meter details'},
    {id:'3',mainMeter:'69044108',utility:'electricity', subMeter:'2', collections:'5000',paid:'1200', balance:'1000', action:'view meter details'},
  ]