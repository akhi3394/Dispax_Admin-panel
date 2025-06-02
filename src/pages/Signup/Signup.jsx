import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const OutlinedInput = ({ label, type, placeholder }) => {
  const [value, setValue] = useState('');
  return (
    <div className="relative mb-6">
      <label className="absolute -top-2 left-3 px-1 bg-white text-sm text-[#1E0909] z-[1]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-[546px] h-[64px] border border-[#858080] rounded-lg px-3 pt-4 pb-2 text-base text-black focus:outline-none focus:border-purple-600 placeholder:text-[#858080]"
      />
    </div>
  );
};

const Signup = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // You can add form validation here later
    navigate('/dashboard');
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen"
      style={{
    background: 'radial-gradient(circle at center, #080625 100%, #6F1AFF 0%)'
  }}
  >
      <img src='/LogoDispax.png' alt="Dispax Logo" className="mb-5 w-[88px] h-[33px]"/>
      <div className="bg-white p-10 rounded-lg text-black w-[578px] min-h-[549px] flex flex-col items-center">
        <h2 className="text-[42px] font-extrabold text-[#000000] mb-5 text-center">Welcome</h2>

        <div className="w-[546px] flex flex-col">
          <OutlinedInput type="text" label="Name" placeholder="Enter Full Name" />
          <OutlinedInput type="email" label="Email" placeholder="Enter Email" />
          <OutlinedInput type="password" label="Password" placeholder="Enter Password" />
          <OutlinedInput type="password" label="Re-enter Password" placeholder="Confirm Password" />

          <label className="flex items-center gap-2 text-[#858080] text-[12px] font-normal mb-5">
            <input
              type="checkbox"
              className="w-4 h-4 border-2 rounded-sm checked:bg-[#6F1AFF] checked:border-[#6F1AFF] focus:outline-none relative
              before:content-[''] before:absolute before:left-[4px] before:top-[0px] before:w-[6px] before:h-[11px] before:border-r-2 before:border-b-2 before:border-white before:rotate-45 before:opacity-0
              checked:before:opacity-100"
            />
            By clicking Sign in,you agree with our<span className="font-bold">Terms & Conditions</span>and<span className="font-bold">Privacy Policy</span>
          </label>

          <button className="bg-[#6F1AFF] text-white p-2 w-full rounded-[10px] text-[20px] font-bold h-[64px]">Sign up</button>

          <p className="mt-4 text-[14px] text-left">
            Have an account? <Link to="/login" className="text-[#6F1AFF] text-[14px]"
              onClick={handleLogin}
            >Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
