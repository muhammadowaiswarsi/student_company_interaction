import React from 'react';
import Signup from '../../Component/signup';
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import { signup } from "./../../Service/AuthService";
import { routeAction } from "./../../store/actions/index"
import "./index.css";

class SignupContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    submit = (obj) => {
        signup(obj)
            .then((res) => {
                console.log(res)
                obj.user_id = res.user_id
                this.props.user(obj)
                this.props.confirmRoute(true)
                setTimeout(() => {
                    let { type } = this.props.match.params
                    this.props.history.push(`/confirmation/${type}`)
                }, 100);
            }).catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="SignupContainer flex-center-center">
                <Col sm={1} md={3} lg={3} xl={4} />
                <Col className="main_col flex-center" xs={12} sm={10} md={6} lg={6} xl={4}>
                    <Signup params={this.props.match.params} submit={this.submit} />
                </Col>
                <Col sm={1} md={3} lg={3} xl={4} />
            </div >
        )
    }
}


const dispatchToProp = dispatch => {
    return {
        confirmRoute: (payload) => { dispatch(routeAction.confirm_route(payload)) },
        user: (obj) => { dispatch(routeAction.user(obj)) }
    }
}

export default connect(null, dispatchToProp)(SignupContainer);