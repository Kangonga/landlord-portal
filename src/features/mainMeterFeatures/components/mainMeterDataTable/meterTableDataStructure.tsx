import { GridColDef } from "@mui/x-data-grid";

export const payInColumns: GridColDef[] = [
  { field: "meterNo", headerName: "meter No.", width: 150 },
  { field: "date", headerName: "date", width: 100 },
  { field: "paidBy", headerName: "Name", width: 120 },
  { field: "amount", headerName: "Amount", width: 80 },
  { field: "accNo", headerName: "account No.", width: 150 },
  { field: "token", headerName: "token", width: 200 },
  { field: "id", headerName: "txID", width: 150 },
];

export const payOutColumns: GridColDef[] = [
  { field: "meterNo", headerName: "meterNo", width: 130 },

  {
    field: "id",
    headerName: "",
    width: 0,

    renderCell: () => {
      return <div style={{ display: "none" }}></div>;
    },
  },
  { field: "date", headerName: "date", width: 100 },
  { field: "amount", headerName: "Amount", width: 150 },
];
