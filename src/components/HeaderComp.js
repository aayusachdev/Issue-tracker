import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

/**
 * Implementation of the { @HeaderComp } 
 * This component is used to display the Application
 * header in the browser window.
 * Uses the @material-ui AppBar which is used for branding, screen titles, navigation, and actions. 
 */

/**
 * Implementation of Custom styling for the StyledAppBar component.
 * withStyles() higher-order component is injecting a classes property
 * that is used by the AppBar component.
*/
const StyledAppBar = withStyles({
    root: {
      background: 'linear-gradient(90deg, #1CB5E0 0%, #000851 100%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      padding: '0 30px',
      boxShadow: '5px 3px 5px 2px rgba(0,8,81,0.3)',
      textAlign:'center',
    }
  })(AppBar);

function HeaderComp() {
    return (
      <StyledAppBar position="static">
      <h1>GITHUB ISSUE TRACKER</h1>
      </StyledAppBar>
    );
  }
  
  export default HeaderComp;