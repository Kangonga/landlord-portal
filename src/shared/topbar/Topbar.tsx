import { Container } from '@/shared/components/sharedStyles'
import { Autocomplete, Avatar, TextField } from '@mui/material'
import { AvatarContainer, StyledBadge, TopBarContainer } from './styles'

function Topbar() {
  const buildings = ['Building one', 'Building two', 'Building Three']
  return (
    <TopBarContainer>
      <Autocomplete
        disablePortal
        sx={{ width:'200px' }}
        id="combo-box"
        options={ buildings }
        renderInput={(params) => <TextField {...params} label='Select Building'/> }
        noOptionsText='No meters found'
        defaultValue='Building One'
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