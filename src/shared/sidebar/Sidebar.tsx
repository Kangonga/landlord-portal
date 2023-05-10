import * as React from 'react';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {  Drawer, DrawerHeader, SideBarItem } from './styles';
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import { AccountBalanceOutlined, BusinessOutlined, ElectricMeterOutlined, Person3 } from '@mui/icons-material'
import { images } from '@/assets';
import { ListItemButton, SvgIconProps } from '@mui/material';


interface sidebarprops {
  open: boolean;
  displayText:string;
  route:string;
  icon: SvgIconProps;
}

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const sidebaritems:sidebarprops[] = [
    {
      displayText:'Dashboard',
      route:'/',
      icon:<HomeIcon sx={{color:'#f1f2f3'}}/>,
      open:open
    },
    {
      displayText:'Buildings',
      route:'/buildings',
      icon:<BusinessOutlined sx={{color:'#f1f2f3'}}/>,
      open:open
    },
    {
      displayText:'Main Meters',
      route:'/mainMeters',
      icon:<ElectricMeterOutlined sx={{color:'#f1f2f3'}}/>,
      open:open
    },
    {
      displayText:'Profile',
      route:'/profile',
      icon:<Person3 sx={{color:'#f1f2f3'}}/>,
      open:open
    },
    {
      displayText:'Statements',
      route:'/statements',
      icon:<AccountBalanceOutlined sx={{color:'#f1f2f3'}}/>,
      open:open
    }
  ]

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer open={open}>
        <DrawerHeader open={open}>
          {open && <img src={images.logo} alt='M-paya logo' />}
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon style={{color:'#f1f2f3'}} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <>
            {sidebaritems.map((sidebaritem, index)=>{
              return (
                <SideBarIcon {...sidebaritem} key={index}/>              )
            })}
          </>
        </List>
      </Drawer>
    </div>
  );
}

const SideBarIcon = (props:sidebarprops)=>{
  const navigate = useNavigate()
  return(
    <SideBarItem open={props.open} onClick={():void=>navigate(props.route)}>
      <ListItemButton>
        <ListItemIcon>
          <>{props.icon}{console.log(`change state ${props.open}`)}</>
        </ListItemIcon>
        <ListItemText primary={props.displayText} />
      </ListItemButton>
    </SideBarItem>
  )
}