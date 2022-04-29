import React, { Component } from 'react'

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
                <button onClick={this.restart}>OK</button>
            </div>
    </div>
    )
  }
}

export default Review;