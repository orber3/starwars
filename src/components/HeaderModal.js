import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {StyledMenu ,StyledMenuItem,  useStyles} from './HeaderStyles'
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import { Typography } from '@material-ui/core';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" appear="30009900" ref={ref} {...props}  />;
});

export default function HeaderModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button         data-test="menu-button"
 variant="outlined" color="primary" onClick={handleClickOpen}>

<MenuIcon />

Menu      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{""}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
    
        <StyledMenuItem>
          <ListItemIcon data-test="header-links">
          </ListItemIcon>
          <ListItemText  onClick={handleClose} primary={  <Link to={`/movies/`}>
              
           <Typography  style={{textDecoration: 'none'}} color="primary" variant="button">   Movies </Typography> 
              
              </Link>
}/>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>

          </ListItemIcon>
          <ListItemText   onClick={handleClose} primary={         <Link to={`/people/`}>
              
          <Typography color="primary" variant="button">   Characters </Typography>               
              </Link>
}/>        </StyledMenuItem>
     
         



          </DialogContentText>
        </DialogContent>
        <DialogActions>
      
        </DialogActions>
      </Dialog>
    </div>
  );
}