import React, { Component } from 'react'

export class AddAnotherMonthlyPrompt extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
      e.preventDefault();
      this.props.prevStep();
    }

  render() {
    const { values } = this.props;
    return (
        <div>
        <h1>Would you like to add another monthly collection?</h1>
    
        <div className="footer">
                <button onClick={this.back}>Yes</button>
                <button onClick={this.continue}>No</button>
            </div>
    </div>
    )
  }
}

export default AddAnotherMonthlyPrompt; 
