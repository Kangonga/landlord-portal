import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { ListItem, ListItemProps } from '@mui/material';
import { HTMLAttributes } from 'react';

const drawerWidth = 240;
interface AppBarProps extends MuiAppBarProps {
    open: boolean;
}
interface SideBarProps extends ListItemProps {
  open: boolean;
}
interface headerProps extends HTMLAttributes<HTMLDivElement> {
  open:boolean
}


export const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});
  
export const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

  
export const Drawer = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })<AppBarProps>(
    ({ theme, open }) => ({
      width: drawerWidth,
      display:'flex',
      flexDirection:'column',
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      minHeight:'100vh',
      backgroundColor:'#5A57FF',
      position:'relative',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
);

export const DrawerHeader = styled('div', {shouldForwardProp: (props) => props !== 'open'})<headerProps>
(({ theme, open }) => ({
  display:'flex',
  height:'75px',
  justifyContent:!open?'center':'space-between',
  padding:'1rem',
  'img':{
    maxWidth:'60%'
  }
}));


export const SideBarItem = styled(ListItem, { shouldForwardProp: (prop) => prop !== 'open' })<SideBarProps>
(({ open })=>({
  display: 'block',
  padding:0,
  ListItemButton:{
    minHeight: 48,
    justifyContent: open ? 'initial' : 'center',
    px: 2.5,
  },
  ListItemIcon: {
    minWidth: 0,
    mr: open ? 3 : 'auto',
    justifyContent: 'center',
  }
}))

