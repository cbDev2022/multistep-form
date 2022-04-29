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
    
    render() {
        const { values } = this.props;
        const { errors } = this.props;
        
    
    return (
        <div>
            <input placeholder="Enter Account Number" type="text" name="account" required autoComplete='off' />
            <div className="footer">
                    <button onClick={this.continue}>Submit</button>
                </div>
        </div>
    )
  }
}

export default LandingPage;


