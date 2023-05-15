import { GridColDef } from "@mui/x-data-grid"

interface payInTableRows {
    id: string,
    date:string,
    name:string,
    amount:string,
    meterNo:string,
}
export const payInColumns:GridColDef[] = [
    {field:'id', headerName:'ID', width:50},
    {field:'date', headerName:'date', width:100},
    {field:'name', headerName:'Name', width:120},
    {field:'amount', headerName:'Amount', width:80},
    {field:'meterNo', headerName:'M-paya meter no.', width:150},
]
export const payinrows:payInTableRows[] = [
    {id:'1', date:'12/05/23', name:'kev', amount:'300', meterNo:'278121812'},
    {id:'2', date:'13/05/23', name:'doe', amount:'100', meterNo:'278121812'},
    {id:'3', date:'14/05/23', name:'john', amount:'120', meterNo:'278121812'},
    {id:'4', date:'15/05/23', name:'smith', amount:'80', meterNo:'278121812'},
]
interface payOutTableRows {
    id: string,
    date:string,
    agentName:string,
    amount:string,
    txid:string
}

export const payOutColumns:GridColDef[] = [
    {field:'id', headerName:'ID', width:30},
    {field:'date', headerName:'date', width:100},
    {field:'agentName', headerName:'Agent Name', width:150},
    {field:'amount', headerName:'Amount', width:80},
    {field:'txid', headerName:'TxID', width:150},
]

export const payoutrows:payOutTableRows[] = [
    {id:'1', date:'12/05/23', agentName:'jane', amount:'300', txid:'RG123GG2GH'},
    {id:'2', date:'13/05/23', agentName:'dudette', amount:'100', txid:'RG123GG2GH'},
    {id:'3', date:'14/05/23', agentName:'pink', amount:'120', txid:'RG123GG2GH'},
    {id:'4', date:'15/05/23', agentName:'smith', amount:'80', txid:'RG123GG2GH'},
]