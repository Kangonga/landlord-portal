import { motherMeterSliceInterface } from "@/features/mainMeterFeatures/meterSlice";
import { subMeterInterface } from "@/pages/login/interfaces";

export default function useGetMeterCollections(
  currentMonth: string,
  currentYear: string,
  mm: motherMeterSliceInterface
) {
  const paymentMonth = currentMonth.slice(0, 3);
  let collections = 0;
  const sm = mm.sm;
  for (const submeter of sm) {
    const payments = submeter.payments;
    if (submeter.payments) {
      for (const payment of payments) {
        const month = payment.payTime?.split(" ")[1];
        const year = payment.payTime?.split(" ")[2];
        if (month == paymentMonth && year == currentYear) {
          collections = collections + Number(payment.amount);
        }
      }
    }
  }
  return collections;
}

export function useGetSubMeterCollections(
  currentMonth: string,
  currentYear: string,
  sm: subMeterInterface
) {
  const paymentMonth = currentMonth.slice(0, 3);
  let collections = 0;
  if (sm.payments) {
    for (const payment of sm.payments) {
      const month = payment.payTime?.split(" ")[1];
      const year = payment.payTime?.split(" ")[2];
      if (month == paymentMonth && year == currentYear) {
        collections = collections + Number(payment.amount);
      }
    }
  }
  return collections;
}
