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
import useGetMeterCollections, {
  useGetSubMeterCollections,
} from "@/hooks/getMeterCollections";
import { subMeterInterface } from "@/pages/login/interfaces";
import { motherMeterSliceInterface } from "@/features/mainMeterFeatures/meterSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const labels = getLast12Months().months;

export function MeterBarchart(props: {
  submeter: subMeterInterface;
  motherMeter: motherMeterSliceInterface;
}) {
  const motherMeter = props.motherMeter;
  const submeter: subMeterInterface = props.submeter;
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

  const barData = [];
  if (submeter.meterNo === "all") {
    for (const month of labels) {
      let monthlyCollections = 0;
      const currentMonth = month.split("/")[0].trim();
      const year = String(month.split("/")[1].trim());
      const collections = useGetMeterCollections(
        currentMonth,
        year,
        motherMeter
      );
      monthlyCollections += collections;

      barData.push({
        collections: monthlyCollections,
        currentMonth,
        year,
      });
    }
  } else {
    for (const month of labels) {
      let monthlyCollections = 0;
      const currentMonth = month.split("/")[0].trim();
      const year = String(month.split("/")[1].trim());
      const collections = useGetSubMeterCollections(
        currentMonth,
        year,
        submeter
      );
      monthlyCollections += collections;

      barData.push({
        collections: monthlyCollections,
        currentMonth,
        year,
      });
    }
  }
  const data = {
    labels,
    datasets: [
      {
        label: "Collections",
        data: barData.map((month) => month.collections),
        backgroundColor: "rgba(55, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
