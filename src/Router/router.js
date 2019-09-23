import React from 'react';
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import Login from '../Component/login/Login';
import Signup from '../Component/Signup/Signup';
import Forgotpassword from '../Component/Forgotpassword/Forgotpassword';

class RouterComponent extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' render={() => <Login/>} />
                    <Route exact path='/signup' render={() => <Signup/>} />
                    <Route path='/forgotpass' render={() => <Forgotpassword/> } />
                    {/* <Route exact path='/option/:id' render={() => <LoginOrSignUp/>} />
                    <Route exact path='/doctors' render={() => <Doctor/>} />
                    <Route exact path='/pharmacy' render={() => <Pharmacy/>} /> */}
                </Switch>
            </Router>
        );
    }
}
export default RouterComponent;