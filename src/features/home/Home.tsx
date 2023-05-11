import BuildingWidgets from "@/features/buildingFeatures/components/widgets/BuildingWidgets"
import { Bar, BarChartContainer } from "../buildingFeatures/pages/styles"
import { HomeContainer } from "./styles"
import BuildingStatements from "../buildingFeatures/components/buildingStatements/BuildingStatements"

export default function Home() {
    return (
      <HomeContainer>
          <BuildingWidgets />
          <BarChartContainer>
            <Bar />
            <BuildingStatements />
          </BarChartContainer>
      </HomeContainer>
  )
}
