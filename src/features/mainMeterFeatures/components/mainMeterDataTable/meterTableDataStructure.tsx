import { GridColDef } from "@mui/x-data-grid";

export const payInColumns: GridColDef[] = [
  { field: "meterNo", headerName: "meter No.", width: 150 },
  { field: "date", headerName: "date", width: 100 },
  { field: "paidBy", headerName: "Name", width: 120 },
  { field: "amount", headerName: "Amount", width: 80 },
  //   { field: "units", headerName: "Units", width: 150 },
  { field: "accNo", headerName: "account No.", width: 150 },
  { field: "token", headerName: "token", width: 200 },
  { field: "id", headerName: "txID", width: 150 },
];

interface payOutTableRows {
  id: string;
  date: string;
  agentName: string;
  amount: string;
  txid: string;
}

export const payOutColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 30 },
  { field: "date", headerName: "date", width: 100 },
  { field: "agentName", headerName: "Agent Name", width: 150 },
  { field: "amount", headerName: "Amount", width: 80 },
  { field: "txid", headerName: "TxID", width: 150 },
];

export const payoutrows: payOutTableRows[] = [
  {
    id: "1",
    date: "12/05/23",
    agentName: "jane",
    amount: "300",
    txid: "RG123GG2GH",
  },
  {
    id: "2",
    date: "13/05/23",
    agentName: "dudette",
    amount: "100",
    txid: "RG123GG2GH",
  },
  {
    id: "3",
    date: "14/05/23",
    agentName: "pink",
    amount: "120",
    txid: "RG123GG2GH",
  },
  {
    id: "4",
    date: "15/05/23",
    agentName: "smith",
    amount: "80",
    txid: "RG123GG2GH",
  },
];
