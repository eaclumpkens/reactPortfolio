import  React, { useState, useContext } from "react";
import { makeStyles } from '@mui/styles'
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { AppContext } from '../../utils/AppContext';
import { dayTheme, nightTheme } from '../../utils/themes';

import MenuDrawer from './MenuDrawer';
import MenuItems from './MenuItems';
import ThemeSwitch from './ThemeSwitch';
import { useEffect } from "react";

export default function Menu(props) {
  const { setTheme } = useContext(AppContext);
  const style = useStyles();

  const [ drawer, setDrawer ] = useState(false);
  const [ anchorTarget, setAnchorTarget ] = useState(null);

  useEffect(() => {
    if (anchorTarget) anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start', alignToTop: false });
  }, [anchorTarget])

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setDrawer(open);
  };

  const handleTheme = check => { check ? setTheme(nightTheme) : setTheme(dayTheme) };

  const handleClick = async (event, target) => {
    event.preventDefault();
    setAnchorTarget(document.getElementById(target));
  };

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
              <ListItemButton 
                href={item.href}
                onClick={event => handleClick(event, item.href) } 
                key={item.title}
              >
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