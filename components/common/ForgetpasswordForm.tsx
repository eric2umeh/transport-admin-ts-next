import React from "react";
import Link from "next/link";

const ForgetpasswordForm = () => {
  return (
    <form className="row y-gap-20">
      <div className="col-12">
        <h1 className="text-22 fw-500">Forgot your Password?</h1>
          <div className="text-blue-1 mt-10">
            Enter Registered email address
          </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <Link
          type="submit"
          href="/"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Confirm <div className="icon-arrow-top-right ml-15" />
        </Link>
      </div>
      {/* End .col */}
    </form>
  );
};

export default ForgetpasswordForm;
