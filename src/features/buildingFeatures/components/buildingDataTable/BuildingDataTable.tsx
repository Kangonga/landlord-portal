import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns } from "./buildingTableDataStructure";
import { summaryInterface } from "@/hooks/getUtilitySummary";

export default function BuildingDataTable({
  rows,
}: {
  rows: summaryInterface[];
}) {
  return (
    <Box>
      <Typography
        sx={{ fontSize: "1.2rem", textAlign: "center", color: "gray" }}
      >
        July Building summary
      </Typography>
      <DataGrid
        columns={columns}
        rows={rows}
        slots={{
          toolbar: GridToolbar,
        }}
        sx={{
          height: "max-content",
          overflow: "auto",
          paddingBottom: "1rem",
        }}
      />
    </Box>
  );
}
