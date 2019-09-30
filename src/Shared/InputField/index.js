import React from "react";
import { Form } from "react-bootstrap";
import "./index.css"

const InputField = ({ label, type, placeholder, onChange, className, name, value }) => {
    return (
        <Form.Group className={className ? className : null} controlId="formBasicEmail">
            <Form.Label>{label ? label : null}</Form.Label>
            <Form.Control type={type ? type : null} value={value ? value : null} name={name ? name : null} placeholder={placeholder ? placeholder : null} onChange={onChange} />
        </Form.Group>
    )
}

export default InputField;