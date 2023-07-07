import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { MeterContainer } from "./styles";
import { payInColumns, payOutColumns } from "./meterTableDataStructure";
import { Box, Typography } from "@mui/material";
import SubMeterTable from "../subMeterTable/SubMeterTable";
import { useAppSelector } from "@/globalHooks";
import useGetMeterUtilitySummary from "@/hooks/getMeterUtilitySummary";
import useGetMeterPaymentsOut from "@/hooks/getMeterPaymentsOut";
import useGetSubMeterSummary from "@/hooks/getSubMeterSummary";

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
  const payOutRows = useGetMeterPaymentsOut();
  const subMeterSummary = useGetSubMeterSummary();
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
          rows={payOutRows}
          columns={payOutColumns}
          autoHeight
          sx={{
            border: "2px solid #cbd5e1",
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Box>
      <SubMeterTable summaryRow={subMeterSummary} />
    </MeterContainer>
  );
}
