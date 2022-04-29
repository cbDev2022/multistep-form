import React, { Component } from 'react';

export class AddWeeklies extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
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
          "May 8, 2022",
          "May 15, 2022",
          "May 22, 2022",
          "May 29, 2022",
          "June 5, 2022",
          "June 12, 2022",
          "June 19, 2022",
          "June 26, 2022",
          "July 3, 2022",
          "July 10, 2022",
          "July 17, 2022",
          "July 24, 2022",
          "July 31, 2022",
          "August 7, 2022",
          "August 14, 2022",
          "August 21, 2022",
          "August 28, 2022",
          "September 4, 2022",
          "September 11, 2022",
          "September 18, 2022",
          "September 25, 2022",
          "October 2, 2022",
          "October 9, 2022",
          "October 16, 2022",
          "October 23, 2022",
          "October 30, 2022",
          "November 6, 2022",
          "November 13, 2022",
          "November 20, 2022",
          "November 27, 2022",
          "December 4, 2022",
          "December 11, 2022",
          "December 18, 2022",
          "December 25, 2022"
      ];
    return (
        <div>
            <h1>Uncheck any weeklies you want to REMOVE from this schedule.</h1>
            <input placeholder="Weekly" type="text" required autoComplete='off' />
            <div>
                {dateList.map((item, index) => (
                    <div key={index}>
                        <input value={item} type="checkbox" defaultChecked/>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
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

export default AddWeeklies;
