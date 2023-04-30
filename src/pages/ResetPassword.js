import React from 'react';
import CustomInput from '../components/CustomInput';

const ResetPassword = () => {
  return (
    <div className="py-5" style={{background: '#f1c40f', minHeight: '100vh'}}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4 d-flex justify-content-center">
        <form action="">
          <h3 className="text-center"> Reset Password</h3>
          <p className="text-center">Please Enter your email</p>
          <CustomInput type="password" label="New password" id="email" placehoder="New password" />
          <CustomInput
            type="password"
            label="Confirm password"
            placehoder="Confirm password"
            id="password"
          />
          <button
            type="submit"
            className="border-0 px-3 py-2 rounded-3 text-white fw-bold w-100"
            style={{background: '#f1c40f'}}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
