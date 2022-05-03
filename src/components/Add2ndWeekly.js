import { render } from '@testing-library/react';
import React, { Component } from 'react'

export class Add2ndWeekly extends Component {
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
        const dateList = [
          "January 2, 2022",
          "January 9, 2022",
          "January 16, 2022",
          "January 23, 2022",
          "January 30, 2022",
          "February 6, 2022",
          "February 13, 2022",
          "February 20, 2022",
          "February 27, 2022",
          "March 6, 2022",
          "March 13, 2022",
          "March 20, 2022",
          "March 27, 2022",
          "April 3, 2022",
          "April 10, 2022",
          "April 17, 2022",
          "April 24, 2022",
          "May 1, 2022",
          "May 8, 2022"
        ];
      return (
          <div class="center-align">
              <h1>Add Second Weekly Collection</h1>
              <h3>Uncheck any 2nd weeklies you want to REMOVE from this schedule.</h3>
              <input placeholder="2nd Weekly" type="text" name="account" required autoComplete='off' />
              <br></br>
              <div class="left-align">
                  {dateList.map((item, index) => (
                      <div key={index}>
                          <input class="space" value={item} type="checkbox" defaultChecked />
                          <span>{item}</span>
                      </div>
                  ))}
              </div>
              <div>
                  <h2>When you are finished, click "Next"</h2>
              </div>
              <div className="footer">
                      <button class="back" onClick={this.previous}>Back</button>
                      <button onClick={this.continue}>Next</button>
                  </div>
          </div>
    )
  }
}

export default Add2ndWeekly
