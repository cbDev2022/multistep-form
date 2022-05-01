import React, { Component } from 'react'

export class ChooseFrequency extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const { values } = this.props;
        
    
    return (
        <div>
        <h1>When is this schedule for?</h1>
         <h3>Choose Start Year</h3>
         
         <select>
             <option></option>
             <option>2022</option>
             <option>2023</option>
         </select>
         <h3>Choose Frequency</h3>
         
         <select>
            <option></option>
             <option>Annual</option>
             <option>Semi-Annual</option>
             <option>Quarterly</option>
             <option>Bi-Monthly</option>
             <option>Monthly</option>
         </select>
         <h3>Choose Start Month</h3>
        
         <select>
            <option></option>
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

export default ChooseFrequency