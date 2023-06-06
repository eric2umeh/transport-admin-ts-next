import React from "react";
import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Header3 from "../../components/header/header-3";
import Link from "next/link";
import ForgetpasswordForm from "../../components/common/ForgetpasswordForm";
import Copyright from "../../components/footer/footer-3/Copyright";

const EmailVerification = () => {
  return (
    <>
      <Seo pageTitle="Email Verification" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <section className="layout-pt-lg layout-pb-lg layout-mt-xl layout-mb-xl bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4 sectionTitle -md text-center">
             
                <h2 className="sectionTitle__title">
                    Thank you for signing up with Tfare.
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                    Please verify your email address in order to access your Tfare account
                </p>
                <div className="row y-gap-20 pt-30">
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
    </>
  );
};

export default dynamic(() => Promise.resolve(EmailVerification), { ssr: false });
