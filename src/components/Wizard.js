import React, { Component } from 'react'
import AddWeeklies from './AddWeeklies';
import Add2ndWeekly from './Add2ndWeekly';
import AddMonthly from './AddMonthly';
import AddSpecials from './AddSpecials'
import LandingPage from './LandingPage';
import ChooseFrequency from './ChooseFrequency';
import WeeklyOptions from './WeeklyOptions';
import SecondWeeklyOptions from './SecondWeeklyOptions';
import Review from './Review';
import Confirmation from './Confirmation';
import StepWizard from 'react-step-wizard';

export class Wizard extends Component {
   

render() {    

return (
    <StepWizard>
        <LandingPage />
        <ChooseFrequency />
        <AddWeeklies />
        <WeeklyOptions />
        <Add2ndWeekly />
        <SecondWeeklyOptions />
        <AddMonthly />
        <AddSpecials />
        <Review />
        <Confirmation />
        <LandingPage />

    
    </StepWizard>
)}
}

export default Wizard
