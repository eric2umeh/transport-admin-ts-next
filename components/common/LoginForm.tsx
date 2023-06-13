import React, { FC, FormEvent, useState } from 'react';
import Link from 'next/link';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import withAuth from '@/utils/withAuth';
import Toast from './Toast';
import Loading from './Loading';

const LOGIN_MUTATION = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      ok
      error
      token
    }
  }
`;

const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);
  const [isNavigating, setIsNavigating] = useState(false);

  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await login({ variables: { input: { email: email.toLowerCase(), password } } });
      
    if (data.login.ok) {
      localStorage.setItem('token', data.login.token);
      console.log(data.login.token);
      setIsNavigating(true); // Set isNavigating to true before navigation
      router.push('/');
    } else {
      setToastMessage(data.login.error);
      setShowToast(true);
    }
    } catch (error: any) {
      console.error(error);
      setToastMessage(error.message);
      setShowToast(true);
    }
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <>
      <form className="row y-gap-20" onSubmit={handleLogin}>
        <div className="col-12">
          <h1 className="text-22 fw-500">Welcome back</h1>
          <p className="mt-10">
            Don&apos;t have an account yet?{' '}
            <Link href="/signup" className="text-blue-1">
              Sign up for free
            </Link>
          </p>
        </div>
        {/* End .col */}

        <div className="col-12">
          <div className="form-input ">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="lh-1 text-14 text-light-1">Email</label>
          </div>
        </div>
        {/* End .col */}

        <div className="col-12">
          <div className="form-input ">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
            <label className="lh-1 text-14 text-light-1">Password</label>
          </div>
        </div>
        {/* End .col */}

        <div className="col-12">
          <a href="/forgot-password" className="text-14 fw-500 text-blue-1 underline">
            Forgot your password?
          </a>
        </div>
        {/* End .col */}

        <div className="col-12">
          <button
            type="submit"
            className="button py-20 -dark-1 bg-blue-1 text-white w-100"
            disabled={loading}
            >
            {loading ? 'Signing In...' : 'Sign In'}{' '}
            <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
        {/* End .col */}
      </form>

      {loading || isNavigating ? <Loading /> : null}
      {showToast && <Toast show={showToast} onClose={handleCloseToast} message={toastMessage} />}
    </>
  );
};

export default withAuth(LoginForm);
