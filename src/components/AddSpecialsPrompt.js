import React, { Component } from 'react'

export class AddSpecialsPrompt extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    skip = e => {
      e.preventDefault();
      this.props.skip1();
    }

  render() {
    const { values } = this.props;
    return (
        <div>
        <h1>Would you like to add special collections?</h1>
    
        <div className="footer">
                <button onClick={this.continue}>Yes</button>
                <button onClick={this.skip}>No</button>
            </div>
    </div>
    )
  }
}

export default AddSpecialsPrompt
