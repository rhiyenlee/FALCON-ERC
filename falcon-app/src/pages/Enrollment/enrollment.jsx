import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Payment from "./Payment";
import UploadCredentials from "./UploadCredentials";
import Verify from "./Verify";

export class Enrollment extends Component {
  state = {
    step: 1,
    firstName: "",
    middleName: "",
    lastName: "",
    codeName: "",
    schoolName: "",
    address: "",
    fbName: "",
    fbLink: "",
    mobileNum: "",
    email: "",
    password: "",
    confirmPassword: "",
    Error: "",
    LoginError: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  goToLogin = () => {
    this.setState({
      state: 4,
    });
  };

  goToSignup = () => {
    this.setState({
      step: 1,
    });
  };

  submit = (
    firstName,
    middleName,
    lastName,
    codeName,
    schoolName,
    address,
    fbName,
    fbLink,
    mobileNum,
    email,
    password,
    confirmPassword
  ) => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      middleName,
      lastName,
      codeName,
      schoolName,
      address,
      fbName,
      fbLink,
      mobileNum,
      email,
      password,
      confirmPassword,
      Error,
      LoginError,
    } = this.state;
    const values = {
      firstName,
      middleName,
      lastName,
      codeName,
      schoolName,
      address,
      fbName,
      fbLink,
      mobileNum,
      email,
      password,
      confirmPassword,
      Error,
      LoginError,
    };

    switch (step) {
      case 1:
        return (
          <PersonalInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            goToLogin={this.goToLogin}
          />
        );
      case 2:
        return (
          <UploadCredentials
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return (
          <Payment
            submit={this.submit}
            prevStep={this.prevStep}
            values={values}
            handleChange={this.handleChange}
          />
        );
      case 4:
        return (
          <Verify
            goToSignup={this.goToSignup} //submit method will come here
            prevStep={this.prevStep}
            values={values}
          />
        );
    }
  }
}

export default Enrollment;
