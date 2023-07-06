import { Box, Typography } from "@mui/material";
import MeterDataTables from "../../features/mainMeterFeatures/components/mainMeterDataTable/MeterDataTables";
import MeterWidgets from "../../features/mainMeterFeatures/components/widgets/MeterWidgets";
import { MainMeterContainer } from "./styles";
import { BarChartContainer } from "@/features/buildingFeatures/pages/styles";
import Topbar from "@/shared/topbar/Topbar";
import { Barchart } from "@/features/buildingFeatures/components/buildingBarChart/buildingBarChart";

export default function MainMeter() {
  return (
    <Box>
      <Topbar />
      <MainMeterContainer>
        <MeterWidgets />
        <BarChartContainer>
          <Barchart />
        </BarChartContainer>
        <Typography fontSize="1.3rem" color="blue" textAlign="center">
          Meter Details
        </Typography>
        <MeterDataTables />
      </MainMeterContainer>
    </Box>
  );
}
