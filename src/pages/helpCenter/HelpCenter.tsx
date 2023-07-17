import { Box, Typography } from "@mui/material";
import {
  HelpCenterTopBar,
  HelpCenterContainer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "./styles";
import { SyntheticEvent, useState } from "react";

export default function HelpCenter() {
  return (
    <Box bgcolor="#e0e7ff" minHeight="100dvh">
      <HelpCenterTopBar>
        <Typography sx={{ fontSize: "1.3rem", color: "#6366f1" }}>
          Help Center
        </Typography>
      </HelpCenterTopBar>
      <Typography
        sx={{ textAlign: "center", fontSize: "1.6rem", padding: "2rem" }}
      >
        Frequently asked questions
      </Typography>
      <HelpCenterContainer>
        <CustomizedAccordions />
      </HelpCenterContainer>
    </Box>
  );
}

function CustomizedAccordions() {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (_event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>How does this portal work</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This portal is designed to ensure you can view all the details
            regarding the meters. From the collections for each meter, to the
            details about the meters themselves. <br /> <br />
            <hr />
            <h2>Homepage</h2>
            The homepage is where you view the summary of the data for each
            building. <br />
            The barchart shows the collections for all meter in the particular
            buidling for the last 12 months. If there are meters for different
            utilities, you can select meters based on the utility. <br />
            You can download statements in xls format (MS Excel). The default
            time period is one year, however you can change the time period
            according to your preference from the calendar
            <h2>Main Meter page</h2>
            This is where you can view details for a single meter. <br />
            You can search for a meter based on the utility, of which there are
            three. Electricity, water and gas.
            <br />
            There is a bar graph that shows the collections for the last 12
            months. You can view the collections for a specific meter using the
            drop down menus.
            <br />
            The first table displays all recent collections as they are
            received, including the token number. <br />
            Use the <b>Filter</b> option to search through the data. <br />
            You can also download the table in csv format, using the{" "}
            <b>Export</b> option.
            <br /> <br />
            You will also see a table that shows all active meters under the
            selected account, their registration dates and the last time they
            made a payment.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>How can I contact customer care</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3>Feel free to reach us via the following means.</h3>
            <b>Phone 1:</b> +254 788 940009 <br />
            <b>Phone 2:</b> +254 708 726314 <br />
            <b>E-mail:</b>info@empire.co.ke
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>About M-Paya</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are a leading Kenyan ICT provider offering Managed Services and
            Business Technology Solutions geared at Empowering and Transforming
            Lives. We deliver business value to customers through a combination
            of process excellence, quality frameworks and Service Delivery
            innovation. Our Core Motivation is defining Service Excellence in
            Technology driven business solutions.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
