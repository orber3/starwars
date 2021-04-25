import React , {useEffect} from 'react'
import {GetMovies} from '../components/getData'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Loader from '../components/Loader';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
      
    },
    media: {
      height: 140,
    },
    Paper: { 
        marginTop: '20px',
        marginBottom: '20px',

        height: '95%',
        width: '65%',
    },
    HeadLine: { 
marginTop: '10px'   ,
    
    },
    Info: { 
        marginTop: '30px'    ,
        marginLeft: '15px'     
            },
    typ: { 
        marginTop: '10px'    ,
    },
    buttonDiv: { 
            marginTop: '10%',
            marginLeft: '10%',
    },
  });
const MovieInfo = (match) => {
    const classes = useStyles();
    const [planet , setPlanet] = React.useState('loading')

    const HandleData = (docs) => { 
        setPlanet(docs) 
    }
let id = match.match.params.id
let searchType = `planets/${id}/`
const props = { HandleData, searchType };

  useEffect(() => {
    GetMovies({...props})

}, [])

let history = useHistory();



const handlePush =()  => {
 
    history.push(`/people`)
      }

    return (
     <>
     
     {
planet !=='loading' ? 
<div data-test="movie-info-div" > 

<Grid className={classes.root} container >
<Grid container justify="center" >
    <Paper className={classes.Paper}  >
        <Grid item className={classes.HeadLine} > 
<Typography data-test="head" variant="h5"  align="center" className = {classes.HeadLine}> 
    {planet.name}
</Typography>
</Grid>

<Grid container justify="center" > 

{planet.diameter}
</Grid>

<Grid item className={classes.Info}  > 
<Typography variant="body2" color="textSecondary" > 
<strong> population: </strong> {planet.population}
</Typography>

<Typography className={classes.typ}variant="body2" color="textSecondary" > 

<strong> terrain :</strong> {planet.terrain}

</Typography>

<Typography className={classes.typ}variant="body2" color="textSecondary" > 

<strong> rotation period:</strong> {planet.rotation_period}

</Typography>



</Grid >
<Grid container className={classes.buttonDiv} alignItems="flex-end">

<Button id="show-button2" data-test="backButton" onClick ={ (e) => handlePush(e) }> 
Back
<ArrowBackIcon />
  </Button>

</Grid>
</Paper>
</Grid>
</Grid>
</div>
:
<Loader />
}

     </>

    )
}
export default MovieInfo
