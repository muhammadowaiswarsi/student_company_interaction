import React, { Component } from 'react';
import InputFields from "./../../Shared/InputField";
import Button from "./../../Shared/Button";

class SignupConfirm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            confirmationCode: ""
        }
    }

    render() {
        let { confirmationCode } = this.state
        return (
            <div>
                <InputFields label="Confirmation Code" onChange={(e) => this.setState({ confirmationCode: e.target.value })} />
                <div className="flex-end">
                    <Button onClick={() => this.props.confirmationCodeFunc(confirmationCode)} title="Confirm Sign Up" />
                </div>
            </div >
        )
    }
}

export default SignupConfirm