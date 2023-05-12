import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { BuildingStatementsContainer } from "./styles";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import { Autocomplete, Box, IconButton, TextField, Typography } from "@mui/material";

export default function BuildingStatements() {
    const today = dayjs()
  return (
    <BuildingStatementsContainer>
        <Typography fontSize='1.2rem' textAlign='center' width='100%'>Download Statements</Typography>
        <Box id='dateHolder'>
            <Box id='defaultDateHolder'>
                <Autocomplete
                    disablePortal
                    id="combo-box"
                    options={['This month','last 3 months','last 6 months', 'This year']}
                    sx={{ width: '200px'}}
                    renderInput={(params) => <TextField {...params} label={'Select period'}/>}
                    noOptionsText='no period selected'
                    defaultValue='This month'
                />
                <IconButton sx={{backgroundColor:'#94e0ed', fontSize:'1rem', borderRadius:'5px', height:'max-content', padding:'1.2rem 0.75rem'}}>
                    XLS
                </IconButton>
            </Box>
            <Box id='customDateHolder'>
                <Typography fontSize='1.2rem' textAlign='center' paddingTop='.75rem'>Custom date</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker label={'from'} views={['day','month', 'year']} />
                    <DatePicker label={'to'} views={['day','month', 'year']} maxDate={today}/>
                    <IconButton sx={{backgroundColor:'#94e0ed', fontSize:'1rem', borderRadius:'5px', width:'50%', margin:'auto'}}>
                        XLS
                    </IconButton>
                </LocalizationProvider>
            </Box>
        </Box>
    </BuildingStatementsContainer>
  )
}
