import { useAppSelector } from "@/globalHooks";

export interface meterTableRow {
  meterNo: string;
  date: string;
  paidBy: string;
  amount: string;
  units: string;
  accNo: string;
  token: string;
  id: string;
}

export default function useGetMeterUtilitySummary() {
  const activeMeter = useAppSelector((state) => state.meter);
  const summaryArray = [];

  if (activeMeter.accNo == "none" || activeMeter.accNo == "all") {
    return [];
  }
  for (const submeter of activeMeter.sm) {
    if (submeter.payments && submeter.payments.length > 0) {
      for (const payment of submeter.payments) {
        const summaryRow: meterTableRow = {
          meterNo: "",
          date: "",
          paidBy: "",
          amount: "",
          units: "",
          accNo: "",
          token: "",
          id: "",
        };
        summaryRow.meterNo = payment.smNo;
        summaryRow.amount = payment.amount == null ? "" : payment.amount;
        summaryRow.date = payment.payTime.split(" ").slice(0, 3).join(" ");
        summaryRow.token = payment.token == null ? "" : payment.token;
        summaryRow.accNo = activeMeter.accNo;
        summaryRow.paidBy = payment.payer == null ? "" : payment.payer;
        summaryRow.id = payment.txId;
        summaryArray.push(summaryRow);
      }
    }
  }
  return summaryArray;
}
