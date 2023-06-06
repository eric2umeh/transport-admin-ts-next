import React from "react";
import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Header3 from "../../components/header/header-3";
import Link from "next/link";
import ForgetpasswordForm from "../../components/common/ForgetpasswordForm";
import Copyright from "../../components/footer/footer-3/Copyright";

const ForgetPassword = () => {
  return (
    <>
      <Seo pageTitle="Forget Password" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                <ForgetpasswordForm />
                {/* End .Login */}

                <div className="row y-gap-20 pt-30">
                  <p className="mt-10">
                    Go Back to{" "}
                    <Link href="/companysignup/emailverification" className="text-blue-1">
                      Sign up 
                    </Link>
                  </p>
                  <div className="col-12">
                    <div className="text-center px-30">
                      By creating an account, you agree to our Terms of Service
                      and Privacy Statement.
                    </div>
                  </div>
                </div>
                {/* End .row */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End login section */}

      <Copyright />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(ForgetPassword), { ssr: false });
