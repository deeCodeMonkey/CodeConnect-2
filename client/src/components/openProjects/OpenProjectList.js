﻿import React, { Component } from 'react';
import axios from 'axios';
import OpenProjectItem from './OpenProjectItem';
import OpenProjectSearch from './OpenProjectSearch';

class OpenProjectList extends Component {

    state = {
        openProjects: [],
        keyword: '',
        startDate: '',
        endDate: ''
    }

    //load all open projects after mounting 
    componentDidMount() {
        this.fetchOpenProjects();
    }

    fetchOpenProjects = () => {
        axios.get('/api/projects')
            .then((response) => {
                this.setState({
                    openProjects: response.data.filter(openProject => !openProject.user[0])
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleSearchSubmit = (event) => {
        event.preventDefault();

        var body = {
            requirementsKeyword: this.state.keyword,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        };

        axios.post('/api/search', body)
            .then((response) => {
                this.setState({
                    openProjects: response.data.filter(openProject => !openProject.user[0])

                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="wrapper" >
                
                    <OpenProjectSearch onSubmit={this.handleSearchSubmit} onChange={this.handleInputChange} />
               
                <div className="open-projects-list">

                    <h3>OPEN PROJECTS</h3>

                    {this.state.openProjects.map((project) => {
                        return (
                            <OpenProjectItem key={project._id} {...project} />
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default OpenProjectList;