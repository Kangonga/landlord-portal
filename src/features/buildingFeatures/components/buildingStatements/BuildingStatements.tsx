import { LocalizationProvider } from "@mui/x-date-pickers";
import { BuildingStatementsContainer } from "./styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import { DatePicker } from "@mui/x-date-pickers";

import {
  Autocomplete,
  Box,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  getLastSixMonths,
  getLastThreeMonths,
  getLasttwelveMonths,
} from "@/utils/getStatementPeriods";
import { useAppSelector } from "@/globalHooks";
import getDownloadStatements from "@/hooks/useDownloadStatements";

export default function BuildingStatements() {
  const state = useAppSelector((state) => state);
  // const [isRequestSent, setIsRequestSent] = useState(false);
  const today = dayjs();
  const currentyear = String(new Date().getFullYear()).slice(-2);
  const month = new Date().getMonth() + 1;
  const currentMonth = month > 10 ? String(month) : "0" + String(month);
  console.log("current month and year", currentyear + currentMonth);
  const [date, setdate] = useState({
    from: currentyear + currentMonth,
    to: currentyear + currentMonth,
  });
  const handleDownload = async () => {
    const userId = state.auth.userId;
    const token = state.auth.token;
    const account = state.utility.data.mm[0].accNo;
    const from = date.from;
    const to = date.to;
    console.log("current state", state);
    await getDownloadStatements({ account, userId, token, from, to });
  };
  const handleCustomDateChange = (value: Dayjs, type: string) => {
    const year = String(value.get("year")).slice(-2);
    let monthIndex = value.get("month");
    monthIndex = monthIndex + 1;
    let month = String(monthIndex);
    if (monthIndex < 10) {
      month = "0" + String(monthIndex);
    }
    setdate({
      ...date,
      [type]: year + month,
    });
    console.log("custom date", date);
  };
  const handleDateChange = (value: string) => {
    switch (value) {
      case "This month":
        setdate({
          from: currentyear + currentMonth,
          to: currentyear + currentMonth,
        });
        break;
      case "Last 3 months":
        setdate({
          from: getLastThreeMonths(),
          to: currentyear + currentMonth,
        });
        break;
      case "Last 6 months":
        setdate({
          from: getLastSixMonths(),
          to: currentyear + currentMonth,
        });
        break;
      case "Last 12 months":
        setdate({
          from: getLasttwelveMonths(),
          to: currentyear + currentMonth,
        });
    }
  };
  return (
    <BuildingStatementsContainer>
      <Typography fontSize="1.2rem" textAlign="center" width="100%">
        Download Statements
      </Typography>
      <Box id="dateHolder">
        <Box id="defaultDateHolder">
          <Autocomplete
            disablePortal
            id="combo-box"
            options={[
              "This month",
              "Last 3 months",
              "Last 6 months",
              "Last 12 months",
            ]}
            sx={{ width: "200px" }}
            renderInput={(params) => (
              <TextField {...params} label={"Select period"} />
            )}
            noOptionsText="no period selected"
            defaultValue="This month"
            onChange={(_e, value) => handleDateChange(value as string)}
          />
          <IconButton
            sx={{
              backgroundColor: "#94e0ed",
              fontSize: "1rem",
              borderRadius: "5px",
              height: "max-content",
              padding: "1.2rem 0.75rem",
            }}
            onClick={handleDownload}
          >
            XLS
          </IconButton>
        </Box>
        <Box id="customDateHolder">
          <Typography fontSize="1.2rem" textAlign="center" paddingTop=".75rem">
            Custom date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={"from"}
              views={["month", "year"]}
              maxDate={today}
              onChange={(_e) =>
                _e ? handleCustomDateChange(_e, "from") : null
              }
            />
            <DatePicker
              label={"to"}
              views={["month", "year"]}
              maxDate={today}
              onChange={(_e) => {
                _e ? handleCustomDateChange(_e, "to") : null;
              }}
            />
            <IconButton
              sx={{
                backgroundColor: "#94e0ed",
                fontSize: "1rem",
                borderRadius: "5px",
                width: "50%",
                margin: "auto",
              }}
              onClick={handleDownload}
            >
              XLS
            </IconButton>
          </LocalizationProvider>
        </Box>
      </Box>
    </BuildingStatementsContainer>
  );
}
