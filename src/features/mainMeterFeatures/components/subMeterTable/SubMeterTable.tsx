import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { subMeterTableColumns } from "./subMeterTableDataStructure";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SubMeterTable(props: any) {
  return (
    <Box>
      <Typography textAlign="center" fontSize="1.2rem" color="gray">
        M-paya meters Summary
      </Typography>
      <DataGrid
        rows={props.summaryRow}
        columns={subMeterTableColumns}
        sx={{
          border: "2px solid #cbd5e1",
          width: "max-content",
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
  );
}
