import React, { Component } from 'react';
import '../styles/ProjectCard.css';

class ProjectCard extends Component {
    state = {  }
    render() {
        const {left, id, show} = this.props;
        let position = left+'vw';
        console.log(position)
        
        const opacity = show === id || show === id - 1 ||  show === id - 2 ? 1 : 0;
        return (
                
                <div className="project-card position" style={{left: position, opacity}}  >
            </div>

        );
    }
}

export default ProjectCard;