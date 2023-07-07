import { useAppSelector } from "@/globalHooks";

export interface paymentsOut {
  id: string;
  meterNo: string;
  amount: string;
  date: string;
}
export default function useGetMeterPaymentsOut() {
  const activeMeter = useAppSelector((state) => state.meter);
  const payOutArray = [];
  if (activeMeter.payments) {
    for (const payment of activeMeter.payments) {
      const summary: paymentsOut = {
        id: "",
        meterNo: "",
        amount: "",
        date: "",
      };
      summary.id = payment.pId;
      summary.amount = payment.amount;
      summary.meterNo = payment.accNo;
      summary.date = payment.payTime ? payment.payTime.split(" ")[0] : "";
      payOutArray.push(summary);
    }
  }
  return payOutArray;
}
