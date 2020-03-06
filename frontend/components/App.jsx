import React from "react";
import GreetingContainer from "./greeting/greeting_container"
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import HomepageContainer from './homepage/homepage_container'
import NavBarContainer from './navbar/navbar_container';
import SplashHeaderContainer from './splash/splash_header_cotainer';
// import 
import Splash from './splash/splash';
import { AuthRoute, ProtectedRoute} from '../util/route_util'
import Modal from "./modal/modal";

const App = () => (
  <div>
    <Modal />

    <header>
      <NavBarContainer />
      {/* <GreetingContainer /> */}
      {/* <AuthRoute component={NavBarContainer} /> */}
      {/* < SplashHeaderContainer /> */}
    </header>

    {/* <Switch> */}

      <AuthRoute exact path="/" component={Splash} />
      {/* <Route path="/home/" component={NavBarContainer} /> */}
        
      <ProtectedRoute exact path="/" component={HomepageContainer} />
      {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />  */}
      
    {/* </Switch> */}
    
  </div>
);

export default App;