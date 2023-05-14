import { styled, Theme, CSSObject } from '@mui/material/styles';
import { ListItem, ListItemProps } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { HTMLAttributes } from 'react';

const drawerWidth = 240;
interface SideBarProps extends ListItemProps {
  open: boolean;
}
interface DrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {
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

export const DrawerHeader = styled('div')<DrawerHeaderProps>(({ open }) => ({
  display: 'flex',
  justifyContent: open?'space-between':'center',
  alignItems: 'center',
  padding: '1rem',
  height:'5.9rem',
  'img':{
    maxWidth:'60%'
  },
}));

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
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
