import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import dynamic from 'next/dynamic';
import Seo from '../components/common/Seo';
import Header3 from '../components/header/header-3';
import Copyright from '../components/footer/footer-3/Copyright';
import { gql, useMutation } from '@apollo/client';
import Toast from '@/components/common/Toast';

interface ResetPasswordData {
  resetPassword: {
    ok: boolean;
    error?: string;
  };
}

interface ResetPasswordInput {
  code: string;
  password: string;
}

const RESET_PASSWORD_MUTATION = gql`
  mutation resetPassword($input: UserCodeInput!) {
      resetPassword(input: $input) {
      ok 
      error 
    }
  }
`;

const ResetPassword: FC = () => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);

  const [resetPassword, { loading, error }] = useMutation<ResetPasswordData, { input: ResetPasswordInput }>(RESET_PASSWORD_MUTATION);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      setToastMessage("Passwords don't match.");
      setShowToast(true);
      return;
    }

    if (password.length < 6) {
      setPasswordLengthError(true);
      setToastMessage('Password must be at least 6 characters long', );
      setShowToast(true);
      return;
    }

    try {
      const { data } = await resetPassword({
        variables: {
          input: {
            code: code,
            password: password,
          },
        },
      });

    if (data?.resetPassword?.ok) {
        console.log('Password reset successful');
        setToastMessage('Password reset successful');
        setShowToast(true);
      } else {
        console.error('Password reset failed:', data?.resetPassword?.error);
        setToastMessage(data?.resetPassword?.error || "Can't reset password.");
        setShowToast(true);
      }
    } catch (error) {
      console.error('Mutation error', error);
    }
  };
  
  return (
    <>
      <Seo pageTitle="Login" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <section className="layout-pt-sm layout-pb-sm bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-20 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                <form className="row y-gap-40" onSubmit={handleSubmit}>
                  {/* End .col */}
                  <h1 className="text-22 fw-500">Reset Your Password</h1>

                  <div className="col-12">
                    <div className="form-input ">
                      <input type="text" value={code} onChange={(e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}required />
                      <label className="lh-1 text-14 text-light-1">Code from email</label>
                    </div>
                  </div>
                  {/* End .col */}

                  <div className="col-12">
                    <div className="form-input ">
                      <input type="password" required value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                      <label className="lh-1 text-14 text-light-1">New Password</label>
                    </div>
                  </div>
                  {/* End .col */}

                  <div className="col-12">
                    <div className="form-input ">
                      <input type="password" required value={confirmPassword} onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}/>
                      <label className="lh-1 text-14 text-light-1">Confirm Password</label>
                    </div>
                  </div>
                  {/* End .col */}

                  <div className="col-12">
                    <button
                      type="submit" 
                      disabled={loading}
                      className="button py-20 -dark-1 bg-blue-1 text-white w-100"
                    >
                      {loading ? 'Resetting Password...' : 'Reset Password'}
                      <div className="icon-arrow-top-right ml-15" />
                    </button>
                  </div>
                  {/* End .col */}

                  {error && (
                    <div className="col-12">
                      <p className="text-red-1">Email or Password is incorrect</p>
                    </div>
                  )}
                  
                </form>
                {/* End .Login */}

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

export default dynamic(() => Promise.resolve(ResetPassword), { ssr: false });
