import BuildingWidgets from "@/features/buildingFeatures/components/widgets/BuildingWidgets";
import {
  Bar,
  BarChartContainer,
} from "../../features/buildingFeatures/pages/styles";
import { HomeContainer } from "./styles";
import BuildingStatements from "../../features/buildingFeatures/components/buildingStatements/BuildingStatements";
import BuildingDataTable from "../../features/buildingFeatures/components/buildingDataTable/BuildingDataTable";
import Topbar from "@/shared/topbar/Topbar";
import { Box } from "@mui/material";
import { getDashboardData } from "@/hooks/getDashboardData";
import { useAppDispatch, useAppSelector } from "@/globalHooks";
import { utilityActions } from "@/features/utilitySlice";
import { useEffect } from "react";
import useGetUtilitySummary from "@/hooks/getUtilitySummary";
import { Barchart } from "@/features/buildingFeatures/components/buildingBarChart/buildingBarChart";

export default function Home() {
  const dispatch = useAppDispatch();
  const utilitySummaryRows = useGetUtilitySummary(new Date().getUTCMonth());
  const authState = useAppSelector((state) => state.auth);
  useEffect(() => {
    async function fetchData() {
      const data = await getDashboardData(authState.token, authState.userId);
      if (data?.status == 0) {
        console.log("response data", data);
        dispatch(utilityActions.initialSetUp(data.data));
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box>
      <Topbar />
      <HomeContainer>
        <BuildingWidgets />
        <BarChartContainer>
          <Bar>
            <Barchart />
          </Bar>
          <BuildingStatements />
        </BarChartContainer>
        <BuildingDataTable rows={utilitySummaryRows} />
      </HomeContainer>
    </Box>
  );
}
