import React, { Component } from "react";

export class PersonalInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="infoContainer">
        <p className="personal-info">Personal Information</p>

        <form action="" method="">
          <div className="first-col">
            <label>First Name </label>
            <input
              type="text"
              name="firstname"
              defaultValue={values.firstName}
              onChange={handleChange("firstName")}
              id=""
              className="firstname"
              placeholder="First Name"
              required
            />
            <label>Middle Name </label>
            <input
              type="text"
              name="midname"
              defaultValue={values.middleName}
              onChange={handleChange("middleName")}
              id=""
              className="midname"
              placeholder="Middle Name"
              required
            />
            <label>Last Name </label>
            <input
              type="text"
              name="lastname"
              defaultValue={values.lastName}
              onChange={handleChange("lastName")}
              id=""
              className="lastname"
              placeholder="Last Name"
              required
            />
            <label>Code Name </label>
            <input
              type="text"
              name="codename"
              defaultValue={values.codeName}
              onChange={handleChange("codeName")}
              id=""
              className="codename"
              placeholder="ex. PtFtHAS13"
              required
            />
          </div>
          <div className="second-col">
            <label>School Graduated </label>
            <input
              type="text"
              name="schoolname"
              defaultValue={values.schoolName}
              onChange={handleChange("schoolName")}
              id=""
              className="school"
              placeholder="School"
              required
            />

            <label>Address </label>
            <input
              type="address"
              name="address"
              defaultValue={values.address}
              onChange={handleChange("address")}
              id=""
              className="address"
              placeholder="Address"
              required
            />

            <label>Facebook Name </label>
            <input
              type="text"
              name="fbname"
              defaultValue={values.fbName}
              onChange={handleChange("fbName")}
              id=""
              className="fb-name"
              placeholder="Facebook Name"
              required
            />

            <label>Facebook Link </label>
            <input
              type="text"
              name="fblink"
              defaultValue={values.fbLink}
              onChange={handleChange("fbLink")}
              id=""
              className="fb-link"
              placeholder="Facebook Link"
              required
            />
          </div>
          <div className="third-col">
            <label for="phone">Mobile Number: </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              defaultValue={values.mobileNum}
              onChange={handleChange("mobileNum")}
              className="mobilenum"
              pattern="(^(+)(\d){12}$)|(^\d{11}$)"
              placeholder="+63"
              required
            ></input>

            <label for="size">Tshirt Size: </label>

            <select className="tshirtsize" name="size" id="size">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="xl">XLarge</option>
              <option value="xxl">XXLarge</option>
            </select>
          </div>

          <p className="account-info">Account Information</p>
          <div className="fourth-col">
            <label>Email </label>
            <input
              type="email"
              name="email"
              defaultValue={values.email}
              onChange={handleChange("email")}
              id=""
              className="email"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="fifth-col">
            <label>Password </label>
            <input
              type="password"
              name="password"
              defaultValue={values.password}
              onChange={handleChange("password")}
              id=""
              className="password"
              placeholder="Password"
              required
            />
          </div>

          <div className="sixth-col">
            <label>Confirm Password </label>
            <input
              type="password"
              name="confirmpass"
              defaultValue={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
              id=""
              className="confirmpass"
              placeholder="Confirm Password"
              required
            />
          </div>
          <button className="next-btn-personalinfo" onClick={this.continue}>
            Next
          </button>
        </form>
      </div>
    );
  }
}

export default PersonalInfo;
