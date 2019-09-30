import React, { Component } from 'react'
import InputField from "../../Shared/InputField"
import Button from "../../Shared/Button"
// import StudentLogin from '../studentLogin'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submit = (e) => {
        e.preventDefault()
        let { email, password } = this.state
        let obj = {
            email,
            password
        }
        console.log(obj)
        this.props.login(obj)
    }



    render() {
        let { student, history } = this.props
        let type = ""
        if (student) {
            type = "student"
        } else {
            type = "company"
        }
        return (
            <div>
                <form onSubmit={this.submit}>
                    <InputField label="Username" name="email"
                        type="email" placeholder="Student@Yale.edu" onChange={(e) => this.handleChange(e)} />
                    <InputField className="MB30" label="Password" name="password"
                        type="password" placeholder="Password2345#" onChange={(e) => this.handleChange(e)} />

                    <div className="flex-between MB20">
                        <Button onClick={() => history.push(`./registration/${type}`)} title="Register" />
                        <Button type="submit" title="Login" />
                    </div>
                </form>

                <div className="text_align">Admins Login Here</div>
            </div>
        )
    }
}

export default Login