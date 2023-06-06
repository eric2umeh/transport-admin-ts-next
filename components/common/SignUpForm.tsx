import React, {useState} from "react";
import Link from "next/link";
import AvatarUploader from "./AvatarUploader";

const SignUpForm = () => {

  const [imageCac, setImageCac] = useState("");
  const [imageLogo, setImageLogo] = useState("");
  const [imageId, setImageId] = useState("");
  //const [image, setImage] = useState("");

  
  return (
    <form className="row y-gap-20">
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Already have an account yet?{" "}
          <Link href="/others-pages/login" className="text-blue-1">
            Log in
          </Link>
        </p>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-14 text-light-1">Company Name</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-14 text-light-1">Company Address</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-14 text-light-1">Company Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="number" required />
          <label className="lh-1 text-14 text-light-1">Phone Number</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-14 text-light-1">Rc Number</label>
        </div>
      </div>
      {/* End .col */}
      <AvatarUploader picsName="CAC" image={imageCac} setImage={setImageCac}/>
      <AvatarUploader picsName="I.D" image={imageId} setImage={setImageId} />
      <AvatarUploader picsName="Company Logo" image={imageLogo} setImage={setImageLogo} />
      <div className="col-12">
        <div className="d-flex ">
          <div className="form-checkbox mt-5">
            <input type="checkbox" name="name" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
          </div>
          <div className="text-15 lh-15 text-light-1 ml-10">
            Email me exclusive Agoda promotions. I can opt out later as stated
            in the Privacy Policy.
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <Link
          type="submit"
          href="/"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign Up <div className="icon-arrow-top-right ml-15" />
        </Link>
      </div>
      {/* End .col */}
    </form>
  );
};

export default SignUpForm;
