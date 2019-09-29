import React, { Component } from 'react';
import InputField from "./../../Shared/InputField";
import Button from "./../../Shared/Button";

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "muhammad",
            lastName: "owais warsi",
            phone: "13234567899",
            email: "muhammadowaiswarsi@gmail.com",
            password: "Hello123!",
            confirmPassword: "",
            state: "",
            city: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault()
        let { email, password, firstName, lastName, phone, state, city } = this.state
        let obj = {
            email,
            firstName,
            lastName,
            phone,
            state,
            city,
            password
        }
        this.props.submit(obj)
    }


    render() {
        let { firstName, lastName, email, password, confirmPassword, phone, state, city } = this.state
        return (
            <div>
                <form onSubmit={this.submit}>
                    <InputField name="firstName" label="First Name"
                        type="name" placeholder="" value={firstName} onChange={(e) => this.handleChange(e)} />

                    <InputField name="lastName" label="Last Name"
                        type="name" placeholder="" value={lastName} onChange={(e) => this.handleChange(e)} />

                    <InputField name="email" label="Email"
                        type="email" placeholder="Student@Yale.edu" value={email} onChange={(e) => this.handleChange(e)} />

                    <InputField name="phone" label="Phone"
                        type="number" placeholder="" value={phone} onChange={(e) => this.handleChange(e)} />

                    <InputField name="password" value={password} label="Password"
                        type="password" placeholder="" onChange={(e) => this.handleChange(e)} />

                    <InputField name="confirmPassword" value={confirmPassword} className="MB30" label="Confirm Password"
                        type="password" placeholder="" onChange={(e) => this.handleChange(e)} />

                    <InputField name="state" label="State"
                        type="text" placeholder="" value={state} onChange={(e) => this.handleChange(e)} />

                    <InputField name="city" label="City"
                        type="text" placeholder="" value={city} onChange={(e) => this.handleChange(e)} />
                    <div className="flex-end">
                        <Button type="submit" title="Sign Up" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup;