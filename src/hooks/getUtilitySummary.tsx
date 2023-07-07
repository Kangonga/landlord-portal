/* eslint-disable react-hooks/rules-of-hooks */
import { useAppSelector } from "@/globalHooks";
import useGetMeterCollections from "@/hooks/getMeterCollections";
import useGetMeterPayments from "@/hooks/getMeterPayments";

export interface summaryInterface {
  id: number;
  utility: string;
  submeter: number;
  collections: number;
  paid: number;
  balance: number;
  action: string;
}
export default function useGetUtilitySummary(month: number) {
  const utilityState = useAppSelector((state) => state.utility.data);
  const summaryArray = [];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear().toString().slice(-2);
  const currentMonth = months[month];
  for (const motherMeter of utilityState.mm) {
    const summary: summaryInterface = {
      id: 0,
      utility: "",
      submeter: 0,
      collections: 0,
      paid: 0,
      balance: 0,
      action: "",
    };
    summary.id = Number(motherMeter.accNo);
    summary.utility = motherMeter.utilityType;
    summary.submeter = motherMeter.sm.length;
    summary.collections = useGetMeterCollections(
      currentMonth,
      currentYear,
      motherMeter
    );
    summary.paid = useGetMeterPayments(
      month + 2,
      String(new Date().getFullYear()).slice(-2),
      motherMeter
    );
    summary.balance = Number(summary.collections) - Number(summary.paid);
    summary.action = "View meter details";
    summaryArray.push(summary);
  }
  return summaryArray;
}
