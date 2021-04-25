import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ringImage from "../pics/ring.jpg";
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {StyledMenu ,StyledMenuItem,  useStyles} from './HeaderStyles'
import React  from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {

      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  const classes = useStyles();
  return (
    <div className={classes.root}  data-test = "header-comp">
      <AppBar style={{backgroundColor: '#f5f5f5' , color: 'black'}} position="static">
        <Toolbar>
        <Button
        data-test="menu-button"
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        
        <img src={ringImage} alt="logo" width={"30px"} className={classes.logo} />
</Button>
<StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon data-test="header-links">
          </ListItemIcon>
          <ListItemText primary={          <Link to={`/movies/`}>Movies</Link>
}/>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>

          </ListItemIcon>
          <ListItemText primary="Books" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>

pic
         </ListItemIcon>
          <ListItemText primary="Characters" />
        </StyledMenuItem>
      </StyledMenu>

          <Typography className={classes.title} variant="h6" noWrap>
Star Wars Information Site          </Typography>


          <div  data-test="header-search" className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header


