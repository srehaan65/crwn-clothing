import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'

const HatsPage=(props)=>{
  console.log(props);
  return(
    <div>
      <h2>HATS PAGE</h2>
    </div>
  );
  
}

function App() {
  return (
    <div>
       {/* <Homepage /> */}
       <Switch>
           <Route exact path="/"  component={Homepage}></Route>
            <Route   path="/hats"  component={HatsPage}></Route>
       </Switch>
    </div>
  );
}

export default App;
