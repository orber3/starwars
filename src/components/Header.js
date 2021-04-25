import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react'
import HeaderModal from './HeaderModal'
import {Link} from 'react-router-dom'

import {StyledMenu ,StyledMenuItem,  useStyles} from './HeaderStyles'

const Header = () => { 

    const classes = useStyles();


return (
    <div className={classes.root} id='nav' data-test = "header-comp">
    <AppBar style={{backgroundColor: '#f5f5f5' , position: "sticky",  color: 'black'}}  position = "sticky">
      <Toolbar>
<HeaderModal /> 
          </Toolbar>
          </AppBar>
    </div>
)
}

export default Header