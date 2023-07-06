/* eslint-disable react-hooks/rules-of-hooks */

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getLast12Months } from "@/features/buildingFeatures/components/buildingBarChart/buildingBarChartDataStructure";
import useGetMeterCollections from "@/hooks/getMeterCollections";
import { useAppSelector } from "@/globalHooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = getLast12Months().months;

export function Barchart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Last 12 months meter collections",
      },
    },
  };

  const motherMeters = useAppSelector((state) => state.utility.data.mm);
  const barData = [];
  for (const month of labels) {
    let monthlyCollections = 0;
    const currentMonth = month.split("/")[0].trim();
    const year = String(month.split("/")[1].trim());
    for (const mm of motherMeters) {
      const collections = useGetMeterCollections(currentMonth, year, mm);
      monthlyCollections += collections;
    }
    barData.push({
      collections: monthlyCollections,
      currentMonth,
      year,
    });
  }
  const data = {
    labels,
    datasets: [
      {
        label: "Collections",
        data: barData.map((month) => month.collections),
        backgroundColor: "rgba(55, 99, 132, 0.5)",
      },
      //   {
      //     label: "Dataset 2",
      //     data: [],
      //     backgroundColor: "rgba(53, 162, 235, 0.5)",
      //   },
    ],
  };

  return <Bar options={options} data={data} />;
}
