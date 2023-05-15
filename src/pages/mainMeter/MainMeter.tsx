import { Typography } from '@mui/material'
import MeterDataTables from '../../features/mainMeterFeatures/components/mainMeterDataTable/MeterDataTables'
import MeterWidgets from '../../features/mainMeterFeatures/components/widgets/MeterWidgets'
import { MainMeterContainer } from './styles'
import { Bar, BarChartContainer } from '@/features/buildingFeatures/pages/styles'

export default function MainMeter() {
  return (
    <MainMeterContainer>
        <MeterWidgets />
        <BarChartContainer>
            <Bar />
        </BarChartContainer>
        <Typography fontSize='1.3rem' color='blue' textAlign='center'>Meter Details</Typography>
        <MeterDataTables />
    </MainMeterContainer>
  )
}
