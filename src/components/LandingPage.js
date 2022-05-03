import React, { Component } from 'react'

export class LandingPage extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
   
    validate = e => {
        e.preventDefault();
        this.props.onSubmit();
    }
    
    previous = e => {
        e.preventDefault();
        this.props.previousStep();
    }

    render() {
        const { values } = this.props;
        const { errors } = this.props;
        
    
    return (
        <div>
            <h1>Enter an account number</h1>
            <input
            type="text" 
            required="required" 
            placeholder="Enter Account Number"
            autoComplete='off'>
            </input>
                <div className="footer">
                    <button onClick={this.continue}>Submit</button>
                </div>
        </div>
    )
  }
}

export default LandingPage;


