import React from 'react'
import SignupConfirm from '../../Component/signupConfirm';
import { Col } from "react-bootstrap";
import { confirm } from "./../../Service/AuthService";
import { AppSync } from "./../../Config/graphql-config"
import { connect } from "react-redux";
import { Mutation } from "react-apollo";
import { signupStudent } from "./../../Config/Queries"

class SignupConfirmation extends React.Component {

    confirmationCodeFunc = (code, signupStudent) => {
        console.log(this.props)
        // confirm(this.props.user.email, code)
        //     .then((res) => {
        let { firstName, lastName, email, city, state, student_id } = this.props.user
        // console.log(res)
        signupStudent({
            variables: {
                firstName,
                lastName,
                email,
                city,
                state,
                student_id : "123456"
            }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
    }
    render() {
        return (
            <div className="LoginContainer flex-center-center">
                <Col sm={1} md={3} lg={3} xl={4} />
                <Col className="main_col flex-center" xs={12} sm={10} md={6} lg={6} xl={4}>
                    <Mutation
                        client={AppSync}
                        mutation={signupStudent}>
                        {(signupStudent, { loading, error }) => {
                            return <SignupConfirm confirmationCodeFunc={(code) => this.confirmationCodeFunc(code, signupStudent)} />
                        }}
                    </Mutation>
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