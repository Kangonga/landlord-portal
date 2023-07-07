import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { MeterContainer } from "./styles";
import {
  payInColumns,
  payOutColumns,
  payoutrows,
} from "./meterTableDataStructure";
import { Box, Typography } from "@mui/material";
import SubMeterTable from "../subMeterTable/SubMeterTable";
import { useAppSelector } from "@/globalHooks";
import useGetMeterUtilitySummary from "@/hooks/getMeterUtilitySummary";

export default function MeterDataTables() {
  const activeMeter = useAppSelector((state) => state.meter);
  let rows = useGetMeterUtilitySummary();
  if (
    activeMeter.accNo == "none" ||
    activeMeter.accNo == "none selected" ||
    activeMeter.accNo == "select a meter"
  ) {
    rows = [];
  }
  return (
    <MeterContainer>
      <Box>
        <Typography
          sx={{ textAlign: "center", color: "gray", fontSize: "1.2rem" }}
        >
          Payments In
        </Typography>
        <DataGrid
          rows={rows}
          columns={payInColumns}
          slots={{
            toolbar: GridToolbar,
          }}
          sx={{
            border: "2px solid #cbd5e1",
          }}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 50]}
          autoHeight
        />
      </Box>
      <Box>
        <Typography
          sx={{ textAlign: "center", color: "gray", fontSize: "1.2rem" }}
        >
          Payments Out
        </Typography>
        <DataGrid
          rows={payoutrows}
          columns={payOutColumns}
          autoHeight
          sx={{
            border: "2px solid #cbd5e1",
          }}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
      <SubMeterTable />
    </MeterContainer>
  );
}
