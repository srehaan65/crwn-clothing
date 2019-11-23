import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'


function App() {
  return (
    <div>
       {/* <Homepage /> */}
       <Switch>
           <Route exact path="/"  component={Homepage}></Route>
            <Route   path="/shop"  component={ShopPage}></Route>
       </Switch>
    </div>
  );
}

export default App;
