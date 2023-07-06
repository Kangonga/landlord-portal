import { useAppDispatch, useAppSelector } from "@/globalHooks";
import { MeterWidget, WidgetsContainer } from "./styles";
import { Autocomplete, TextField } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { meterActions } from "@/features/mainMeterFeatures/meterSlice";

export default function MeterWidgets() {
  const utilityState = useAppSelector((state) => state.utility.data);
  const meterState = useAppSelector((state) => state.meter);
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
  const setActiveMeter = (accNo: string) => {
    console.log("accno", accNo);
    const meter = utilityState.mm.filter((mm) => mm.accNo == accNo)[0];
    dispatch(meterActions.changeActiveMeter(meter));
    console.log("active m,eter", meterState);
  };
  const changeUtil = (value: unknown) => {
    dispatch(meterActions.changeActiveMeter(""));
    setUtil(value as string);
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
        onChange={(_event: SyntheticEvent, value) => changeUtil(value)}
      />
      <Autocomplete
        disablePortal
        sx={{ width: "200px" }}
        id="combo-box"
        value={meterState.accNo}
        options={getMotherMeterIds(util)}
        renderInput={(params) => <TextField {...params} label="Select meter" />}
        noOptionsText="No meter found"
        onChange={(_e, value) => setActiveMeter(value as string)}
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
