import React, { Component } from 'react'
import InputField from "../../Shared/InputField"
import Button from "../../Shared/Button"
// import StudentLogin from '../studentLogin'

class Login extends Component {

    render() {
        let { student, company, history } = this.props
        let type = ""
        if (student) {
            type = "student"
        } else {
            type = "company"
        }
        return (
            <div>
                <InputField label="Username"
                    type="email" placeholder="Student@Yale.edu" onChange={(e) => console.log(e)} />
                <InputField className="MB30" label="Password"
                    type="password" placeholder="Password2345#" onChange={(e) => console.log(e)} />

                <div className="flex-between MB20">
                    <Button onClick={() => history.push(`./registration/${type}`)} title="Register" />
                    <Button onClick={() => history.push("/main")} title="Login" />
                </div>

                <div className="text_align">Admins Login Here</div>
            </div>
        )
    }
}

export default Login