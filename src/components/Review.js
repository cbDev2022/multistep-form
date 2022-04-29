import React, { Component } from 'react'

export class Review extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const { values } = this.props;
        
    
    return (
        <div>
        <h1>Review your schedule</h1>
        Schedule shows here
        <h1>Add additional information in the comments:</h1>
        <input placeholder="Comments" type="text" name="account" required autoComplete='off' />
        <h3>When you're finished, click "Submit"</h3>
        <div className="footer">
                <button onClick={this.continue}>Submit</button>
            </div>
    </div>
    )
  }
}

export default Review;