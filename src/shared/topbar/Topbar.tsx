import { Autocomplete, Avatar, TextField } from '@mui/material'
import { AvatarContainer, StyledBadge, TopBarContainer } from './styles'
import { useAppDispatch, useAppSelector } from '@/globalHooks'
import { utilityActions } from '@/features/utilitySlice'

function Topbar() {
  const buildings = useAppSelector(state=>state.utility.allBuildings)
  const utilityState = useAppSelector(state=>state.utility)
  const dispatch = useAppDispatch()
  return (
    <TopBarContainer>
      <Autocomplete
        disablePortal
        sx={{ width:'200px' }}
        id="combo-box"
        options={ buildings }
        renderInput={(params) => 
          <TextField {...params} label='Select Building'
          />
        }
        noOptionsText='No buildings found'
        value={utilityState.activeBuilding}
        onChange={(_e, newValue)=>dispatch(utilityActions.updateBuilding(newValue))}
      />
      <AvatarContainer>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt="Landlord image" src="" />
       </StyledBadge>
         <article>
          <span id='name'>John Doe</span>
          <span id='email'>jdoe@mail.com</span>
        </article>
      </AvatarContainer>
    </TopBarContainer>
  )
}

export default Topbar