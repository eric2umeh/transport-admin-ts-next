import React, { ChangeEvent, useState, FormEvent, FC } from 'react';
import Link from 'next/link';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import AvatarUploader from './AvatarUploader';
import Toast from './Toast';
import Loading from './Loading';

const CREATE_COMPANY = gql`
  mutation createCompany($input: CreateCompanyInput!) {
    createCompany(input: $input) {
      ok
      error
      companyId
    }
  }
`;

interface CreateCompanyProps {
  name: string;
  address: string;
  email: string;
  phoneNumber: string;
  logo: string;
  cac: string;
  passport: string;
  rcNumber: string;
}

interface CreateCompanyResponse {
  ok: boolean;
  error: string | null;
  companyId: string | null;
}

const SignUpCompany: FC = () => {
  const router = useRouter();

  const [emailError, setEmailError] = useState<string>('');
  const [cac, setCac] = useState("");
  const [logo, setLogo] = useState("");
  const [passport, setPassport] = useState("");

  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [isNavigating, setIsNavigating] = useState(false);

  const [formData, setFormData] = useState<CreateCompanyProps>({
    name: '',
    address: '',
    email: '',
    phoneNumber: '',
    logo: '',
    cac: '',
    passport: '',
    rcNumber: '',
  });

  const [signup, { loading, error }] = useMutation<{ createCompany: CreateCompanyResponse }>(CREATE_COMPANY, {
    
    onCompleted: (data) => {
      if (data.createCompany.ok) {
        router.push('/check-email');
      } else {
        const error = data.createCompany.error;
        //the sign-up mutation (backend) returns an error with the code "There is a user with that email already"
        if (error === 'The user already have a company or company details already exists') {
          setEmailError('Email is already in use by a company');
        } else {
          // console.log(error);
          setFormData((prevData) => ({ ...prevData, email: '' }));
        }
      }
    },    
    onError: (error) => {
      if (error.message === 'Could not create company') {
        console.log(error, 'error')
        // Handle the bad request error by setting a custom error message
      } else {
        console.error(error);
        // Handle other errors or display a generic error message
      }
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await signup({ variables: { input: formData } });

      if (data && data.createCompany && !data.createCompany.ok) {
        // console.log(data.createCompany.error);
        setFormData((prevData) => ({ ...prevData, email: '' }));
      }
    } catch (error: any) {
      console.error(error);
      setToastMessage(error.message);
      setShowToast(true);
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
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <>
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
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            <label className="lh-1 text-14 text-light-1">Company's Name</label>
          </div>
        </div>
        {/* End .col */}

        <div className="col-12">
          <div className="form-input ">
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            <label className="lh-1 text-14 text-light-1">Company's Primary Address</label>
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
            <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            <label className="lh-1 text-14 text-light-1">Phone Number (Optional)</label>
          </div>
        </div>
        {/* End .col */}

        <div className="col-12">
          <div className="form-input ">
            <input type="rcNumber" name="rcNumber" value={formData.rcNumber} onChange={handleChange} />
            <label className="lh-1 text-14 text-light-1">RC Number if avalaible (Optional)</label>
          </div>
        </div>
        {/* End .col */}

        <AvatarUploader picsName="ID: Driver's License, Voter's Card, National Identification Document or International Passport" image={passport} setImage={setPassport} type="passport"/>
        <AvatarUploader picsName="Certificate of Incorporation, CAC (Optional)" image={cac} setImage={setCac} type="cac"/>
        <AvatarUploader picsName="Company Logo If available (Optional)" image={logo} setImage={setLogo} type="logo"/>

        <div className="col-12">
          <button
            type="submit"
            className="button py-20 -dark-1 bg-blue-1 text-white w-100"
          >
            {loading ? 'Creating company...' : 'Create Company'}
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

      {loading || isNavigating ? <Loading /> : null}
      {showToast && <Toast show={showToast} onClose={handleCloseToast} message={toastMessage} />}
    </>
  );
};

export default SignUpCompany;
