import React, { ChangeEvent, useState, FormEvent } from 'react';
import Link from 'next/link';
import DropdownFilter from './DropdownFilter';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

const SignUpForm: React.FC = () => {
  const router = useRouter();

  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const [formData, setFormData] = useState<SignUpFormProps>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    gender: '',
  });

  const [signup, { loading, error }] = useMutation<{ createAccount: CreateAccountResponse }>(SIGNUP_MUTATION, {
    
    onCompleted: (data) => {
      if (data.createAccount.ok) {
        router.push('/check-email');
      } else {
        const error = data.createAccount.error;
        //the sign-up mutation (backend) returns an error with the code "There is a user with that email already"
        if (error === 'There is a user with that email already') {
          setEmailError('Email is already in use');
        } else {
          // console.log(error);
          setFormData((prevData) => ({ ...prevData, email: '' }));
        }
      }
    },    
    onError: (error) => {
      if (error.message === 'Bad Request Exception') {
        // Handle the bad request error by setting a custom error message
        setPasswordError('Invalid password. Please enter a password with at least 6 characters.');
      } else {
        console.error(error);
        // Handle other errors or display a generic error message
        setPasswordError('An error occurred. Please try again later.');
      }
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await signup({ variables: { input: formData } });

      if (data && data.createAccount && !data.createAccount.ok) {
        // console.log(data.createAccount.error);
        setFormData((prevData) => ({ ...prevData, email: '' }));
      }
    } catch (error) {
      // console.error(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    }

    if (name === 'password' && value.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleChangeGender = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, gender: value }));
  };

  return (
    <form className="row y-gap-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Already have an account yet?{' '}
          <Link href="/login" className="text-blue-1">
            Log in
          </Link>
        </p>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          <label className="lh-1 text-14 text-light-1">First Name</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          <label className="lh-1 text-14 text-light-1">Last Name</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
        {emailError && <p className="text-red-1">{emailError}</p>}
      </div>

      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          <label className="lh-1 text-14 text-light-1">Phone Number</label>
        </div>
      </div>
      {/* End .col */}

      {/* <div className="col-12 ">
        <div className=" ">
          <DropdownFilter />
        </div>
      </div> */}

      <div className="col-12">
        <div className="form-input">
          <select name="gender" value={formData.gender} onChange={handleChangeGender} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {/* <label className="lh-1 text-14 text-light-1">Gender</label> */}
        </div>
      </div>
      {/* End .col */}
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
        {passwordError && <p className="text-red-1">{passwordError}</p>}
      </div>
      {/* End .col */}

      <div className="col-12">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          {loading ? 'Signing up...' : 'Sign Up'}
          <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}

      {error && (
        <div className="col-12">
          <p className="text-red-1">{error.message}</p>
        </div>
      )}
    </form>
  );
};

export default SignUpForm;

const SIGNUP_MUTATION = gql`
  mutation createAccount($input: CreateAccountInput!) {
    createAccount(input: $input) {
      ok
      error
      token
    }
  }
`;

interface SignUpFormProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  gender: string; // Added gender field
}

interface CreateAccountResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}