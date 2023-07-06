import { useAppSelector } from "@/globalHooks";

export default function useChangeActiveMeter(id: number) {
  const activeUtility = useAppSelector((state) => state.utility);
  const activeMeter = activeUtility.data.mm.find(
    (motherMeter) => motherMeter.mmId == id
  );
  return activeMeter;
}
