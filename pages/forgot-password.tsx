import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import dynamic from 'next/dynamic';
import Seo from '../components/common/Seo';
import Header3 from '../components/header/header-3';
import Copyright from '../components/footer/footer-3/Copyright';
import { gql, useMutation } from '@apollo/client';
import Toast from '@/components/common/Toast';

const FORGOT_PASSWORD_MUTATION = gql`
  mutation forgotPassword($input: ForgotPasswordInput!) {
      forgotPassword(input: $input) {
      ok 
      error 
    }
  }
`;

const ForgotPassword: FC = () => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [email, setEmail] = useState('');
  const [forgotPassword, { loading, error }] = useMutation(FORGOT_PASSWORD_MUTATION);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await forgotPassword({
        variables: {
          input: {
            email: email,
          },
        },
      });

      if (data?.forgotPassword?.ok) {
        console.log('Password reset successful');
        setToastMessage('Message sent to your email');
        setShowToast(true);
      } else {
        console.error('Password reset failed:', data.forgotPassword?.error);
        setToastMessage(data?.forgotPassword?.error);
        setShowToast(true);
      }
    } catch (error) {
      // Handle any errors from the mutation
      console.error('Mutation error', error);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  return (
    <>
      <Seo pageTitle="Login" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <section className="layout-pt-md layout-pb-md bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                <form className="row y-gap-60" onSubmit={handleSubmit}>
                  {/* End .col */}
                  <h1 className="text-22 fw-500">Forgot Password</h1>

                  <div className="col-12">
                    <div className="form-input ">
                      <input type="text" required value={email} onChange={handleEmailChange}/>
                      <label className="lh-1 text-14 text-light-1">Email</label>
                    </div>
                  </div>
                  {/* End .col */}

                  <div className="col-12">
                    <button
                      type="submit" 
                      disabled={loading}
                      className="button py-20 -dark-1 bg-blue-1 text-white w-100"
                    >
                      {loading ? 'Sending Code...' : 'Code Sent'}
                      <div className="icon-arrow-top-right ml-15" />
                    </button>
                  </div>
                  {/* End .col */}
                </form>
                {/* End .Login */}

                <div className="row y-gap-20 pt-30">
                  <div className="col-12">
                    <div className="text-center px-30">
                      Check you email and follow link to reset password.
                    </div>
                  </div>
                </div>
                {/* End .row */}
              </div>
            </div>
          </div>
        </div>
        {showToast && <Toast show={showToast} onClose={handleCloseToast} message={toastMessage} />}
      </section>
      {/* End login section */}

      <Copyright />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(ForgotPassword), { ssr: false });
