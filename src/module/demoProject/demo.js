import React, { Component } from "react";
import { connect } from "react-redux";
import demoAction from "../../core/demo_redux/demoAction";
import { DemoWrapper } from "./demoWrapper";
import { Redirect } from "react-router-dom"
class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData: {},
            login: true,
            loading: false,
            errorMSG: false,
            submitted: false
        }
    }


    handleChange = (e, type) => {
        const { loginData, login } = this.state;
        if (login) {
            loginData[type] = e.target.value;
            this.setState({ loginData })
        }
           }
    login = () => {
        const { email, password } = this.state.loginData;
        this.setState({ submitted: true })
        if (!(password && email)) {
            return;
        }
        this.setState({ loading: true })
        this.props.getDemoData(this.state.loginData)
    }
  
     opneLogin = () => {
        this.setState({ login: true,  submitted: false})
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let update = {};
        switch (nextProps.demoAction.type) {
            case "FACK_ACTION":
                update.call = false;
                break;
            case "LOGIN_SUCCESS":              
                if (prevState.loading) {
                    update.loading = false;
                    update.submitted = false;
                    localStorage.setItem("id", nextProps.demoAction.data._id);
                    localStorage.setItem("token", nextProps.demoAction.data.token);
                }
                break;
            case "LOGIN_FAIL":
                update.loading = false;
                update.errorMSG = true;
                update.submitted = false;
                break;
                      default:
        }
        return Object.keys(update).length === 0 ? null : update;
    }
    render() {
        if (localStorage.getItem("id")) {
            return <Redirect to="/user" />
        }
        const { loginData,   loading, submitted } = this.state;
        return (
            <DemoWrapper>
                       <div className="loginPage">
                            <div className="spacing">
                                <input onChange={(e) => this.handleChange(e, "email")}
                                    name="user"
                                    autocomplete="off"
                                    className="inputClass"
                                    placeholder="Enter Username"
                                    value={loginData.email ? loginData.email : ""}
                                />
                                {submitted && !loginData.email && (
                                    <div className="errorText">
                                        Email required<sup>*</sup>
                                    </div>
                                )}
                            </div>
                            <div className="spacing">
                                <input onChange={(e) => this.handleChange(e, "password")}
                                    type="password"
                                    name="password"
                                    autocomplete="off"
                                    className="inputClass"
                                    placeholder="Enter Password"
                                    value={loginData.password ? loginData.password : ""}
                                />
                                {submitted && !loginData.password && (
                                    <div className="errorText">
                                        Password required<sup>*</sup>
                                    </div>
                                )}
                            </div>
                            <div className="spacing">
                                <button className="buttonStyle" onClick={this.login}>{loading ? <i className="fa fa-spinner fa-spin" size="sm"></i> : null}  Login</button>
                            </div>
                            {this.state.errorMSG ?
                                <span style={{ color: "red", fontSize: "14PX" }}>Enter valid credential</span> : null}
                        </div> 
            </DemoWrapper>
        )
    }
}

export default connect(
    state => ({
        ...state.demoReducer
    }),
    {
        ...demoAction
    }
)(Demo)
