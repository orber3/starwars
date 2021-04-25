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
    const [movieList , setMovieList] = React.useState('loading')

    const HandleData = (docs) => { 
        setMovieList(docs) 
    }
let id = match.match.params.id
let searchType = `films/${id}/`
const props = { HandleData, searchType };

  useEffect(() => {
    GetMovies({...props})

}, [])

let history = useHistory();



const handlePush =()  => {
 
    history.push(`/movies`)
      }

    return (
     <>
     
     {
movieList !=='loading' ? 
<div data-test="movie-info-div" > 

<Grid className={classes.root} container >
<Grid container justify="center" >
    <Paper className={classes.Paper}  >
        <Grid item className={classes.HeadLine} > 
<Typography data-test="head" variant="h5"  align="center" className = {classes.HeadLine}> 
    {movieList.title}
</Typography>
</Grid>

<Grid container justify="center" > 

{movieList.release_date}
</Grid>

<Grid item className={classes.Info}  > 
<Typography variant="body2" color="textSecondary" > 
<strong> Director: </strong> {movieList.director}
</Typography>

<Typography className={classes.typ}variant="body2" color="textSecondary" > 

<strong> Opening Crawl:</strong> {movieList.opening_crawl}

</Typography>

<Typography className={classes.typ}variant="body2" color="textSecondary" > 

<strong> Producers:</strong> {movieList.producer}

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
