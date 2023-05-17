import { Box, Typography } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { subMeterTableColumns, subMeterTableRows } from './subMeterTableDataStructure'

export default function SubMeterTable() {
  return (
    <Box>
        <Typography textAlign='center' fontSize='1.2rem' color='gray'>M-paya meters Summary</Typography>
        <DataGrid 
            rows={subMeterTableRows}
            columns={subMeterTableColumns}
            sx={{
              border:'2px solid #cbd5e1'
            }}
            slots={{
              toolbar:GridToolbar
            }}
        />
    </Box>
  )
}
