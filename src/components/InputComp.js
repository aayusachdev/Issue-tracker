import React, { Fragment, Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IssuesBarComp from './IssuesBarComp';
import LoadingSpinnerComp from './LoadingSpinnerComp';
import ErrorModalComp from './ErrorModalComp';
import axios from 'axios';

/* Required for calculating the date-time ISO string values */
var datetime= require('react-datetime');

/**
 * Implementation of the { @InputComp } 
 * This component is used to display the Input field and the corresponding Submit Button.
 * The Repository URL is entered in "https://github.com/:Username/:Repository_name" format.
 * Creates the "https://api.github.com/repos/username/Repository_name" for the GitHub API
 * Makes the Promise-All call to the API, and renders { @IssuesBarComp } or { @ErrorModalComp }
 * depending upon the flag values present in the component state.
 * Passes the issues count object as props to the { @IssuesBarComp } to display the individual issues.
 */

/**
 * Implementation of Custom styling for the StyledButton component.
 * withStyles() higher-order component is injecting a classes property
 * that is used by the Button component.
*/
const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(15deg , #007991, #78ffd6)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin:'3% 43%',
      width: '200px',
      fontSize:'18px',
      boxShadow: '0px 3px 5px 2px rgba(0, 8, 81, 0.3)',
    }
  })(Button);

/**
 * Implementation of Custom styling for the StyledInput component.
 * withStyles() higher-order component is injecting a classes property
 * that is used by the TextField component.
*/
const StyledInput= withStyles({
    root: {
           margin: 'auto',
           width: '99%',
           borderColor: '#78ffd6'
        },
    })(TextField);
    
class InputComp extends Component{
    constructor(props){
        super(props);
        this.state={
            repolink: " ",
            loading: false,   // Flag value, will be true when axios async requests are running
            isPressed: false, // Flag value, will be true to display the IssueBarComp
            isError: false,   // Flag value, will be true in case any error occurs
            issueCount:{      // Issue count object, passed as props to the IssueBarComp
                all: 0,
                last24: 0,
                last7: 0,
                beyond7: 0
            }
        };
        this.onTextChange= this.onTextChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }
    
    /* Input value function for the StyledInput Component */
    onTextChange = (event) => {
        this.setState({
            repolink: event.target.value
        })
   }

   /* Submit function for the StyledButton Component */
   onSubmit(e){
        e.preventDefault();
        /* Calculating last24 hrs and last7 days values in ISO String format for the API requests */
        var yesterday = datetime.moment().subtract( 1, 'day' ).toDate();
        var sevendays = datetime.moment().subtract( 7, 'day' ).toDate();
        var last_24hr= yesterday.toISOString();
        var last_7days= sevendays.toISOString();

        /* Break the input repository url in array format */
        var inputUrlArray= this.state.repolink.split('/');

        /* Url for the GitHub Api, $inputUrlArray[3] contain username, $inputUrlArray[4] contain repository name */
        var apiUrlIssues = `https://api.github.com/repos/${inputUrlArray[3]}/${inputUrlArray[4]}`;
        var all_open_issues, issues_last7days;
        all_open_issues=issues_last7days=0;

        /* Axios async calls to the GitHub API and setting the state */
        this.setState({ loading: true, isPressed: false }, () => {
           axios.all([axios.get(apiUrlIssues,{headers:{'Content-Type': 'application/json'}}),
                    axios.get(`${apiUrlIssues}/pulls`,{headers:{'Content-Type': 'application/json'}}),
                    axios.get(`${apiUrlIssues}/issues?since=${last_24hr}`,{headers:{'Content-Type': 'application/json'}}),
                    axios.get(`${apiUrlIssues}/issues?since=${last_7days}`,{headers:{'Content-Type': 'application/json'}})])
                    /* GET API calls to
                       Issues, -pulls, Issues -using since=last24hrs and since=last7days ISO strings.*/
               .then(axios.spread((firstResponse, secondResponse, thirdResponse, fourthResponse) => {
                    all_open_issues= firstResponse.data["open_issues_count"]-secondResponse.data.length;
                    issues_last7days= fourthResponse.data.length-thirdResponse.data.length;
                    
                     this.setState(state => ({ issueCount: Object.assign({}, state.issueCount, { 
                                    all: all_open_issues,
                                    last24: thirdResponse.data.length,
                                    last7: fourthResponse.data.length-thirdResponse.data.length,
                                    beyond7: all_open_issues-issues_last7days-thirdResponse.data.length
                                   }),
                            isPressed: true,  
                            loading: false, // Flag is set-{false} to indicate completion of async calls and render IssuesBarComp.
                            repolink: ''
                    }));
                }))
                .catch(error => {
                       //console.log(error.message);
                       this.setState({
                            isError: true,  // Flag is set-{true} to render ErrorModal in case any Error occurs.
                            loading: false
                        })
                });
        });      
    }
    render(){
        return(
        <Fragment>
            <br/><br/>
            <StyledInput id="outlined-full-width" label="Repository Link" style={{ margin: 8 }} placeholder="Enter the Github Repository URL"
                         required variant="outlined" onChange={this.onTextChange} value= {this.state.repolink}/>
            <StyledButton type="submit" onClick={this.onSubmit}>
                SUBMIT LINK
            </StyledButton>
            <LoadingSpinnerComp open={this.state.loading} />
            <ErrorModalComp open={this.state.isError}/>
            {this.state.isPressed && !(this.state.loading) && (!this.state.isError) ? <IssuesBarComp issueCount={this.state.issueCount}/> : null }
        </Fragment>
    )}
}
export default InputComp;