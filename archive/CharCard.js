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
import swapiModule from '../swapi'

const useStyles = makeStyles({
  table: {
      marginLeft: '15px',
    // minWidth: 100,
  },
});

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);


export default function TableDisplay(props) {
  const classes = useStyles();
  let history = useHistory();

//   const handlePush =(e , movie , movies)  => { 
// const id = props.movies.indexOf(movie) + 1
// history.push(`/movie/${id}`)
//   }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <StyledTableRow style = {{backgroundColor: 'black'}}>
            <TableCell style = {{ color: 'white'}}>Character  Name  </TableCell>
            <TableCell style ={{ color: 'white'}} align="right">Director </TableCell>
            <TableCell style = {{ color: 'white'}} align="right">Release date</TableCell>
            <TableCell style = {{ color: 'white'}} align="left">opening crawl</TableCell>
            <TableCell  style ={{ color: 'white'}} align="right"></TableCell>

          </StyledTableRow>
        </TableHead>
        <TableBody>
          {props.chars.map((char) => (

            <StyledTableRow >
              <TableCell component="th" scope="row">
{
    swapiModule.getFilm('0')

}              </TableCell>
           
                  {/* <Button onClick ={ (e) => handlePush(e , movie) }> Show more  </Button></div></TableCell> */}
                  
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}