import * as React from 'react';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Drawer, DrawerHeader, SideBarItem } from './styles';
import { images } from '@/assets';
import { Box, SvgIconProps } from '@mui/material';
import { ElectricMeterOutlined, Home, LiveHelpOutlined, LogoutOutlined, Person3Outlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface sidebarprops {
  open: boolean;
  displayText:string;
  route:string;
  icon: SvgIconProps;
}

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const sidebaritems:sidebarprops[] = [
    {
      displayText:'Dashboard',
      route:'',
      icon:<Home sx={{color:'#f1f2f3'}}/>,
      open:open
    },
    // {
    //   displayText:'Buildings',
    //   route:'buildings',
    //   icon:<BusinessOutlined sx={{color:'#f1f2f3'}}/>,
    //   open:open
    // },
    {
      displayText:'Meters',
      route:'mainMeters',
      icon:<ElectricMeterOutlined sx={{color:'#f1f2f3'}}/>,
      open:open
    },
    {
      displayText:'Help',
      route:'help',
      icon:<LiveHelpOutlined sx={{color:'#f1f2f3'}}/>,
      open:open
    },
    {
      displayText:'Profile',
      route:'profile',
      icon:<Person3Outlined sx={{color:'#f1f2f3'}}/>,
      open:open
    },
  ] 
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}  PaperProps={{sx:{backgroundColor: "#5A57FF", color:'white'}}}>
        <DrawerHeader open={open}>
          {open && <img src={images.logo} alt='M-paya logo' />}
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon style={{color:'#f1f2f3'}} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{display:'flex', flexDirection:'column',justifyContent:'space-between', gap:'2rem'}}>
           <div>
             {sidebaritems.map((sidebaritem, index)=>{
              return (
                <SideBarIcon {...sidebaritem} key={index}/>              )
           })}
          </div>
          <SideBarIcon 
            {...{
              displayText:'Log Out',
              route:'/',
              icon:<LogoutOutlined sx={{color:'#f1f2f3'}}/>,
              open:open
            }}
          />
        </List>
      </Drawer>
      </Box>
  );
}


const SideBarIcon = (props:sidebarprops)=>{
  const navigate = useNavigate()
  return(
    <SideBarItem open={props.open} onClick={():void=>navigate(props.route)}>
      <ListItemButton sx={{mt:props.route==='/logout'?'7rem':''}}>
        <ListItemIcon>
          <>{props.icon}</>
        </ListItemIcon>
        <ListItemText primary={props.displayText} />
      </ListItemButton>
    </SideBarItem>
  )
}