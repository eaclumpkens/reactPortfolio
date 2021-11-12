import  React from "react";
import { Drawer, Box, Fab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuDrawer(props) {

  return (
    <div style={{ position: "relative", top: 0,}}>
      <React.Fragment key='right'>
        <Box>
          <Fab 
            color='primary'
            size='large'
            style={{ 
              margin: '1rem',
              top: 0,
              left: 0,
              position: 'fixed',
            }}
            onClick={props.onClick}
          >
            <MenuIcon/>
          </Fab>
        </Box>
        <Drawer
          anchor={'right'}
          open={props.open}
          onClose={props.onClose}
        >
          { props.children }
        </Drawer>
      </React.Fragment>
    </div>
  );
};