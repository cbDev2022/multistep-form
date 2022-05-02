import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
require('react-datepicker/dist/react-datepicker.css');

export class AddSpecials extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    constructor() {
        super()
        this.state=({
            date:''
        })
    }
        selectDate = (e) => {
            this.setState({date:e})
        }
    
    
    render() {
        const { values } = this.props;
        
    
    return (
        <div>
        <h1>Add Special Collections</h1>
        <h3>Enter Title, Choose Date and Date Format for each special:</h3>
        
        <div class="center">
            <div class="row">
            <input class="space" placeholder="Enter Title Here" type="text" name="account" required autoComplete='off' />
                <select class="space dropdown">
                    <option>Choose Date Format</option>
                    <option>None-No Date</option>
                    <option>Month Day Year</option>
                    <option>Month Year</option>
                    <option>Month Day</option>
                    <option>Month</option>
                    <option>Year</option>
                    <option>Perpetual</option>
                    <option>Liturgical</option>
                </select>
            
                <DatePicker selected={this.state.date} 
                dateFormat="MMM dd yyyy"
                onChange={this.selectDate}
                placeholderText="Select Date">
                </DatePicker>
            </div>
        </div>

        <div class="center">
            <div class="row">
            <input class="space" placeholder="Enter Title Here" type="text" name="account" required autoComplete='off' />
                <select class="space dropdown">
                    <option>Choose Date Format</option>
                    <option>None-No Date</option>
                    <option>Month Day Year</option>
                    <option>Month Year</option>
                    <option>Month Day</option>
                    <option>Month</option>
                    <option>Year</option>
                    <option>Perpetual</option>
                    <option>Liturgical</option>
                </select>
            
                <DatePicker selected={this.state.date} 
                dateFormat="MMM dd yyyy"
                onChange={this.selectDate}
                placeholderText="Select Date">
                </DatePicker>
            </div>
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

export default AddSpecials
