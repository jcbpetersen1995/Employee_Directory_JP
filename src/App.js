import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import API from './components/utils/API';
import All from './components/all/All';
import Footer from './components/footer/Footer';



class App extends Component {

    state = {
        employees: [],
    };

    handleSortChange = () => {
        API.searchEmployee()
            .then(response => {
                
                const employees = response.data.results.map(emp => {
                    const data = {
                        first: emp.name.first,
                        last: emp.name.last,
                        email: emp.email,
                        age: emp.dob.age,
                        image: emp.picture.large,
                        cell: emp.cell,
                        id: emp.id.value,
                        city: emp.location.city,
                        state: emp.location.state
                    }
                    return data
                })
                this.setState({ employees: employees.sort(function(a,b) {
                    if(a.last < b.last) {return -1}
                    if(a.last > b.last) {return 1}
                    return 0;
                }) 
            })
                console.log(employees)
            })
            .catch(err => console.log(err));
    }

    componentDidMount = () => {
        API.searchEmployee()
            .then(response => {
                
                const employees = response.data.results.map(emp => {
                    const data = {
                        first: emp.name.first,
                        last: emp.name.last,
                        email: emp.email,
                        age: emp.dob.age,
                        image: emp.picture.large,
                        cell: emp.cell,
                        id: emp.id.value,
                        city: emp.location.city,
                        state: emp.location.state
                    }
                    return data
                })
                this.setState({ employees: employees})
                console.log(employees)
            })
            .catch(err => console.log(err));
    }

    handleSelect = (value) => {
        API.searchEmployee()
            .then(response => {
                
                const employees = response.data.results.map(emp => {
                    const data = {
                        first: emp.name.first,
                        last: emp.name.last,
                        email: emp.email,
                        age: emp.dob.age,
                        image: emp.picture.large,
                        cell: emp.cell,
                        id: emp.id.value,
                        city: emp.location.city,
                        state: emp.location.state
                    }
                    return data
                })
                this.setState({ employees: employees.filter(employees => {
                    var e = document.getElementById("scripts");
                    var location = e.options[e.selectedIndex].text;
                    if(employees.state === location) {
                        return employees.state
                    }
            })
        })
    })
    .catch(err => {
        console.log(err)
    })}




    render() {
        return (
            <div>    
                <Navbar />             
                <All employees={this.state.employees} handleSortChange={this.handleSortChange}
                 handleSelect={this.handleSelect} />} />
                 <Footer />      
            </div>
        )
    }
};

export default App;