import { Box } from "@mui/material"
import { GridColDef } from "@mui/x-data-grid"

interface subMeterTableInterface {
    id:string,
    subMeterNo:string,
    houseNo:string,
    occupant:string,
    lastPurchaseDate:string
}
export const subMeterTableColumns:GridColDef[] = [
    {field:'id', headerName:'ID', width:50},
    {field:'subMeterNo', headerName:'Sub Meters', width:100,
    renderCell:(params)=>{
      return <Box sx={{':hover':{cursor:'pointer'}}}>
          {params.row.subMeterNo}
      </Box>
  }
    },
    {field:'occupant', headerName:'Occupant', width:120},
    {field:'houseNo', headerName:'House No.', width:80},
    {field:'lastPurchaseDate', headerName:'Last Purchase Date', width:150},
//     {field:'action', headerName:'', width:200,        renderCell:(params)=>{
//       return <Box sx={{padding:'.75rem', backgroundColor:'lightblue', ':hover':{cursor:'pointer'}}}>
//           {params.row.action}
//       </Box>
//   }}
  ]
  export const subMeterTableRows:subMeterTableInterface[]= [
    {id:'1',subMeterNo:'12345678',occupant:'John doe', lastPurchaseDate:'12/05/2022',houseNo:'1',},
    {id:'2',subMeterNo:'56781234',occupant:'jane smith', lastPurchaseDate:'10/02/2023',houseNo:'1',},
    {id:'3',subMeterNo:'19283745',occupant:'peter pan', lastPurchaseDate:'01/04/2023',houseNo:'1',},
    {id:'4',subMeterNo:'19283745',occupant:'unassigned', lastPurchaseDate:'01/04/2023',houseNo:'1',},
  ]