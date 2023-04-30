import React from 'react';
import CustomInput from '../components/CustomInput';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className="py-5" style={{background: '#2ecc71', minHeight: '100vh'}}>
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <form action="">
          <h3 className="text-center">Login</h3>
          <p className="text-center">Login your account to continue</p>
          <CustomInput type="text" label="Email Address" id="email" />
          <CustomInput
            type="password"
            placehoder="Enter your password"
            id="password"
            label="Password"
          />
          <div className="mb-3 text-end">
            <Link to="forgotpassword">Forgot password</Link>
          </div>
          <Link
            to="/admin"
            type="submit"
            className="border-0 px-3 py-2 rounded-3 text-white fw-bold w-100 text-center"
            style={{background: '#2ecc71'}}
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
