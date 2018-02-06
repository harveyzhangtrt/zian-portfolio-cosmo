import React, { Component } from 'react';
import MouseEffect from './components/MouseEffect';
import Background from './pages/Background';
import Dropdown from './components/Dropdown';
import ProjectCard from './components/ProjectCard';
import ProjectList from './components/ProjectList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
              {/* <div className="text">he public will get a glimpse at the tens of thousands of names — including those of more than 3,000 Canadians and Canadian companies — in the Paradise Papers starting today.       
        </div> */}
        <MouseEffect/>
        <Background/>
        <Dropdown/>
        <ProjectList/>
        

        
      </div>
    );
  }
}

export default App;
