
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
      
    });

  //   const {setCurrentUser}=this.props;
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       userRef.onSnapshot(snapShot => {
  //        setCurrentUser({
  //             id: snapShot.id,
  //             ...snapShot.data()
  //           }
  //         );

  //         console.log(this.state);
  //       });
  //     }

  //     setCurrentUser({ userAuth });
  //   });
  // }

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();

  }

  render() {
    return (
      <div>
        <Header  currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>({
  setCurrentUser: user=>dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);














// import React,{Component} from 'react';
// import { Switch, Route } from 'react-router-dom'
// import Homepage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component';
// import Header from './components/header/header.component';
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import {auth} from './firebase/firebase.utils'


// class App extends Component {

//   constructor(props){
//     super(props);
//     this.state={
//       currentUser : null
//     }
//   }

//   componentDidMount(){
//     this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
//       this.setState({currentUser:user});
//       console.log(user);
//     })
//   }

//   componentWillUnmount(){
//     this.unsubscribeFromAuth();
//   }


//   unsubscribeFromAuth=null;

//   render(){
//     return (
//       <div>
//         <Header currentUser={this.state.currentUser} />
//         <Switch>
//           <Route exact path="/" component={Homepage}></Route>
//           <Route path="/shop" component={ShopPage}></Route>
//           <Route path="/signIn" component={SignInAndSignUpPage}></Route>
//         </Switch>
//       </div>
//     );
//   }
// }

// export default App;
