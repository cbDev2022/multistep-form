import React, { Component } from 'react'

export class ChooseFrequency extends Component {
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
        <h1>When is this schedule for?</h1>
         <h3>Choose Start Year</h3>
         <label htmlFor='options'>What Year Will Your Mailing Begin?</label>
         <select>
             <option>2022</option>
             <option>2023</option>
         </select>
         <h3>Choose Frequency</h3>
         <label htmlFor='options'>Choose Your Mailing Frequency:</label>
         <select>
             <option>Annual</option>
             <option>Semi-Annual</option>
             <option>Quarterly</option>
             <option>Bi-Monthly</option>
             <option>Monthly</option>
         </select>
         <h3>Choose Start Month</h3>
         <label htmlFor='options'>Choose Your Mailing Frequency:</label>
         <select>
             <option>January</option>
             <option>February</option>
             <option>March</option>
             <option>April</option>
             <option>May</option>
             <option>June</option>
             <option>July</option>
             <option>August</option>
             <option>September</option>
             <option>October</option>
             <option>November</option>
             <option>December</option>
         </select>
        <div className="footer">
                <button onClick={this.continue}>Next</button>
            </div>
    </div>
    )
  }
}

export default ChooseFrequency