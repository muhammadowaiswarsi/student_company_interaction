import React, { Component } from 'react'
import { Container, Col, Row, Form, Card } from 'react-bootstrap';
import "./index.css"

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            company: [
                { name: "hello", city: "city", state: "state" },
                { name: "hello", city: "city", state: "state" },
                { name: "hello", city: "city", state: "state" },
            ]
        }
    }

    render() {
        let { company } = this.state
        return (
            <div className="Main">
                <div className="welcome_head MB30">
                    Welcome Student Name
                </div>

                <div className="cards_main_div">
                    {company.length ? company.map((data, index) => {
                        return (
                            <Col key={index} className="Item_main_Col MB10" md={3} lg={3} sm={11} xs={11}>
                                <div className="tex-div">{data.name}</div>
                                <div className="tex-div">
                                    <span className="tex-span">{data.city}</span>
                                    <span className="tex-span">{data.state}</span>
                                </div>

                            </Col>
                        )
                    }) : null}
                </div>

            </div>
        )
    }
}

export default Main