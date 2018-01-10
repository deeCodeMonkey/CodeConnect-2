import React, { Component } from 'react';
import OpenProjectModal from './OpenProjectModal';

class OpenProjectItem extends Component {

    state = {
        projectModal: undefined,
    }

    handleOnClick = () => {
        this.setState({
            projectModal: true
        });
    }

    closeModalonClick = () => {
        this.setState({
            projectModal: false
        });

        window.location.href = "/Main";
    }

    render() {

        const style = {
          
        }

        return (
            <div className="open-project-item">
                <h5 style={style}>{this.props.title}</h5>
                <div className="card horizontal">
                    <br/>
                    <div className="card-image">
                        <img className="align-left circle" src={this.props.image} alt="photo" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h6>Estimated Due Date:</h6>
                            <h6>{this.props.dueDate}</h6>
                            
                            <h6>Technology Requirements:</h6>
                            <h6>{this.props.requirements}</h6>
                            <br/>
                            <button className="btn" onClick={this.handleOnClick}>View</button>
                            <OpenProjectModal projectModal={this.state.projectModal} closeModal={this.closeModalonClick} projectId={this.props._id} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default OpenProjectItem;