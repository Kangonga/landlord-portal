import { Box, Typography } from '@mui/material'
import MeterDataTables from '../../features/mainMeterFeatures/components/mainMeterDataTable/MeterDataTables'
import MeterWidgets from '../../features/mainMeterFeatures/components/widgets/MeterWidgets'
import { MainMeterContainer } from './styles'
import { Bar, BarChartContainer } from '@/features/buildingFeatures/pages/styles'
import Topbar from '@/shared/topbar/Topbar'

export default function MainMeter() {
  return (
    <Box>
      <Topbar />
       <MainMeterContainer>
        <MeterWidgets />
        <BarChartContainer>
            <Bar />
        </BarChartContainer>
        <Typography fontSize='1.3rem' color='blue' textAlign='center'>Meter Details</Typography>
        <MeterDataTables />
    </MainMeterContainer>
    </Box>
   
  )
}
