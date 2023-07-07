import { GridColDef } from "@mui/x-data-grid";

export const subMeterTableColumns: GridColDef[] = [
  { field: "id", headerName: "meter No.", width: 150 },

  { field: "regDate", headerName: "Registration Date.", width: 150 },
  { field: "lastPayment", headerName: "lastPayment", width: 150 },
];
