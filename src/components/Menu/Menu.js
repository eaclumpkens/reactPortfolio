import  React, { useState, useEffect  } from "react";
import { makeStyles } from '@mui/styles'
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import MenuDrawer from './MenuDrawer';
import MenuItems from './MenuItems';
import "./Menu.css";

export default function Menu(props) {
  const [ drawer, setDrawer ] = useState(false);
  const style = useStyles();

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setDrawer(open);
  };

  return (
    <div>
      <MenuDrawer 
        open={ drawer } 
        onClick={ toggleDrawer(true) } 
        onClose={ toggleDrawer(false) }
      >
        <Box
          sx={{ }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            { MenuItems.map(item => (
              <ListItem button key={item.title}>
                <ListItemIcon>{ item.icon }</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            )) }
          </List>
        </Box>
      </MenuDrawer>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  navContainer: {
    marginBottom: '10rem'
  },
  logo: {
    borderRadius: '20%'
  }, 
  navLink: {
    color: 'white',
    fontWeight: 400,
    fontSize: '110%',
    letterSpacing: '0.2rem'
  }
}));