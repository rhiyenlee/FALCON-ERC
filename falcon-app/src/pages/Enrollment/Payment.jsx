import React, { Component } from "react";
import BpiQr from "../../Images/bpi_qrcode.png";
import PnbQr from "../../Images/pnb-digital-app-qr.png";
import GCashQr from "../../Images/gcash-qr.jpg";

export class Payment extends Component {
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
    this.props.submit(
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
    );
  };
  back = () => {
    this.props.prevStep();
  };

  render() {
    const {
      values: { email },
    } = this.props;

    return (
      <div className="paymentContainer">
        <div className="bpi-payment-col">
          <p className="payment-title"> Mode of Payment </p>

          <p className="bpi-title"> Bank of the Philippine Islands (BPI)</p>

          <img src={BpiQr} alt="bpi-qr" className="bpi-qr-png" />

          <p className="bpi-acc-details">
            {" "}
            Account Name: F.A.L Conducive Engineering Review Center <br />
            Account No.: 0969612666
          </p>
        </div>
        <div className="pnb-payment-col">
          <p className="pnb-title"> Philippine National Bank (PNB) </p>

          <img src={PnbQr} alt="pnb-qr" className="pnb-qr-png" />

          <p className="pnb-acc-details">
            {" "}
            Account Name: F.A.L Conducive Engineering Review Center <br />
            Account No.: 165310223342
          </p>
        </div>
        <div className="gcash-payment-col">
          <p className="gcash-title"> GCash </p>

          <img src={GCashQr} alt="gcash-qr" className="gcash-qr-png" />

          <p className="gcash-acc-details">
            {" "}
            Account Name: Rosalyn Luz <br />
            GCash No.: 09457343928
          </p>
        </div>
        <p className="proof-payment">Proof of Payment</p>
        <div className="proof-payment-col">
          <label>Reference Number</label>
          <input
            type="text"
            name="ref-number"
            id=""
            className="ref-num"
            placeholder="Minimum of 12 digits"
          />
        </div>
        <p className="proof-payment">Proof of Payment</p>
        <div className="proof-payment-col">
          <label>Reference Number</label>
          <input
            type="text"
            name="ref-number"
            id=""
            className="ref-num"
            placeholder="Minimum of 12 digits"
          />
          <div className="screenshot-container">
            <div className="screenshot-image">
              <p>Screenshot or Image of Receipt</p>
            </div>
            <input
              type="file"
              className="file-screenshot relative block min-w-0 rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:rounded-md file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary "
            />
          </div>
        </div>
        <form action="">
          <p className="email-hide">Email {email}</p>
          <button className="back-btn-uploadcredentials" onClick={this.back}>
            Back
          </button>
          <button className="next-btn-payment" onClick={this.continue}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Payment;
