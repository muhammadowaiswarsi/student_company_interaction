import React from 'react'
import Main from '../../Component/main';
import { Col } from "react-bootstrap";
import "./index.css"

class MainContainer extends React.Component {

    render() {
        return (
            <div className="MainContainer">
                <Main />
            </div>
        )
    }
}

export default MainContainer;