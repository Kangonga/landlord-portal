import { useAppSelector } from "@/globalHooks";
import { BuildingWidget, WidgetsContainer } from "./styles";

export default function BuildingWidgets() {
  const utilityState = useAppSelector((state) => state.utility.data);
  return (
    <WidgetsContainer>
      <BuildingWidget>
        <span id="clientLabel">Client:</span>
        <span id="clientName">{utilityState.Names}</span>
      </BuildingWidget>
      <BuildingWidget>
        <span id="clientLabel">Building Name:</span>
        <span id="clientName">B1</span>
      </BuildingWidget>
      <BuildingWidget>
        <span id="clientLabel">Building location:</span>
        <span id="clientName">Not set</span>
      </BuildingWidget>
    </WidgetsContainer>
  );
}
