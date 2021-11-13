import  React, { useState, useContext } from "react";
import { Box, List, ListItemButton, Typography, ListItemText } from '@mui/material';

import { AppContext } from '../../AppContext';
import { dayTheme, nightTheme } from '../../utils/themes';

import MenuDrawer from './MenuDrawer';
import MenuItems from './MenuItems';
import ThemeSwitch from './ThemeSwitch';
import { useEffect } from "react";

export default function Menu(props) {
  const { setTheme } = useContext(AppContext);

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
        {/* <ThemeSwitch 
          onChange={ event => handleTheme(event.target.checked) }
        /> */}
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            { MenuItems.map(item => (
              <ListItemButton 
                disabled={item.disabled}
                href={item.href}
                onClick={event => {
                  if (item.title !== 'Resume') handleClick(event, item.href)
                  else window.open(item.href, '_blank')
                } } 
                key={item.title}
              >
                <ListItemText 
                  disableTypography
                  primary={
                    <Typography 
                      style={{ 
                        letterSpacing: '0.4rem', 
                        fontWeight: 300 
                    }}> 
                      {item.title}
                    </Typography>
                  } 
                />
              </ListItemButton>
            )) }
          </List>
        </Box>
      </MenuDrawer>
    </div>
  );
}
