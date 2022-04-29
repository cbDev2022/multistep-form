import React, { Component } from 'react'
import AddWeeklies from './AddWeeklies';
import Add2ndWkPrompt from './Add2ndWkPrompt';
import Add2ndWeekly from './Add2ndWeekly';
import AddMonthlyPrompt from './AddMonthlyPrompt';
import AddMonthly from './AddMonthly';
import AddAnotherMonthlyPrompt from './AddAnotherMonthlyPrompt';
import AddSpecialsPrompt from './AddSpecialsPrompt';
import AddSpecials from './AddSpecials'
import LandingPage from './LandingPage';
import SchedulePage from './SchedulePage';
import ChangesSubmitted from './ChangesSubmitted';
import ChooseFrequency from './ChooseFrequency';
import WeeklyOptions from './WeeklyOptions';
import SecondWeeklyOptions from './SecondWeeklyOptions';
import Review from './Review';
import Confirmation from './Confirmation';

export class AccountForm extends Component {
    state = {
        step: 1,
        accountNumber: '',
        errors: {},
    }

//Proceed to next step
nextStep = () => {
    const { step } = this.state;
    this.setState({
        step: step + 1
    });
}

skip1 = () => {
    const { step } = this.state;
    this.setState({
        step: step + 2
    });
}

skip2 = () => {
    const { step } = this.state;
    this.setState({
        step: step + 3
    });
}

//Go back to previous step
prevStep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    });
}

back2 = () => {
    const { step } = this.state;
    this.setState({
        step: step - 2
    });
}

new = () => {
    const { step } = this.state;
    this.setState({
        step: step - 15
    });
}

//Handle fields change
handleChange = input => e => {
    this.setState({[input]: e.target.value});
}

formValidation = () => {
    const { accountNumber } = this.state;
    let isValid = true;
    const errors = {};
    if(accountNumber.trim().length < 1) {
        errors.accountNumberLength = "You must enter an account number!";
        isValid = false;
    }
    this.setState({errors})
    return isValid;
}

onSubmit = (e) => {
    e.preventDefualt();
    const isValid = this.formValidation()
}

  render() {
    const { step } = this.state;
    const { accountNumber, errors } = this.state;
    const values = { accountNumber };

    switch(step) {
        case 1:
            return (
                <LandingPage
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    onSubmit={this.onSubmit}
                />)
        case 2:
            return (
                <SchedulePage
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    prevStep={this.prevStep}
                    skip1={this.skip1}
                    values={values}
                />)
        case 3:
            return (
                <ChangesSubmitted
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    back2={this.back2}
                    values={values}
                />)
        case 4:
            return (
                <ChooseFrequency
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />)
        case 5:
            return (
                <AddWeeklies
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />)
        case 6:
            return (
                <WeeklyOptions
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />)
        case 7:
            return (
                <Add2ndWkPrompt
                nextStep={this.nextStep}
                skip2={this.skip2}
                handleChange={this.handleChange}
                values={values}
            />)
        case 8:
            return (
                <Add2ndWeekly
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
            />)
        case 9:
            return (
                <SecondWeeklyOptions
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />)
        case 10:
            return (
                <AddMonthlyPrompt
                nextStep={this.nextStep}
                skip2={this.skip2}
                handleChange={this.handleChange}
                values={values}
            />)
        case 11:
            return (
                <AddMonthly
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
            />)
        case 12:
            return (
                <AddAnotherMonthlyPrompt
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
            />)
        case 13:
            return (
                <AddSpecialsPrompt
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                skip1={this.skip1}
                values={values}
            />)
        case 14:
            return (
                <AddSpecials
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
            />)
        case 15:
            return (
                <Review
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
            />)
        case 16:
            return (
                <Confirmation
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                new={this.new}
                values={values}
            />)
    }
  }
}

export default AccountForm
