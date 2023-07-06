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
// import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { utilityActions } from "@/features/utilitySlice";
import { useEffect } from "react";
import useGetUtilitySummary from "@/hooks/getUtilitySummary";
import { Barchart } from "@/features/buildingFeatures/components/buildingBarChart/buildingBarChart";

export default function Home() {
  // const navigate = useNavigate();
  // const auth = useAppSelector((state) => state.auth);
  const utility = useAppSelector((state) => state.utility);
  const dispatch = useAppDispatch();
  const utilitySummaryRows = useGetUtilitySummary(new Date().getUTCMonth());

  useEffect(() => {
    async function fetchData() {
      const data = await getDashboardData();
      if (data?.status == 0) {
        dispatch(utilityActions.initialSetUp(data));
      }
    }
    fetchData();
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
