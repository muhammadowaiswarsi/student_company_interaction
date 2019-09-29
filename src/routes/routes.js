import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginContainer from '../Container/Login';
import MainContainer from '../Container/Main';
import SignupConfirmation from '../Container/SignupConfirmation';
import SignupContainer from '../Container/Signup';
import { connect } from "react-redux"


function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
        />
    )
}

class Routes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authed: false,
            confirmRoute: false
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.authed !== this.props.authed) {
            this.setState({
                authed: this.props.authed,
            })
        }
        if (prevProps.confirmRoute !== this.props.confirmRoute) {
            this.setState({
                confirmRoute: this.props.confirmRoute,
            })
        }

    }

    render() {
        return (
            <Router>
                <Route exact path="/" component={LoginContainer} />
                <Route exact path="/registration/:type" component={SignupContainer} />
                <PrivateRoute exact authed={this.state.authed} path="/main" component={MainContainer} />
                <PrivateRoute exact authed={this.state.confirmRoute} path="/confirmation" component={SignupConfirmation} />
            </Router>
        )
    }
}

const mapStateToProp = (state) => {
    let { routeReducer } = state
    return {
        authed: routeReducer.authed,
        confirmRoute: routeReducer.confirmRoute
    }
}

export default connect(mapStateToProp, null)(Routes);