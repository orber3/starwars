import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
      marginLeft: '15px',
    minWidth: 650,
  },
});

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);


export default function TableDisplay(props, ) {
  const classes = useStyles();
  let history = useHistory();


  const handlePush =(e , movie , movies)  => { 
const id = props.movies.indexOf(movie) + 1
history.push(`/movie/${id}`)
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>LOTR movies</caption>
        <TableHead>
          <StyledTableRow style = {{backgroundColor: 'black'}}>
            <TableCell style = {{ color: 'white'}}>Movies Name  </TableCell>
            <TableCell style ={{ color: 'white'}} align="right">Director </TableCell>
            <TableCell style = {{ color: 'white'}} align="right">Release date</TableCell>
            <TableCell style = {{ color: 'white'}} align="left">opening crawl</TableCell>
            <TableCell  style ={{ color: 'white'}} align="right"></TableCell>

          </StyledTableRow>
        </TableHead>
        <TableBody>
          {props.movies.map((movie) => (
            <StyledTableRow key={movie.title}>
              <TableCell component="th" scope="row">
                {movie.title}
              </TableCell>
              <TableCell align="right">{movie.director}</TableCell>
              <TableCell align="right">{movie.release_date}</TableCell>
              <TableCell align="left">{movie.opening_crawl}</TableCell>
              <TableCell align="right"><div data-test="show-button" > 
                  <Button onClick ={ (e) => handlePush(e , movie) }> Show more  </Button></div></TableCell>
                  
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}