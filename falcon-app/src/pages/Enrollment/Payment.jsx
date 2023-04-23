import { useStepperContext } from "./context/StepperContext";
import BpiQr from "../../Images/bpi_qrcode.png";
import PnbQr from "../../Images/pnb-digital-app-qr.png";
import GCashQr from "../../Images/gcash-qr.jpg";

export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
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
    </div>
  );
}
