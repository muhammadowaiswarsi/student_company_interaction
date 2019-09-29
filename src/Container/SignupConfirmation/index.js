import React from 'react'
import SignupConfirm from '../../Component/signupConfirm';
import { Col } from "react-bootstrap";
import { confirm } from "./../../Service/AuthService";
import { connect } from "react-redux"

class SignupConfirmation extends React.Component {

    confirmationCodeFunc = (code) => {
        console.log(this.props)
        confirm(this.props.user.email, code)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="LoginContainer flex-center-center">
                <Col sm={1} md={3} lg={3} xl={4} />
                <Col className="main_col flex-center" xs={12} sm={10} md={6} lg={6} xl={4}>
                    <SignupConfirm confirmationCodeFunc={this.confirmationCodeFunc} />
                </Col>
                <Col sm={1} md={3} lg={3} xl={4} />
            </div>
        )
    }
}


const mapStateToProp = state => {
    console.log(state)
    return {
        user: state.routeReducer.user
    }
}

export default connect(mapStateToProp, null)(SignupConfirmation);