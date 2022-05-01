import React, { Component } from 'react'

export class AddMonthly extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const { values } = this.props;
        
    
    return (
        <div>
        <h1>Enter the title for your monthly collection and choose which Sunday of the month it will fall on.</h1>
        <input placeholder="Enter Title Here" type="text" required autoComplete='off' />
        <label htmlFor='options'>Placed:</label>
     
                <select>
                    <option></option>
                    <option>1st Sunday</option>
                    <option>2nd Sunday</option>
                    <option>3rd Sunday</option>
                    <option>4th Sunday</option>
                    <option>5th Sunday</option> 
                </select>
    
        <label htmlFor='options'>Color:</label>
    
                <select>
                    <option></option>
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
            <label htmlFor='options'>Date Format:</label>
        
                <select>
                    <option></option>
                    <option>None-No Date</option>
                    <option>Month Day Year</option>
                    <option>Month Year</option>
                    <option>Month Day</option>
                    <option>Month</option>
                    <option>Year</option>
                    <option>Perpetual</option>
                    <option>Liturgical</option>
                </select>
                <br></br>

        <input placeholder="Enter Title Here" type="text" required autoComplete='off' />
        <label htmlFor='options'>Placed:</label>
     
                <select>
                    <option></option>
                    <option>1st Sunday</option>
                    <option>2nd Sunday</option>
                    <option>3rd Sunday</option>
                    <option>4th Sunday</option>
                    <option>5th Sunday</option> 
                </select>
    
        <label htmlFor='options'>Color:</label>
    
                <select>
                    <option></option>
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
            <label htmlFor='options'>Date Format:</label>
        
                <select>
                    <option></option>
                    <option>None-No Date</option>
                    <option>Month Day Year</option>
                    <option>Month Year</option>
                    <option>Month Day</option>
                    <option>Month</option>
                    <option>Year</option>
                    <option>Perpetual</option>
                    <option>Liturgical</option>
                </select>
                <br></br>

                <input placeholder="Enter Title Here" type="text" required autoComplete='off' />
        <label htmlFor='options'>Placed:</label>
     
                <select>
                    <option></option>
                    <option>1st Sunday</option>
                    <option>2nd Sunday</option>
                    <option>3rd Sunday</option>
                    <option>4th Sunday</option>
                    <option>5th Sunday</option> 
                </select>
    
        <label htmlFor='options'>Color:</label>
    
                <select>
                    <option></option>
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
            <label htmlFor='options'>Date Format:</label>
        
                <select>
                    <option></option>
                    <option>None-No Date</option>
                    <option>Month Day Year</option>
                    <option>Month Year</option>
                    <option>Month Day</option>
                    <option>Month</option>
                    <option>Year</option>
                    <option>Perpetual</option>
                    <option>Liturgical</option>
                </select>
                <br></br>

                <input placeholder="Enter Title Here" type="text" required autoComplete='off' />
        <label htmlFor='options'>Placed:</label>
     
                <select>
                    <option></option>
                    <option>1st Sunday</option>
                    <option>2nd Sunday</option>
                    <option>3rd Sunday</option>
                    <option>4th Sunday</option>
                    <option>5th Sunday</option> 
                </select>
    
        <label htmlFor='options'>Color:</label>
    
                <select>
                    <option></option>
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
            <label htmlFor='options'>Date Format:</label>
        
                <select>
                    <option></option>
                    <option>None-No Date</option>
                    <option>Month Day Year</option>
                    <option>Month Year</option>
                    <option>Month Day</option>
                    <option>Month</option>
                    <option>Year</option>
                    <option>Perpetual</option>
                    <option>Liturgical</option>
                </select>
                <br></br>

                <input placeholder="Enter Title Here" type="text" required autoComplete='off' />
        <label htmlFor='options'>Placed:</label>
     
                <select>
                    <option></option>
                    <option>1st Sunday</option>
                    <option>2nd Sunday</option>
                    <option>3rd Sunday</option>
                    <option>4th Sunday</option>
                    <option>5th Sunday</option> 
                </select>
    
        <label htmlFor='options'>Color:</label>
    
                <select>
                    <option></option>
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
            <label htmlFor='options'>Date Format:</label>
        
                <select>
                    <option></option>
                    <option>None-No Date</option>
                    <option>Month Day Year</option>
                    <option>Month Year</option>
                    <option>Month Day</option>
                    <option>Month</option>
                    <option>Year</option>
                    <option>Perpetual</option>
                    <option>Liturgical</option>
                </select>
                <br></br>
                
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

export default AddMonthly
