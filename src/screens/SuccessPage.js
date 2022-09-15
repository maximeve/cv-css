import React from 'react';
import './SuccessPage.css';
import { Link } from 'react-router-dom';

function SuccessPage() {
    return (
        <div className="successPage__container">
            <h1 className="successPage__container_header">Success!</h1>
            <p className="successPage__container_text">We've received your payment</p>
            <Link to="/" className="successPage__container_button">Take me back</Link>
        </div>
    )
}

export default SuccessPage
