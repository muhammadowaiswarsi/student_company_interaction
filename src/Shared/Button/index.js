import React from "react"
import { Button } from "react-bootstrap";
import "./index.css"

const ButtonComponent = ({ title, onClick, type }) => {
    return (
        <Button type={type ? type : null} onClick={onClick}>{title ? title : null}</Button>
    )
}

export default ButtonComponent;