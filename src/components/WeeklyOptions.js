import React, { Component } from 'react';

export class WeeklyOptions extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    
  render() {
      const { values } = this.props;
    return (
        <div>
            <h1>Weekly Options</h1>
            <h3>Choose Color:</h3>
                <label htmlFor='options'>What color do you want your weekly envelopes to be?</label>
                <br></br>
                <select>
                    <option>None-White</option>
                    <option>Light Blue Border</option>
                    <option>Medium Blue Border</option>
                    <option>Dark Blue Border</option>
                    <option>Green Border</option>
                    <option>Lime Border</option>
                    <option>Orange Border</option>
                    <option>Red Border</option>
                    <option>Black Border</option>
                    <option>Brown Border</option>
                    <option>Pink Border</option>
                    <option>Gray Border</option>
                    <option>Blue Background</option>
                    <option>Green Background</option>
                    <option>Orange Background</option>
                    <option>Red Background</option>
                    <option>Pink Background</option>
                    <option>Gray Background</option>
                </select>
                <p>*Series have their own colored borders</p>
            <h3>Choose Date Format:</h3>
            <label htmlFor='options'>What date format would you like for your weekly envelopes?</label>
            <br></br>
                <select>
                    <option>None-No Date</option>
                    <option>Month Day Year</option>
                    <option>Month Year</option>
                    <option>Month Day</option>
                    <option>Month</option>
                    <option>Year</option>
                    <option>Perpetual</option>
                    <option>Liturgical</option>
                </select>
            <h3>Choose Envelope Series:</h3>
            <label htmlFor='options'>What free series would you like to add to your weekly envelopes?</label>
            <br></br>
                <select>
                    <option>None</option>
                    <option>St. Teresa</option>
                    <option>I Feel Good</option>
                    <option>Thank You God</option>
                    <option>Buzzy Bee</option>
                    <option>Christopher Caterpillar</option>
                    <option>Stewardship</option>
                    <option>Good Works</option>
                    <option>Disciples and Miracles</option>
                </select>
            <div>
                <h2>When you are finished, click "Next"</h2>
            </div>
            <div className="footer">
                    <button onClick={this.continue}>Next</button>
                </div>
        </div>
      
    )
  }
}

export default WeeklyOptions;