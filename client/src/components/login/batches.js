import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import userLogin from './userLogin';

class BatchSearch extends Component {
    constructor() {
        super();
        this.state = {
            batches: [],
        };
    }
    componentDidMount() {
        let initialPlanets = [];
        fetch('https://swapi.co/api/planets/')
            .then(response => {
                return response.json();
            }).then(data => {
            initialPlanets = data.results.map((planet) => {
                return planet
            });
            console.log(initialPlanets);
            this.setState({
                batches: initialPlanets,
            });
        });
    }
    render() {
        return (
                    <userLogin state={this.state}/>
        );
    }
}
    
    // after component is finished
    
    export default BatchSearch;
    
    ReactDOM.render(<BatchSearch />, document.getElementById('react-search'));