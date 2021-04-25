import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types'
import { Movie } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 564,
  },
  media: {
    height: 140,
  },
  item: { 
marginTop: '40px',
marginLeft: '30px',
  },
  title: {
    color: "textSecondary",
    fontSize: 200,
  },
});



  export default function MovieCard(props) {
    const classes = useStyles();
       

let id
if(props.show =='movie' ) {
props.id > 3 ? id = `/movie/${props.id-3}`
: id =`/movies/${props.id+3}`
}


else { 
const link= props.show
const splittedLink = link.split('http://swapi.dev/api')
id=splittedLink[1]
}

  let history = useHistory();

  const handlePush =()  => {
history.push(id)
  }

const upperRight = props.upperRight
const maintext= props.mainText
const name =props.name
const subHeader = props.subHeader
  
  return  (

    <Card className={classes.root}>
       <Grid container > 
       <Grid item sm={6} xs={6}>
          <CardHeader  className={classes.title}
            title={name} 
            subheader={subHeader}
          />  
      </Grid>

      <Grid item className={classes.item}>

      <Typography  variant="body1" color="textSecondary" component="p">
      {upperRight}    
      </Typography>
      </Grid>

      </Grid>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
       
          <Typography variant="body2" color="textSecondary" component="p">
           {maintext}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <div data-test="show-button" > 
                  <Button id="show-button2" data-test="show-button2" onClick ={ (e) => handlePush(e , id) }> {props.button}  </Button></div>
      </CardActions>
    </Card>
  );
}





MovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  upperRight: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,]).isRequired,

  } 