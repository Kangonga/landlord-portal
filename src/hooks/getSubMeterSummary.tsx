import { useAppSelector } from "@/globalHooks";

export default function useGetSubMeterSummary() {
  const activeMeter = useAppSelector((state) => state.meter);
  const summaryArr = [];
  if (activeMeter.sm) {
    for (const sm of activeMeter.sm) {
      const summary = {};
      summary.id = sm.meterNo;
      summary.regDate = sm.regDate ? sm.regDate.split(" ")[0] : "not set";
      summary.lastPayment = sm.payments
        ? sm.payments[0].payTime.split(" ").slice(0, 3).join(" ")
        : "no payments made";
      summaryArr.push(summary);
    }
  }
  return summaryArr;
}
