import React, { Component } from 'react'
import SchdulePage from './SchedulePage';

export class Review extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    restart = e => {
        e.preventDefault();
        this.props.new();
      }
    render() {
        const { values } = this.props;
        
    
    return (
        <div>
        <h1>Your schedule has been submitted!</h1>
        <div className="footer">
                <button onClick={<SchdulePage/>}>OK</button>
            </div>
    </div>
    )
  }
}

export default Review;