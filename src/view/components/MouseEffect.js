import React from 'react';
import {TransitionMotion, spring} from 'react-motion';
import '../styles/MouseEffect.css';

const leavingSpringConfig = {stiffness: 180, damping: 30};

export default class MouseEffect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mouse: [], now: 't' + 0};
  };
  BALL_COLOURS = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ];
  ballColor = 0;
  
 
  handleMouseMove = ({pageX, pageY}) => {
    //ball-style with color, size, location
    // this.ballColor = Math.floor(Math.random() * 7);


    this.setState(() => {
      return {
        mouse: [pageX-10, pageY-10],
        now: 't' + Date.now(),
      };
    });
  };

  handleTouchMove = (e) => {
    e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  };
  
  handleMouseLeave = () => {
    this.setState(() => {
      return {
        mouse: [-100, -100 ],
        now: 't' + Date.now(),
      };
    });
  }

  willLeave = (styleCell) => {
    return {
      ...styleCell.style,
      opacity: spring(0.5, leavingSpringConfig),
      scale: spring(0, leavingSpringConfig),

    };
  };


  render() {

    const {mouse: [mouseX, mouseY], now} = this.state;
    const styles = mouseX == null ? [] : [{
      key: now,
      style: {
        opacity: spring(1),
        scale: spring(1),
        x: spring(mouseX),
        y: spring(mouseY),
        color: this.ballColor
      }
    }];
    return (
      
      <TransitionMotion willLeave={this.willLeave}  styles={styles}>
        {circles =>

          <div
            onMouseMove={this.handleMouseMove}
            onTouchMove={this.handleTouchMove}
            onMouseLeave={this.handleMouseLeave}
            className="mouse-effect">
            {circles.map(({key, style: {opacity, scale, x, y, color}}) =>
              <div
                key={key}
                className="mouse-ball"
                style={{
                  opacity: opacity,
                  scale: scale,
                  // backgroundColor: this.BALL_COLOURS[color],
                  backgroundColor: '#eee',
                  boxShadow:   '0 0 35px #00b4fc',                  
                  transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                  WebkitTransform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                }} />
            )}
          </div>
        }
      </TransitionMotion>
    );
  };
}