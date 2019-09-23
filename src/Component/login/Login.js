import React from 'react';
import '../login/Login.css';
import { connect } from 'react-redux';
import companyLogo from './images/logo.png';
import Huddle from '../Huddle/Huddle';
import { Link } from 'react-router-dom';
class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            email  :'',
            password : '',
            keepMeLogged : false,
            loginType : '',
            formContent : [
                {
                    label : 'Email',
                    name : 'email',
                    type : 'email',
                    placeholder : 'Email here...',
                },
                {
                    label : 'Password',
                    name : 'password',
                    type : 'password',
                    placeholder : 'Password here...',
                }
            ]
        }
    }
    formHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
        // console.log(this.state);
    }
    
    render(){
        
        return(
            <div className="app-container app-theme-white body-tabs-shadow">
                <div className="app-container">
                    <div className="h-100">
                        <div className="h-100 no-gutters row">
                            <Huddle />
                            <div className="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8">
                                <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
                                    <div className='text-center'>
                                        <img src={companyLogo} className='companylogo mb-4'/>
                                    </div>
                                    
                                    <h4 className="mb-0">
                                        <span className="d-block">Welcome back,</span>
                                        <span>Please sign in to your account.</span></h4>
                                    <h5 className="mt-3">No account? <Link to='/signup' className="text-primary">Sign up now</Link></h5>
                                    <div className="divider row"></div>
                                    <div>
                                        <div className="form-row">
                                            {
                                                this.state.formContent.map((element,index) => (
                                                    <div className="col-md-6" key={index}>
                                                        <div className="position-relative form-group">
                                                            <label>{ element.label }</label>
                                                            <input name={element.name} placeholder={element.placeholder} type={element.type} className="form-control" onChange={this.formHandler.bind(this)} />
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            
                                        </div>
                                        <div className="position-relative form-check"><input name="check" id="exampleCheck" type="checkbox" className="form-check-input"/><label  className="form-check-label">Keep me logged in</label></div>
                                        <div className="divider row"></div>
                                        <div className="d-flex align-items-center">
                                            <div className="ml-auto btn-center">
                                                <button className="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg" onClick={() => this.props.login(this.state)}>Connect to People</button>
                                                <Link to="/forgotpass" className="btn-lg btn btn-link">Recover Password</Link>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapToProps = state => {
    console.log(state);
    // return{
    //     typeOfUser : state.LoginSignUpReducer.typeofUser
    // }
}
const dispatchToProps = dispatch => {
    return{
            login : (inputState) => dispatch({
            type:'LOGIN',
            payload : inputState
        })
        // switchDoctor : () => dispatch ({type:'SIGNUP_DOC'}),
        // createUser : (stateInput) => dispatch({
        //     type : 'CREATE_NEW',
        //     payload : stateInput
        // })
    }
}
export default connect(mapToProps,dispatchToProps)(Login);