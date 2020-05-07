import React from 'react';
import './home.css';

function Home() {
    return (
        <section className="uk-container">
            <img className="img-fluid"src="http://clipart-library.com/images/8cGbXEaxi.png" alt="logo"/>
            <div className="row">
                <div className="col-sm-12">
            <h1>Welcome!</h1>
            <a id="viewAll" href="/all"type="button" class="uk-button uk-button-secondary">View All!</a>
            <hr/>
            </div>
            </div>
            <p id="bio">
                With this application, any employer will be able to view all of their employees in one place.
                Managers are able to search for employees by their location, or sort by the employees' last names.
                Select the button below to get started. Please enjoy!
            </p>
            
        </section>
    )
};

export default Home;