import { motherMeterInterface } from "@/pages/login/interfaces";

export default function useGetMeterPayments(
  currentMonth: number,
  currentYear: string,
  mm: motherMeterInterface
) {
  let collections = 0;

  if (!mm.payments || mm.payments?.length < 1) {
    return 0;
  }
  for (const payment of mm.payments) {
    const month = Number(payment.payTime.split(" ")[0].split("-")[1]);
    const year = payment.payTime.split(" ")[0].split("-")[0].slice(-2);
    if (Number(month) === Number(currentMonth) && year == currentYear) {
      collections = collections + Number(payment.amount);
    }
  }
  return collections;
}
