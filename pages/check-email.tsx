import React, { FC } from "react";
import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Header3 from "../components/header/header-3";
import Copyright from "@/components/footer/footer-3/Copyright";
import { gql, useQuery } from "@apollo/client";

type User = {
  id: string;
  email: string;
  createdAt: string;
};


export const ALL_USER_QUERY = gql`
  query AllUser($page: Int!) {
    allUser(input: { page: $page }) {
      ok
      results {
        id
        status
        email
        firstName
        lastName
        phoneNumber
        fullName
        imageUri
        gender
        # role
        createdAt
      }
      totalPages
    }
  }
`;

const CheckEmailPage: FC = () => {

  const { loading, data } = useQuery<{ allUser: { results: User[] } }>(ALL_USER_QUERY, {
    variables: { page: 1 },
  });

  const activeUsers = data?.allUser?.results;
  const userEmail = activeUsers && activeUsers.length > 0 ? activeUsers[0].email : '';
console.log(activeUsers, 'emailddddd')
  return (
    <>
      <Seo pageTitle="Check Email" />
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
                  <h2>Check Your Email</h2>
                  <p>
                    We've sent a verification link to your email address. Please
                    check your inbox and click on the link to activate your
                    account.
                  </p>
                </div>

                <div className="row y-gap-20 pt-20">
                  <div className="col-12">
                    <div className="text-center px-30">
                      Didn't receive an email? Make sure to check your spam
                      folder. If you still don't see it, you can email us at <b>{userEmail}</b>
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

export default dynamic(() => Promise.resolve(CheckEmailPage), { ssr: false });
