import React, { Fragment } from 'react';
import IssuesComp from './IssuesComp';
import '../css/style.css';

/**
 * Implementation of the { @IssuesBarComp } 
 * This component is used to display the Individual Issue cards and the corresponding issue values.
 * Uses a flex-container to display the { @IssuesComp } components.
 * Passes the issues count values as props to the { @IssuesComp } to display the individual issue count.
 */
function IssuesBarComp(props) {
return (
    <Fragment>
        <div className="issue-flex-container">
            <IssuesComp className="flex-item" count={props.issueCount.all} title={"ALL OPEN ISSUES"}/>
            <IssuesComp className="flex-item" count={props.issueCount.last24} title={"ISSUES WITHIN 24 HRS"}/>
            <IssuesComp className="flex-item" count={props.issueCount.last7} title={"ISSUES WITHIN 7 DAYS"}/>
            <IssuesComp className="flex-item" count={props.issueCount.beyond7} title={"ISSUES BEYOND 7 DAYS"}/>
        </div>
    </Fragment>
    )
}

export default IssuesBarComp;