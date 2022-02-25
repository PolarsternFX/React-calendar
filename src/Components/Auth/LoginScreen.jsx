
import React from 'react';

import './login.css'

const LoginScreen = () => {
    return (
        <div>
            <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Log In</h3>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="E-mail"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Submit!" 
                            />
                        </div>
                    </form>
                </div>
                <div className="col-md-6 login-form-2">
                    <h3>Sign Up</h3>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="E-Mail"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password" 
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Check Password" 
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit" 
                                className="btnSubmit" 
                                value="Create Account!" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LoginScreen;
