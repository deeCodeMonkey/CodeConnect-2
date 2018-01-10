import React from 'react';

export default (props) => {

    return (
        <div className="card">
            <h6>{props.title}</h6>
            <h6>{props.dueDate}</h6>
            <h6>{props.requirements}</h6>
        </div>
    );
};