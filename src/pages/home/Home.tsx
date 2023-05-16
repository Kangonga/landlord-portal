import BuildingWidgets from "@/features/buildingFeatures/components/widgets/BuildingWidgets"
import { Bar, BarChartContainer } from "../../features/buildingFeatures/pages/styles"
import { HomeContainer } from "./styles"
import BuildingStatements from "../../features/buildingFeatures/components/buildingStatements/BuildingStatements"
import BuildingDataTable from "../../features/buildingFeatures/components/buildingDataTable/BuildingDataTable"
import Topbar from "@/shared/topbar/Topbar"
import { Box } from "@mui/material"

export default function Home() {
    return (
      <Box>
        <Topbar />
         <HomeContainer>
          <BuildingWidgets />
          <BarChartContainer>
            <Bar />
          <BuildingStatements />
          </BarChartContainer>
          <BuildingDataTable />
      </HomeContainer>
      </Box>
     
  )
}
