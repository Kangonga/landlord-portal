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
// import * as faker from "faker";
import { getLast12Months } from "@/features/buildingFeatures/components/buildingBarChart/buildingBarChartDataStructure";
import useGetMeterCollections from "@/hooks/getMeterCollections";
import { useAppSelector } from "@/globalHooks";
// import faker from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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

const labels = getLast12Months().months;

export function Barchart() {
  const motherMeters = useAppSelector((state) => state.utility.data.mm);
  const barData = [];
  for (const month of labels) {
    let monthlyCollections = 0;
    const currentMonth = month.split("/")[0].trim();
    const year = String(month.split("/")[1].trim());
    for (const mm of motherMeters) {
      const collections = useGetMeterCollections(currentMonth, year, mm);
      //   console.log("collections for mothermeter", mm);
      //   console.log("collections for period", currentMonth, year);
      //   console.log("collections total value is", collections);
      monthlyCollections += collections;
    }
    barData.push({
      collections: monthlyCollections,
      currentMonth,
      year,
    });
  }
  console.log(barData);
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
