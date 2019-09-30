import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import "./index.css"

class StudentMain extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { CompaniesData, currentUser } = this.props
        return (
            <div className="Main">
                <div className="welcome_head MB30">
                    Welcome {currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : "loading"}
                </div>

                <div className="cards_main_div">
                    {CompaniesData && CompaniesData.length ? CompaniesData.map((company, index) => {
                        return (
                            <Col key={index} className="Item_main_Col MB10" md={3} lg={3} sm={11} xs={11}>
                                <div className="tex-div">{`${company.companyName}`}</div>
                                <div className="tex-div">
                                    <span className="tex-span">{company.city}</span>
                                    <span className="tex-span ML10">{company.state}</span>
                                </div>
                            </Col>
                        )
                    }) : null}
                </div>

            </div>
        )
    }
}

export default StudentMain;