import React from 'react';
import { css } from '@emotion/core';
import { RingLoader } from 'react-spinners';

/**
 * Implementation of the { @LoadingSpinnerComp } 
 * This component uses react-spinners RingLoader to display 
 * processing of the Axios request calls to the users
 * Gets the isOpen value from props by the { @InputComp }
*/

const custom = css`
    display: block;
    margin: 0 auto;
`;

const LoadingSpinnerComp = (props) =>{
    const isOpen= props.open
    return(
        isOpen ? (<div style={{textAlign:'center'}}>
                        <RingLoader css={custom} sizeUnit={"px"} size={200} color={'#000851'}/>
                  </div>) : null
    )
}

export default LoadingSpinnerComp;