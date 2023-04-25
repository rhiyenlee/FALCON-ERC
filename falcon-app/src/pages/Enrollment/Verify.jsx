import React, { Component } from "react";

export class Verify extends Component {
  continue = (e) => {
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
    } = this.props.values;
    e.preventDefault();
    this.props.nextStep();
  };

  back = () => {
    this.props.prevStep();
  };
  render() {
    const {
      values: {
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
      },
    } = this.props;
    return (
      <div>
        <div className="container md:mt-10">
          <div className="flex flex-col items-center">
            <div className="mt-3 text-xl font-semibold uppercase text-light-green-500">
              Congratulations!
            </div>
            <div className="text-lg font-semibold text-gray-500">
              Your Account has been created.
            </div>
            <a className="mt-10" href="/enrollment">
              <button className="h-10 px-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-gray-100">
                Close
              </button>
            </a>
          </div>
        </div>
        <div className="hide-all">
          <h1>Confirm Details</h1>
          <br />
          <p>firstName {firstName}</p>
          <p>middleName {middleName}</p>
          <p>lastName {lastName}</p>
          <p>codeName {codeName}</p>
          <p>schoolName {schoolName}</p>
          <p>address {address}</p>
          <p>fbName {fbName}</p>
          <p>fbLink {fbLink}</p>
          <p>mobileNum {mobileNum}</p>
          <p>email {email}</p>
          <p>password {password}</p>
        </div>
      </div>
    );
  }
}

export default Verify;
