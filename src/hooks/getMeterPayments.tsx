import { getLast12Months } from "@/features/buildingFeatures/components/buildingBarChart/buildingBarChartDataStructure";
import { motherMeterInterface } from "@/pages/login/interfaces";

export default function useGetMeterPayments(
  currentMonth: number,
  currentYear: string,
  mm: motherMeterInterface
) {
  const pastYear = getLast12Months().months;
  // console.log("past year", pastYear);
  let collections = 0;
  // console.log(
  //   "payments, current month and current year, and mothermeter",
  //   currentMonth,
  //   currentYear,
  //   mm
  // );
  if (!mm.payments || mm.payments?.length < 1) {
    return 0;
  }
  // console.log("theres some payments");
  for (const payment of mm.payments) {
    const month = Number(payment.payTime.split(" ")[0].split("-")[1]);
    const year = payment.payTime.split(" ")[0].split("-")[0].slice(-2);
    // console.log("paytime month and year", month, year);
    if (Number(month) === Number(currentMonth) && year == currentYear) {
      // console.log("match", month, currentMonth);

      collections = collections + Number(payment.amount);
    }
  }
  // console.log("payments", collections);
  return collections;
}
