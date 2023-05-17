import { useAppSelector } from '@/globalHooks'
import { MeterWidget, WidgetsContainer } from './styles'
import { Autocomplete, TextField } from '@mui/material'

export default function MeterWidgets() {
const activeBuildingDetails = useAppSelector(state=>state.utility.activeBuilding)
console.log('active building', activeBuildingDetails)
  return (
        <WidgetsContainer>
            <MeterWidget>
                    <span id='clientLabel'>Client:</span>
                    <span id='clientName'>John Doe</span>
            </MeterWidget>
            <MeterWidget>
                    <span id='clientLabel'>Building Name:</span>
                    <span id='clientName'>{activeBuildingDetails.label}</span>
            </MeterWidget>
            <Autocomplete
                disablePortal
                sx={{ width:'200px' }}
                id="combo-box"
                options={ ['elec','water','all meters'] }
                renderInput={(params) => 
                <TextField {...params} label='Select utility'
                />
                }
                noOptionsText='No meter found'
           />
            <Autocomplete
                disablePortal
                sx={{ width:'200px' }}
                id="combo-box"
                options={ ['123134421','873243432','all meters'] }
                renderInput={(params) => 
                <TextField {...params} label='Select meter'
                />
                }
                noOptionsText='No meter found'
           />
           <Autocomplete
                disablePortal
                sx={{ width:'200px' }}
                id="combo-box"
                options={ ['123134421','873243432','all m-paya meters'] }
                renderInput={(params) => 
                <TextField {...params} label='Select m-paya meter'
                />
                }
                noOptionsText='No meter found'
           />
        </WidgetsContainer>
   )
}
