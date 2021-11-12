import  React, { useState, useContext } from "react";
import { makeStyles } from '@mui/styles'
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { AppContext } from '../../utils/AppContext';
import MenuDrawer from './MenuDrawer';
import MenuItems from './MenuItems';
import ThemeSwitch from './ThemeSwitch';

export default function Menu(props) {
  const { theme, setTheme } = useContext(AppContext);
  const { onClick } = props;
  const style = useStyles();

  const [ drawer, setDrawer ] = useState(false);

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setDrawer(open);
  };

  const handleTheme = check => { check ? setTheme('night') : setTheme('day') };

  return (
    <div>
      <MenuDrawer 
        open={ drawer } 
        onClick={ toggleDrawer(true) } 
        onClose={ toggleDrawer(false) }
      >
        <ThemeSwitch 
          // checked={theme!=='day'}
          onChange={ event => handleTheme(event.target.checked) }
        />
        <Box
          sx={{ }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            { MenuItems.map(item => (
              <ListItemButton onClick={ () => onClick(item.ref) } key={item.title}>
                <ListItemIcon>{ item.icon }</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
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