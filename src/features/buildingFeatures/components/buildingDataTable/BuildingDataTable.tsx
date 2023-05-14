import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { columns, rows } from './buildingTableDataStructure'

export default function BuildingDataTable() {
  return (
    <Box>
        <DataGrid 
            columns={columns}
            rows={rows}
            slots={{
                toolbar:GridToolbar
              }}
            sx={{
                height:'max-content',
                overflow:'auto',
                paddingBottom:'1rem'
            }}
        />
    </Box>
  )
}
