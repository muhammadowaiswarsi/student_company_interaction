import React from 'react'
import Login from '../../Component/login'
import { Tabs, Tab, Container, Row, Col, Form, FormControl } from 'react-bootstrap'
import "./index.css"

class LoginContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            student: true
        }
    }

    handleChange = (e) => {
        if (e.target.id === "formHorizontalRadios1") {
            this.setState({
                student: true,
                company: false
            })
        } else {
            this.setState({
                student: false,
                company: true
            })
        }
    }

    render() {
        console.log(this.state)
        let { student, company } = this.state
        return (
            <div className="LoginContainer flex-center-center">
                <Col sm={1} md={3} lg={3} xl={4} />
                <Col className="main_col flex-center" xs={12} sm={10} md={6} lg={6} xl={4}>
                    <div className="flex MB20">
                        <span className={student ? "tabs_border_selected" : "tabs_border_unselected"}>
                            <Form.Check
                                inline
                                type="radio"
                                label="Student"
                                id="formHorizontalRadios1"
                                checked={student}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </span>

                        <span className={company ? "tabs_border_selected" : "tabs_border_unselected"}>
                            <Form.Check
                                inline
                                type="radio"
                                label="Company"
                                id="formHorizontalRadios2"
                                checked={company}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </span>
                    </div>

                    <Login student={student} company={company} history={this.props.history} />
                </Col>
                <Col sm={1} md={3} lg={3} xl={4} />
            </div>
        )
    }
}

export default LoginContainer;