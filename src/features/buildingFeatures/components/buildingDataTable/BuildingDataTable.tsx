import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useColumns } from "./buildingTableDataStructure";
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
        July 2023 Building summary
      </Typography>
      <DataGrid
        columns={useColumns()}
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
