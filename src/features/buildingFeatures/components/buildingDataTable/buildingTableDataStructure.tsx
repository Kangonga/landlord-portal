import { Box } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

interface utilityTableRow {
  id: string;
  mainMeter: string;
  utility: string;
  subMeter: string;
  collections: string;
  paid: string;
  balance: string;
  action: string;
}
export const columns: GridColDef[] = [
  { field: "id", headerName: "Account no.", width: 150 },
  { field: "utility", headerName: "Utility", width: 100 },
  { field: "submeter", headerName: "Meters", width: 120 },
  { field: "collections", headerName: "Gross Collected", width: 120 },
  { field: "paid", headerName: "Amount Paid", width: 120 },
  { field: "balance", headerName: "Balance", width: 80 },
  {
    field: "action",
    headerName: "",
    width: 150,
    renderCell: (params: GridRenderCellParams<utilityTableRow>) => {
      return (
        <Box
          sx={{
            padding: ".75rem",
            backgroundColor: "lightblue",
            ":hover": { cursor: "pointer" },
          }}
        >
          {params.row.action}
        </Box>
      );
    },
  },
];
