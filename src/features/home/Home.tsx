import BuildingWidgets from "@/features/buildingFeatures/components/widgets/BuildingWidgets"
import { Bar, BarChartContainer } from "../buildingFeatures/pages/styles"
import { HomeContainer } from "./styles"
import BuildingStatements from "../buildingFeatures/components/buildingStatements/BuildingStatements"
import BuildingDataTable from "../buildingFeatures/components/buildingDataTable/BuildingDataTable"

export default function Home() {
    return (
      <HomeContainer>
          <BuildingWidgets />
          <BarChartContainer>
            <Bar />
            <BuildingStatements />
          </BarChartContainer>
          <BuildingDataTable />
      </HomeContainer>
  )
}
