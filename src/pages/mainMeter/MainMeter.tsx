import MeterDataTables from '../../features/mainMeterFeatures/components/mainMeterDataTable/MeterDataTables'
import MeterWidgets from '../../features/mainMeterFeatures/components/widgets/MeterWidgets'
import { MainMeterContainer } from './styles'
import { Bar, BarChartContainer } from '@/features/buildingFeatures/pages/styles'
import SubMeterTable from '@/features/mainMeterFeatures/components/subMeterTable/SubMeterTable'

export default function MainMeter() {
  return (
    <MainMeterContainer>
        <MeterWidgets />
        <BarChartContainer>
            <Bar />
            <SubMeterTable />
        </BarChartContainer>
        <MeterDataTables />
    </MainMeterContainer>
  )
}
