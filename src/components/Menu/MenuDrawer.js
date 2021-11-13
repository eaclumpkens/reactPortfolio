import  React from "react";
import { makeStyles } from '@mui/styles'
import { Drawer, Box, Fab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuDrawer(props) {
  const style = useStyles();

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
          PaperProps={{ sx: { 
            backgroundColor: 'primary.main', 
            color: 'primary.light',
          }}}
          classes={{ paper: style.box }}
        >
          { props.children }
        </Drawer>
      </React.Fragment>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  box: {
    background: theme.palette.primary.dark 
  }
}));