import React, { Component } from 'react'

export class AddMonthly extends Component {
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
        <h1>Add Monthly Collections</h1>
        <h3>Enter the title for each monthly collection and choose a selection from each corresponding dropdown menu.</h3>
        <input placeholder="Enter Title Here" type="text" required autoComplete='off' />
     
                <select class="space dropdown">
                    <option>Choose a Sunday</option>
                    <option>1st Sunday</option>
                    <option>2nd Sunday</option>
                    <option>3rd Sunday</option>
                    <option>4th Sunday</option>
                    <option>5th Sunday</option> 
                </select>
    
                <select class="space dropdown">
                    <option>Select Color</option>
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
        
                <select class="space dropdown">
                    <option>Date Format</option>
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
     
                <select class="space dropdown">
                    <option>Choose a Sunday</option>
                    <option>1st Sunday</option>
                    <option>2nd Sunday</option>
                    <option>3rd Sunday</option>
                    <option>4th Sunday</option>
                    <option>5th Sunday</option> 
                </select>
    
                <select class="space dropdown">
                    <option>Select Color</option>
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
        
                <select class="space dropdown">
                    <option>Date Format</option>
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
     
                <select class="space dropdown">
                    <option>Choose a Sunday</option>
                    <option>1st Sunday</option>
                    <option>2nd Sunday</option>
                    <option>3rd Sunday</option>
                    <option>4th Sunday</option>
                    <option>5th Sunday</option> 
                </select>
    
                <select class="space dropdown">
                    <option>Select Color</option>
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
        
                <select class="space dropdown">
                    <option>Date Format</option>
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
     
                <select class="space dropdown">
                    <option>Choose a Sunday</option>
                    <option>1st Sunday</option>
                    <option>2nd Sunday</option>
                    <option>3rd Sunday</option>
                    <option>4th Sunday</option>
                    <option>5th Sunday</option> 
                </select>
    
                <select class="space dropdown">
                    <option>Select Color</option>
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
        
                <select class="space dropdown">
                    <option>Date Format</option>
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
     
                <select class="space dropdown">
                    <option>Choose a Sunday</option>
                    <option>1st Sunday</option>
                    <option>2nd Sunday</option>
                    <option>3rd Sunday</option>
                    <option>4th Sunday</option>
                    <option>5th Sunday</option> 
                </select>
    
                <select class="space dropdown">
                    <option>Select Color</option>
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
        
                <select class="space dropdown">
                    <option>Date Format</option>
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
     
                <select class="space dropdown">
                    <option>Choose a Sunday</option>
                    <option>1st Sunday</option>
                    <option>2nd Sunday</option>
                    <option>3rd Sunday</option>
                    <option>4th Sunday</option>
                    <option>5th Sunday</option> 
                </select>
    
                <select class="space dropdown">
                    <option>Select Color</option>
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
        
                <select class="space dropdown">
                    <option>Date Format</option>
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
     
                <select class="space dropdown">
                    <option>Choose a Sunday</option>
                    <option>1st Sunday</option>
                    <option>2nd Sunday</option>
                    <option>3rd Sunday</option>
                    <option>4th Sunday</option>
                    <option>5th Sunday</option> 
                </select>
    
                <select class="space dropdown">
                    <option>Select Color</option>
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
        
                <select class="space dropdown">
                    <option>Date Format</option>
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
     
                <select class="space dropdown">
                    <option>Choose a Sunday</option>
                    <option>1st Sunday</option>
                    <option>2nd Sunday</option>
                    <option>3rd Sunday</option>
                    <option>4th Sunday</option>
                    <option>5th Sunday</option> 
                </select>
    
                <select class="space dropdown">
                    <option>Select Color</option>
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
        
                <select class="space dropdown">
                    <option>Date Format</option>
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
     
                <select class="space dropdown">
                    <option>Choose a Sunday</option>
                    <option>1st Sunday</option>
                    <option>2nd Sunday</option>
                    <option>3rd Sunday</option>
                    <option>4th Sunday</option>
                    <option>5th Sunday</option> 
                </select>
    
                <select class="space dropdown">
                    <option>Select Color</option>
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
        
                <select class="space dropdown">
                    <option>Date Format</option>
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
     
                <select class="space dropdown">
                    <option>Choose a Sunday</option>
                    <option>1st Sunday</option>
                    <option>2nd Sunday</option>
                    <option>3rd Sunday</option>
                    <option>4th Sunday</option>
                    <option>5th Sunday</option> 
                </select>
    
                <select class="space dropdown">
                    <option>Select Color</option>
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
        
                <select class="space dropdown">
                    <option>Date Format</option>
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
                <button class="back" onClick={this.previous}>Back</button>
                <button onClick={this.continue}>Next</button>
            </div>
    </div>
    )
  }
}

export default AddMonthly
