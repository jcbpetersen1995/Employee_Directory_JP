import React from 'react';
import './card.css'
function Card(props) {
    
    return (

        <div className="employeeCards uk-card uk-card-small uk-card-secondary uk-width-1-1@l">

            <div className="uk-card-header">
                <div className="uk-grid-small" uk-grid>
                    <div className="uk-width-auto">
                        <img className="uk-border-circle" width="40" height="40" src={props.emp.image} alt="Profile"/>
                    </div>
                    <div className="uk-width-expand">
                        <h3 id="name"className="uk-card-title uk-margin-remove-bottom">{props.emp.last}, {props.emp.first}</h3>
                        <p className="uk-text-meta uk-margin-remove-top">{props.emp.city}, {props.emp.state}</p>
                    </div>
                </div>
            </div>
            <div className="uk-card-body">
                <p><span className="uk-margin-small-right" uk-icon="phone"></span>{props.emp.cell}</p>
                <p><span className="uk-margin-small-right" uk-icon="mail"></span>{props.emp.email}</p>
            </div>
        </div>

            )
        };
        
export default Card;