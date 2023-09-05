import React, { useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { motion } from "framer-motion";
import { RotatingLines } from "react-loader-spinner";
//for firebase https://www.youtube.com/watch?v=VMSeh2a6FIA&t=271s

function Register() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [phone, setPhone] = useState("");
 
  const [date, setDate] = useState("");

  //error messages start

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");
  const [errPhone, setErrPhone] = useState("");
 
  const [errDate, setErrDate] = useState("");
  const [firebaseErr, setFirebaseErr] = useState("");
  //loading function start
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  //handle function
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setErrCPassword("");
  };

  //email validation
  const emailValidation = (email) => {
    return String(email).toLowerCase().match("@gmail.com");
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };

 

  const handleDate = (e) => {
    setDate(e.target.value);
    setErrDate("");
  };

  //submit button start here
  const handleRegistration = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your name");
    }
    
    if (!date) {
      setErrDate("your date of birth is required");
    }
    if (!email) {
      setErrEmail("Your email is required");
      setFirebaseErr("");
    } else {
      if (!emailValidation(email)) {
        setErrEmail("Enter a valid email");
      }
    }
    if (!password) {
      setErrPassword("Your password is required");
    } else {
      if (password.length < 6) {
        setErrPassword("Password must be at least 6 characters");
      }
    }
    if (!cpassword) {
      setErrCPassword("Confirm your password");
    } else {
      if (cpassword !== password) {
        setErrCPassword("Password must match");
      }
    }
    if (!phone) {
      setErrPhone("Phone number is required");
    } else {
      if (phone.length !== 11) {
        setErrPhone("Phone number must be 11 digit");
      }
    }

    if (
      clientName &&
      email &&
      emailValidation(email) &&
      password &&
      password.length >= 6 &&
      cpassword &&
      cpassword === password &&
      date &&
      phone.length === 11
    ) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: clientName,
            // photoURL: {amazonLogo},
          });
          //signed in
          const user = userCredential.user;

          setLoading(false);
          setSuccessMsg("Account Created Successfully!");
          setTimeout(() => {
            navigate("/login");
          }, 3000);
          // ..........
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            setFirebaseErr("Email is already in use please");
          }
          //...
        });
      // setClientName("");
      // setEmail("");
      // setDate("");
      // setPassword("");
      // setCPassword("");
      // setAge("");
      // setPhone("");
    }
  };

  return (
    <div className=" w-full bg-gray-100  ">
      <div className=" w-full bg-gray-100 h-screen xl:h-fit  pb-10">
        <form className="md:w-[550px] sm:w-[360px] xs:w-[300px] mx-auto flex flex-col items-center">
          <div className="w-full bg-white shadow-2xl mt-12 p-6">
            <h2 className=" font-poppins text-xl font-semibold mb-4">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your Name</p>
                <input
                  onChange={handleName}
                  value={clientName}
                  type="text"
                  className=" w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-cyan-600 focus-within:shadow-amazonInput duration-100"
                />
                {errClientName && (
                  <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {errClientName}
                  </p>
                )}
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">
                    Email or mobile phone number
                  </p>
                  <input
                    onChange={handleEmail}
                    type="email"
                    value={email}
                    className=" w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-cyan-600 focus-within:shadow-amazonInput duration-100"
                  />

                  {errEmail && (
                    <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      {errEmail}
                    </p>
                  )}
                  {firebaseErr && (
                    <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      {firebaseErr}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  onChange={handlePassword}
                  value={password}
                  type="password"
                  className=" w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-cyan-600 focus-within:shadow-amazonInput duration-100"
                />
                {errPassword && (
                  <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {errPassword}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Confirm Password</p>
                <input
                  onChange={handleCPassword}
                  value={cpassword}
                  type="password"
                  className=" w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-cyan-600 focus-within:shadow-amazonInput duration-100"
                />
                {errCPassword && (
                  <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {errCPassword}
                  </p>
                )}
                <p className="text-xs text-gray-600">
                  Password must be at least 6 characters.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">Phone Number</p>
              <input
                onChange={handlePhone}
                type="number"
                value={phone}
                className=" w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-cyan-600 focus-within:shadow-amazonInput duration-100"
              />
              {errPhone && (
                <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                  {errPhone}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">Date of birth</p>
              <input
                onChange={handleDate}
                type="date"
                value={date}
                className=" w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-cyan-600 focus-within:shadow-amazonInput duration-100"
              />

              {errDate && (
                <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                  {errDate}
                </p>
              )}
            </div>
            <button
              onClick={handleRegistration}
              className="btn relative inline-flex w-full mt-5 px-6 py-2 items-center  overflow-hidden transition-all bg-blue-700 rounded hover:bg-car group"
            >
              {/* purple box */}
              <span className="w-0 h-0 rounded bg-blue-900 absolute top-0 left-0 ease-out duration-300 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-white transition-colors duration-300 ease-in-out text-center group-hover:text-white z-10">
                Register
              </span>
            </button>

            {loading && (
              <div className=" flex justify-center">
                <RotatingLines
                  strokeColor="#febd69"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="50"
                  visible={true}
                />
              </div>
            )}

            {successMsg && (
              <div>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className=" mt-2 text-base font-poppins font-semibold text-green-500 border-[1px] border-green-500 px-2 text-center"
                >
                  {successMsg}
                </motion.p>
              </div>
            )}

            <p className=" mb-2 mt-4 lg:ml-20 text-[15px] font-medium">
              Already have an account?
              <NavLink
                className=" font-medium pl-1 text-car text-blue-600 hover:text-red-600  transition-all duration-300"
                style={({ isActive }) => {
                  return isActive ? { color: "red" } : {};
                }}
                to="/login"
              >
                Log in
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
