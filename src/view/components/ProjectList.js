import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import '../styles/ProjectList.css';

class ProjectList extends Component {
    state = { left: 12.5, show: 1 }
    projects = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
    ]
    handleMoveRight = () => {
        if (this.state.show !== this.projects.length - 2) 
        
        this.setState({
            left: this.state.left - 25,
            show: this.state.show + 1
        })
    }
    handleMoveLeft = () => {
        if (this.state.show !== 1) 
        this.setState({
            left: this.state.left + 25,
            show: this.state.show - 1
        })
    }
    render() {
        return (
            //get project info from parents 
            //pass card locaion as props
            <div className="project-list">          
                    {this.projects.map((project, i) => {
                        const left = this.state.left + i * 25;
                        return <ProjectCard key={project.id} id={project.id} left={left} show={this.state.show} />
                    })}
                <div className="arrow-container">
                </div>
                <div className="arrow-container">
                    <div className="arrow-left">
                        <i onClick={this.handleMoveLeft} className="fa fa-arrow-left fa-3x" aria-hidden="true"></i>
                    </div>                    
                    <div className="arrow-right">
                        <i onClick={this.handleMoveRight} className="fa fa-arrow-right fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            
        );
    }
}

export default ProjectList;