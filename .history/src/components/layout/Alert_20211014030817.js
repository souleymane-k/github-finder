import React from 'react'
import AlertContext from '../../context/alert/'

const Alert = ({alert}) => {
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle" />{alert.msg}
            </div>
        )
    );
}

export default Alert;
