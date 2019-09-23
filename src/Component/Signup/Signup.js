import React from 'react';
import './Signup.css';
import Huddle from '../Huddle/Huddle';
import companyLogo from '../login/images/logo.png';
import { Link } from 'react-router-dom';
class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            email : '',
            userName : '',
            password : '',
            passwordrep : '',
            formData : [
                {
                    label : 'Email',
                    name : 'email',
                    placeholder : 'Email here..',
                    type : 'email'
                },
                {
                    label : 'Name',
                    name : 'userName',
                    placeholder : 'Name here..',
                    type : 'text'
                },
                {
                    label : 'Password',
                    name : 'password',
                    placeholder : 'Password here..',
                    type : 'password'
                },
                {
                    label : 'Confirm Password',
                    name : 'passwordrep',
                    placeholder : 'Confirm Password..',
                    type : 'password'
                },
            ]
        }
    }
    formHandler = ( event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    submit = () => {
        console.log(this.state);
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
                                        <span className="d-block">Welcome,</span>
                                        <span>It only takes a <span style={{color:"#3AC47D"}}>few seconds</span> to create your account</span></h4>
                                    <div className="divider row"></div>
                                    <div>
                                        
                                        <div className="form-row">
                                            {
                                                this.state.formData.map((element,index) => (
                                                    <div className="col-md-6" key={index}>
                                                        <div className="position-relative form-group">
                                                            <label ><span className="text-danger">*</span> {element.label}</label>
                                                            <input name={element.name} placeholder={element.placeholder} type={element.type} onChange={this.formHandler.bind(this)} className="form-control" />
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            
                                            
                                        </div>
                                        <div className="mt-3 position-relative form-check"><input name="check" id="exampleCheck" type="checkbox" className="form-check-input"/><label for="exampleCheck" className="form-check-label">Accept our <a href="javascript:void(0);">Terms
                                            and Conditions</a>.</label></div>
                                        <div className="mt-4 d-flex align-items-center"><h5 className="mb-0">Already have an account? <Link to='/'>Sign in</Link></h5>
                                            <div className="ml-auto">
                                                <button className="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg" onClick={this.submit.bind(this)}>Create Account</button>
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
export default Signup;