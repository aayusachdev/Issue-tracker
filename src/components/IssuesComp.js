import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

/**
 * Implementation of the { @IssuesComp } 
 * This component uses @material-ui Card and Typography components to 
 * display Issue counts inside cards in Row-direction.
 * Gets the individual issue count as props from the { @IssuesBarComp }
*/

/**
 * Implementation of Custom styling for the Card and Typography components,
 * using makeStyles() Hook API.
*/
const customStyles = makeStyles({
  card: {
   margin: '10px 8px',
  },
  media: {
    height: 140,
    width:200,
    color: '#ffffff',
    textAlign:'center',
    background: 'linear-gradient(15deg, #007991, #78ffd6)',
  },
  content: {
    textAlign:'center',
    color: '#000851'
   }
});

function IssuesComp(props) {
  const classes = customStyles()
  return (
    <Card  className={classes.card}>
        <CardActionArea>
          <Typography className={classes.media}>
              {props.title}
          </Typography>
          <CardContent>
              <Typography className={classes.content} variant="h5" component="h2">
                {props.count}
              </Typography>
          </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default IssuesComp;