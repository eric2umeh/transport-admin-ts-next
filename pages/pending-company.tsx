import React, { FC, useState } from "react";
import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Header3 from "../components/header/header-3";
import Copyright from "@/components/footer/footer-3/Copyright";
import { gql, useQuery } from "@apollo/client";
import { ALL_COMPANY_QUERY } from "./check-email";

type Company = {
  id: string;
  name: string;
  status: string;
};

const PendingCompany: FC = () => {

  const { data: companyData } = useQuery<{ allCompany: { results: Company[] } }>(ALL_COMPANY_QUERY, {
    variables: { page: 1 },
  });

  const inactiveCompanies = companyData?.allCompany.results
  .filter((company: Company) => company.status === 'Pending')
  .map((company: Company) => ({
    id: company.id,
    name: company.name,
  }));

  return (
    <>
      <Seo pageTitle="Pending Company" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <section className="layout-pt-lg layout-pb-lg sm:py-90 bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                <div className="text-center">
                  <h2>Thank you again for registering with us</h2>
                  <p>
                    Your company <b>Delta Line</b> is still pending. Please check back later for repsonse.
                  </p>
                </div>

                <div className="row y-gap-20 pt-20">
                  <div className="col-12">
                    <div className="text-center px-30">
                      Didn't receive an email? Make sure to check your spam
                      folder. If you still don't see it, you can email us at <b>tfaregroup@gmail.com</b>
                    </div>
                  </div>
                </div>
                {/* End .row */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Check Email section */}

      <Copyright />
    </>
  );
};

export default dynamic(() => Promise.resolve(PendingCompany), { ssr: false });
