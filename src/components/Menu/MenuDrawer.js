import  React from "react";
import { makeStyles } from '@mui/styles'
import { Drawer, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuDrawer(props) {
  const style = useStyles();

  return (
    <div>
      <React.Fragment key='right'>
        <Button onClick={props.onClick}>{<MenuIcon/>}</Button>
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