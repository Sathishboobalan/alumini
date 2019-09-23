import React from 'react';
import Huddle from '../Huddle/Huddle';
import companyLogo from '../login/images/logo.png';
import { Link } from 'react-router-dom';

class Forgotpassword extends React.Component{
    constructor(){
        super();
        this.state = {
            formData : [
                {
                    label : 'Email',
                    name : 'email',
                    placeholder : 'Email here..',
                    type : 'email'
                }
            ]
        }
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
                                        <span className="d-block">Forgot your Password?</span>
                                        <span>Use the form below to recover it.</span></h4>
                                    <div className="divider row"></div>
                                    <div>
                                        
                                        <div className="form-row">
                                            {
                                                this.state.formData.map((element,index) => (
                                                    <div className="col-md-12" key={index}>
                                                        <div className="position-relative form-group">
                                                            <label ><span className="text-danger">*</span> {element.label}</label>
                                                            <input name={element.name} placeholder={element.placeholder} type={element.type} className="form-control" />
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            
                                            
                                        </div>
                                        <div className="mt-4 d-flex align-items-center"><h5 className="mb-0"><Link to='/'>Sign in existing account</Link></h5>
                                            <div className="ml-auto">
                                                <button className="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg">Recover password</button>
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
export default Forgotpassword;