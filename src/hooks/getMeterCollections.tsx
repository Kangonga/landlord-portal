import { getLast12Months } from "@/features/buildingFeatures/components/buildingBarChart/buildingBarChartDataStructure";
import { motherMeterInterface } from "@/pages/login/interfaces";

export default function useGetMeterCollections(
  currentMonth: string,
  currentYear: string,
  mm: motherMeterInterface
) {
  const paymentMonth = currentMonth.slice(0, 3);
  let collections = 0;
  // const last12months = getLast12Months().months;
  // const current = last12months[0].trim().split("/")[0];
  // console.log(current);
  const sm = mm.sm;
  // console.log("inside get collections");
  // console.log("month", paymentMonth);
  // console.log("year", currentYear);
  // console.log("sub meters", sm);

  for (const submeter of sm) {
    const payments = submeter.payments;
    if (submeter.payments) {
      for (const payment of payments) {
        const month = payment.payTime?.split(" ")[1];
        const year = payment.payTime?.split(" ")[2];
        if (month == paymentMonth && year == currentYear) {
          // console.log("payment equal", payment);
          collections = collections + Number(payment.amount);
          // console.log("collections", collections);
          // console.log("month", month, "paymentMonth", paymentMonth);
        }
      }
    }
  }
  return collections;
}
