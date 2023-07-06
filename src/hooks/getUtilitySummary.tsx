/* eslint-disable react-hooks/rules-of-hooks */
import { useAppSelector } from "@/globalHooks";
import useGetMeterCollections from "@/hooks/getMeterCollections";
import useGetMeterPayments from "@/hooks/getMeterPayments";
import { subMeterInterface } from "@/pages/login/interfaces";

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
  // let collections = 0;
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
  // const currentMonth = months[new Date().getUTCMonth()].slice(0, 3);
  const currentMonth = months[month];
  // console.log("currentmonth", currentMonth);
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
    const submeters = motherMeter.sm;
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
    // console.log("summary array", summaryArray);
  }
  return summaryArray;
}
