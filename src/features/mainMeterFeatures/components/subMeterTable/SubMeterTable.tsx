import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { subMeterTableColumns, subMeterTableRows } from './subMeterTableDataStructure'

export default function SubMeterTable() {
  return (
    <Box>
        <Typography textAlign='center' fontSize='1.2rem' color='gray'>M-paya meters Summary</Typography>
        <DataGrid 
            rows={subMeterTableRows}
            columns={subMeterTableColumns}
        />
    </Box>
  )
}
