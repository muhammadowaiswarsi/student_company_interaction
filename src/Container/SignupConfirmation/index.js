import React from 'react'
import SignupConfirm from '../../Component/signupConfirm';
import { Col } from "react-bootstrap";
import { confirm } from "./../../Service/AuthService";
import { AppSync } from "./../../Config/graphql-config"
import { connect } from "react-redux";
import { Mutation } from "react-apollo";
import { signupStudent, signupCompany } from "./../../Config/Queries"
import { routeAction } from "./../../store/actions"

class SignupConfirmation extends React.Component {

    confirmationCodeFunc = (code, signupStudent, signupCompany) => {
        confirm(this.props.user.user_id, code)
            .then((res) => {
                console.log(res)
                let { firstName, lastName, email, city, state, company, user_id } = this.props.user
                let { type } = this.props.match.params
                if (type === "student") {
                    signupStudent({
                        variables: {
                            firstName,
                            lastName,
                            email,
                            city,
                            state,
                            student_id: user_id
                        }
                    }).then((res) => {
                        console.log(res)
                        this.props.history.push("/student/main")
                    }).catch((err) => {
                        console.log(err)
                    })
                } else {
                    signupCompany({
                        variables: {
                            companyName: company,
                            email,
                            city,
                            state,
                            company_id: user_id
                        }
                    }).then((res) => {
                        console.log(res)
                        this.props.authed(true)
                        this.props.history.push("/company/main")
                    }).catch((err) => {
                        console.log(err)
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="LoginContainer flex-center-center" >
                <Col sm={1} md={3} lg={3} xl={4} />
                <Col className="main_col flex-center" xs={12} sm={10} md={6} lg={6} xl={4}>
                    <Mutation
                        client={AppSync}
                        mutation={signupStudent}>
                        {(signupStudent, { loading, error }) => {
                            return (
                                <Mutation
                                    client={AppSync}
                                    mutation={signupCompany}>
                                    {(signupCompany, { loading, error }) => {
                                        return (
                                            <SignupConfirm confirmationCodeFunc={(code) => this.confirmationCodeFunc(code, signupStudent, signupCompany)} />
                                        )
                                    }}
                                </Mutation>
                            )
                        }}
                    </Mutation>
                </Col>
                <Col sm={1} md={3} lg={3} xl={4} />
            </div>
        )
    }
}

const mapDispatchToProp = dispatch => {
    return {
        authed: (flag) => { dispatch(routeAction.authed(flag)) }
    }
}

const mapStateToProp = state => {
    return {
        user: state.routeReducer.user
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(SignupConfirmation);