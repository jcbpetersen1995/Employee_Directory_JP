import React from 'react';
import Card from '../card/Card';
import '../card/card.css';

function All(props) {

    function refreshPage() {
        window.location.reload(false);
      }

    return (
        
        <section className="uk-container">
            <h1 id="allHeader">All Employees</h1>
            <button onClick={props.handleSortChange} id="sortButton" className="uk-button uk-button-secondary uk-width-1-1">
                <span uk-icon="chevron-down"></span> Sort By Last Name</button>
                <div className="uk-margin">
        <div uk-form-custom="target: > * > span:first-child">
            <select onChange={props.handleSelect} id="scripts">
                <option value="">Filter By State ...</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Arizona">Arizona</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illnois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconson">Wisconson</option>
                <option value="Wyoming">Wyoming</option>
            </select>
            <button className="uk-button uk-button-secondary" type="button" tabIndex="-1">
                <span></span>
                <span uk-icon="icon: chevron-down"></span>
            </button>
        </div>
        <button id="refreshButton" onClick={refreshPage} className="uk-button uk-button-secondary">Refresh List</button>
    </div>
            <div className="card-group">
            {props.employees.map(emp => (
                <Card emp={emp}/>
            ))}
            </div>
        </section>

    )
};

export default All;