import React, { Component } from 'react'

export class SchedulePage extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    skip = e => {
        e.preventDefault();
        this.props.skip1();
    }
  
    
    render() {
        const { values } = this.props;
        
    
    return (
        <div>
        <h1>SchedulePage.</h1>
         Will add this later
        <div className="footer">
                <button onClick={this.continue}>Submit</button>
                <button onClick={this.back}>Back</button>
                <button onClick={this.skip}>+ Create Schedule</button>
            </div>
    </div>
    )
  }
}

export default SchedulePage