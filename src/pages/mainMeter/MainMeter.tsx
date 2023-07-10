import { Box } from "@mui/material";
import MeterDataTables from "../../features/mainMeterFeatures/components/mainMeterDataTable/MeterDataTables";
import MeterWidgets from "../../features/mainMeterFeatures/components/widgets/MeterWidgets";
import { MainMeterContainer } from "./styles";
import {
  Bar,
  BarChartContainer,
} from "@/features/buildingFeatures/pages/styles";
import Topbar from "@/shared/topbar/Topbar";
import { MeterBarchart } from "@/features/mainMeterFeatures/components/mainMeterBarChart/meterBarChart";
import { useAppSelector } from "@/globalHooks";

export default function MainMeter() {
  const motherMeter = useAppSelector((state) => state.meter);
  const submeter = motherMeter.activeSubMeter;

  return (
    <Box>
      <Topbar />
      <MainMeterContainer>
        <MeterWidgets />
        <BarChartContainer>
          <Bar>
            <MeterBarchart submeter={submeter} motherMeter={motherMeter} />
          </Bar>
        </BarChartContainer>

        <MeterDataTables />
      </MainMeterContainer>
    </Box>
  );
}
