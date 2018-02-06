import React, { Component } from 'react';
import '../styles/Dropdown.css';
class Dropdown extends Component {
    state = {  }
    render() {
        return (
            <div className="scifiUI">
                <h1>Explore</h1>
                <ul>
                    <li>Business</li>
                    <li>Leisure</li>
                    <li>archive</li>
                    <li>About</li>
                </ul>
          </div>
        );
    }
}

export default Dropdown;