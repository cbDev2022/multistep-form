import React, { Component, Fragment, useCallback, useState } from 'react';
export class Review extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    previous = e => {
        e.preventDefault();
        this.props.previousStep();
    }

    render() {
        const { values } = this.props;
        
    
    return (
        <div>
        <h1>Review your schedule</h1>
        <form>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Date Format</th>
                        <th>Color</th>
                    </tr>
                </thead>

                <tbody>
                <tr>
                    <td>Weekly</td>
                    <td>January 2 2022</td>
                    <td>MDY</td>
                    <td>White</td>
                </tr>
                <tr>
                    <td>Weekly</td>
                    <td>January 2 2022</td>
                    <td>MDY</td>
                    <td>White</td>
                </tr>
                <tr>
                    <td>Weekly</td>
                    <td>January 2 2022</td>
                    <td>MDY</td>
                    <td>White</td>
                </tr>
                <tr>
                    <td>Weekly</td>
                    <td>January 2 2022</td>
                    <td>MDY</td>
                    <td>White</td>
                </tr>
                </tbody>
            </table>
        </form>

        <h1>Add additional information in the comments:</h1>
        <textarea class="comments" placeholder="Comments" type="text" name="account" required autoComplete='off' />
        <h3>When you're finished, click "Submit"</h3>
        <div className="footer">
                <button class="back" onClick={this.previous}>Back</button>
                <button onClick={this.continue}>Submit</button>
            </div>
    </div>
    )
  }
}

export default Review;