import React, { Component } from "react";
import "./style/enrollment.css";

export class UploadCredentials extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = () => {
    this.props.prevStep();
  };

  render() {
    return (
      <div className="upload-credentials-container">
        <h3 className="upload-documents">Upload the Documents</h3>

        <form action="">
          <div className="cert-latin">
            <div className="latin-honors">
              <p>Certification of Latin Honors</p>
            </div>
            <input
              type="file"
              className="file-latin-honors relative block min-w-0 rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:rounded-md file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary "
            />
          </div>
          <div className="id-card-container">
            <div className="valid-id">
              <p>Valid Identification Card</p>
            </div>
            <input
              type="file"
              className="file-latin-honors relative block min-w-0 rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:rounded-md file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary "
            />
          </div>
          <div className="id-picture-container">
            <div className="id-picture">
              <p>1x1 ID Picture</p>
            </div>
            <input
              type="file"
              className="file-latin-honors relative block min-w-0 rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:rounded-md file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary "
            />
          </div>
          <button className="back-btn-uploadcredentials" onClick={this.back}>
            Back
          </button>
          <button
            className="next-btn-uploadcredentials"
            onClick={this.continue}
          >
            Next
          </button>
        </form>
      </div>
    );
  }
}

export default UploadCredentials;
