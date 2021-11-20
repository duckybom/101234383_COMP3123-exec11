import React, { Component } from 'react'
import axios from 'axios';

export default class PersonList extends Component {

    //Define state default values
    state = {
        persons: []
    }

     //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
    }

    render() {
        return (
            <>
                <div className='user'>
                    <h1>User List</h1>
                    </div>
                <div className='App'>
                    {    
                    this.state.persons.map(u => (
                        <div className='info'>
                            <section >
                            <p class='header'><b>&nbsp;&nbsp; {u.name['title']}. {u.name['first']} {u.name['last']}<br/></b></p>
                            <div class="section">
                            <div className="row">
                                <div className="column">
                                     <img src={u.picture['large']} alt='avatar'></img><br/>
                                     <button>Details</button>
                                </div>
                                <div className="column">
                                <div class="content"> 
                                    <h3>User Name: {u.login['username']}</h3>
                                    <p>Gender: {u.gender}</p>
                                    <p>Time Zone: {u.location['timezone']['description']}</p>
                                    <p>Address: {u.location['street']['number']} {u.location['street']['number']['name']} 
                                    {u.location['city']}, {u.location['state']}, {u.location['country']} - {u.location['postcode']}</p>
                                    <p>Email: {u.email}</p>
                                    <p>Birthdate and Age: {u.dob['date']}({u.dob['age']})</p>
                                    <p>Register Date: {u.registered['date']}</p>
                                    <p>Phone Number: {u.phone}</p>
                                    <p>Cell Number: {u.cell}</p> 
                                    <br/>
                                </div> 
                                </div>
                                <div className="column"></div>
                            </div>
                            </div>
                            </section>
                            <br/>
                        </div>
                    ))
                    }
                    <br/>
                </div>            
            </>
        )
    }
}