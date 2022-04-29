import React, { Component } from 'react'

export class SchedulePage extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    goBack = e => {
        e.preventDefault();
        this.props.back2();
    }
    
    
    render() {
        const { values } = this.props;
        
    
    return (
        <div>
        <h1>Changes Submitted</h1>
        <div className="footer">
                <button onClick={this.goBack}>OK</button>
            </div>
    </div>
    )
  }
}

export default SchedulePage