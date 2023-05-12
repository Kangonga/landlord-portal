import Badge from '@mui/material/Badge';
import { styled } from '@mui/material';

export const TopBarContainer = styled('div')(({  }) => ({
    display:'flex',
    padding:'1.2rem',
    justifyContent:'space-between',
    backgroundColor:'#eef2ff'

}))

export const AvatarContainer = styled('div')(({ theme }) => ({
    display:'flex',
    gap:'.75rem',
    alignItems:'center',
    'article':{
        display:'flex',
        flexDirection:'column',
        '#name':{
            fontWeight:'bold',
        },
        [( theme.breakpoints.down('sm') )]:{
          display:'none'
        }
    }
}))


export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
