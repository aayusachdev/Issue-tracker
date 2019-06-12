import React, { Fragment } from 'react';
import HeaderComp from './components/HeaderComp';
import InputComp from './components/InputComp';

/** Main { @App } component of the Issue-tracker 
 *  Renders all other reusable components together. 
*/
function App() {
  return (
    <Fragment>
        <HeaderComp/> 
        <InputComp/>
    </Fragment>
  );
}

export default App;
