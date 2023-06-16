import React, { useState } from "react";
import DropdownFilter from "../../../components/common/DropdownFilter";
import AvatarUploader from "../../../components/common/AvatarUploader";

const PersonalInfo = () => {
  const [imageLogo, setImageLogo] = useState("")
  return (
    <>
      <form>
        <AvatarUploader picsName="Company Logo" image={imageLogo} setImage={setImageLogo} type={"logo"}  />
        {/* End AvatarUploader*/}

        <div className="border-top-light mt-30 mb-30" />

        <div className="col-xl-9">
          <div className="row x-gap-20 y-gap-20">

            <div className="col-md-6">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">Company Name</label>
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">Company Address</label>
              </div>
            </div>
            {/* End col-6 */}

            {/* <div className="col-md-6">
              <div className="form-input ">
                <DropdownFilter />
              </div>
            </div>
            End col-6 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Company Email
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Phone Number
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  RC Number
                </label>
              </div>
            </div>
            {/* End col-6 */}
            
          </div>
        </div>
        {/* End col-xl-9 */}

        <div className="d-inline-block pt-30">
          <button
            type="submit"
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          >
            Save Change<div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
