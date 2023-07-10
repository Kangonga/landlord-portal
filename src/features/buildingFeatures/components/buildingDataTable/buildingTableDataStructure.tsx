import { meterActions } from "@/features/mainMeterFeatures/meterSlice";
import { useAppDispatch, useAppSelector } from "@/globalHooks";
import { Box } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

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
export const useColumns = () => {
  const utilityState = useAppSelector((state) => state.utility);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const columns: GridColDef[] = [
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
          <div
            onClick={() => {
              const meter = utilityState.data.mm.find(
                (meter) => meter.accNo == params.row.id
              );
              dispatch(meterActions.changeActiveMeter(meter));
              navigate("mainMeters");
            }}
          >
            <Box
              sx={{
                padding: ".75rem",
                backgroundColor: "lightblue",
                "&: hover": { cursor: "pointer", backgroundColor: "#3a86ff" },
              }}
            >
              {params.row.action}
            </Box>
          </div>
        );
      },
    },
  ];
  return columns;
};
