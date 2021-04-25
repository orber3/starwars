import React, { useEffect } from 'react'
import Loader from '../components/Loader'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import TableDisplay from '../components/TableDisplay'
import {GetMovies} from '../components/getData'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MovieCard from '../components/MovieCard'
import { Button } from '@material-ui/core';


const People = () => {
    const [dataList , setDataList] = React.useState('loading')
    const [page , setPage] = React.useState(1)

    const HandleData = (docs) => { 
        const {results} = docs
        setDataList(results) 
    }


const handleNext = (e) => { 
    e.preventDefault()
    if(page <= dataList.length)
    setPage(page+1)
}


const handleBack = (e) => { 
    e.preventDefault()
    if(page>1) { 
    setPage(page-1)
    }
}

let searchType = `people/?page=${page}`
  const props = { HandleData, searchType };


    useEffect(() => {
        GetMovies({...props})

    }, [page])


    return (
        <>
      {
dataList !=='loading' ? 
<div data-test="movies-div" > 


<Grid className="main" container  spacing={2}>
<Grid item lg={12}>
<Grid container justify="space-around"  spacing={4}>
{dataList.map(char => (  
        <Grid  key = {char.created} item  >
          <Paper data-test="card" >
<MovieCard id={char.created} upperRight={char.birth_year} name = {char.name} show={char.homeworld} button="Show Home World" subHeader={char.height} mainText = {`skin color: ${char.skin_color}`} />

          </Paper>
    
</Grid>
          
) ) }
</Grid>
</Grid>

<Grid container >
  

  <Grid >

<Button  style={{color: 'white'}} id="prev-button" data-test="prev" onClick = { (e) => handleBack(e) }> 

<ArrowBackIcon color='primary' fontSize="large" />
Previous Page Characters

  </Button>
  </Grid>
  <Grid >

<Button style={{color: 'white'}} id="next-button" data-test="next" onClick = { (e) => handleNext(e) } > 
<ArrowForwardIcon color='primary' fontSize="large"/>
Next Page Characters
  </Button>
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
export default People
