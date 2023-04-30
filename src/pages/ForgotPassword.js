import React from 'react';
import CustomInput from '../components/CustomInput';

const ForgotPassword = () => {
  return (
    <div className="py-5" style={{background: '#f1c40f', minHeight: '100vh'}}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4 d-flex justify-content-center">
        <form action="">
          <h3 className="text-center">Forgot Password</h3>
          <p className="text-center">Please Enter your email</p>
          <CustomInput type="text" label="Email Address" id="email" placehoder="Emai" />

          <button
            type="submit"
            className="border-0 px-3 py-2 rounded-3 text-white fw-bold w-100"
            style={{background: '#f1c40f'}}
          >
            Forgot Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
