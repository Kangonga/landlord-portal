import { useAppDispatch, useAppSelector } from "@/globalHooks";
import { MeterWidget, WidgetsContainer } from "./styles";
import { Autocomplete, TextField } from "@mui/material";
import { utilityActions } from "@/features/utilitySlice";
import { SyntheticEvent, useState } from "react";

export default function MeterWidgets() {
  const utilityState = useAppSelector((state) => state.utility.data);
  const dispatch = useAppDispatch();
  const [util, setUtil] = useState("all");
  console.log(util);
  const getMotherMeterIds = (utility: string) => {
    if (utility === "all") {
      return utilityState.mm.map((mm) => mm.accNo);
    }
    return utilityState.mm
      .filter((mm) => mm.utilityType === utility)
      .map((mm) => mm.accNo);
  };
  const getSubMeters = () => {
    if (util === "all") {
      return utilityState.mm.map((mm) => mm.sm.map((sm) => sm.meterNo));
    }
    return utilityState.mm
      .filter((mm) => mm.utilityType === util)
      .map((mm) => mm.sm.map((sm) => sm.meterNo));
  };

  return (
    <WidgetsContainer>
      <MeterWidget>
        <span id="clientLabel">Client:</span>
        <span id="clientName">{utilityState.Names}</span>
      </MeterWidget>
      <MeterWidget>
        <span id="clientLabel">Building Name:</span>
        <span id="clientName">{"B1"}</span>
      </MeterWidget>
      <Autocomplete
        disablePortal
        sx={{ width: "200px" }}
        id="combo-box"
        options={["elec", "water", "all"]}
        renderInput={(params) => (
          <TextField {...params} label="Select utility" />
        )}
        value={util}
        noOptionsText="No meter found"
        onChange={(event: SyntheticEvent, value) => setUtil(value as string)}
      />
      <Autocomplete
        disablePortal
        sx={{ width: "200px" }}
        id="combo-box"
        options={getMotherMeterIds(util)}
        renderInput={(params) => <TextField {...params} label="Select meter" />}
        noOptionsText="No meter found"
      />
      <Autocomplete
        disablePortal
        sx={{ width: "200px" }}
        id="combo-box"
        options={[...String(getSubMeters()).split(","), "all"]}
        renderInput={(params) => (
          <TextField {...params} label="Select m-paya meter" />
        )}
        noOptionsText="No meter found"
      />
    </WidgetsContainer>
  );
}
