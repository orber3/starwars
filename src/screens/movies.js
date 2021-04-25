import React, { useEffect } from 'react'
import Loader from '../components/Loader'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import TableDisplay from '../components/TableDisplay'
import {GetMovies} from '../components/getData'
import MovieCard from '../components/MovieCard'




const Movies = () => {
    const [movieList , setMovieList] = React.useState('loading')

    const HandleData = (docs) => { 
        const {results} = docs
        setMovieList(results) 
    }
let searchType = 'films/'
  const props = { HandleData, searchType };


    useEffect(() => {
        GetMovies({...props})

    }, [])


    return (
        <>
      {
movieList !=='loading' ? 
<div data-test="movies-div" > 

<Grid className="main" container  spacing={2}>
<Grid item lg={12}>
<Grid container justify="center" spacing={1}>
{movieList.map(movie => (  
        <Grid key = {movie.episode_id} item  >
          <Paper elevation="24" variant='outlined' square='true' >

<MovieCard id={movie.episode_id} upperRight={movie.director} button="show more" show='movie' name = {movie.title} subHeader={movie.release_date} mainText = {movie.opening_crawl} />

          </Paper>
    
</Grid>
          
) ) }
</Grid>
</Grid>
</Grid>




</div>



:
<Loader />


}
        </>
    )



}
export default Movies
