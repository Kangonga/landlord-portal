import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { MeterContainer } from "./styles";
import { payInColumns, payOutColumns, payinrows, payoutrows } from "./meterTableDataStructure";
import { Box, Typography } from '@mui/material';
import SubMeterTable from '../subMeterTable/SubMeterTable';

export default function MeterDataTables() {
  return (
    <MeterContainer>
      <Box>
        <Typography sx={{textAlign:'center', color:'gray', fontSize:'1.2rem'}}>Payments In</Typography>
        <DataGrid
          rows={payinrows} columns={payInColumns}
          slots={{
              toolbar:GridToolbar
            }}
          autoHeight />
      </Box>
    <Box>
    <Typography sx={{textAlign:'center', color:'gray', fontSize:'1.2rem'}}>Payments Out</Typography>
      <DataGrid rows={payoutrows} columns={payOutColumns} autoHeight
       slots={{
        toolbar:GridToolbar
      }}
      />
    </Box>
    <SubMeterTable />
    </MeterContainer>
  )
}
