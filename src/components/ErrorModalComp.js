import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

/**
 * Implementation of the { @ErrorModalComp } 
 * This component is used to display any Errors or mis-functioning 
 * that occurs while running the application in the browser
 * Takes @open value from the props to render the Modal. 
 */

/* Custom styling for the Error Modal component */
const useStyles = makeStyles({
    media: {
      height: 140,
      width:500,
      background: 'linear-gradient(15deg , #007991, #78ffd6)',
      borderRadius: 4,
      margin: '25% auto',
      boxShadow: '0px 3px 5px 2px rgba(0, 8, 81, 0.3)',
    },
    content: {
      textAlign:'center',
      color: 'white',
      paddingTop: 40,
    }
  });

function ErrorModalComp(props) {

    const classes = useStyles();
    return (
    <div>
      <Modal aria-labelledby="error-box" aria-describedby="error-description" open={props.open} >
        <div className={classes.media}>
          <Typography className={classes.content} variant="h6" id="modal-title">
            SOMETHING WENT WRONG. CHECK YOUR REPOSITORY URL!
          </Typography>
        </div>
      </Modal>
    </div>
  );
}

export default ErrorModalComp;