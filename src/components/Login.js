import React, { useState } from "react";
import Header from "./Header";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { RotatingLines } from "react-loader-spinner";
import { setUserInfo } from "../pages/AmazonSlice";
import { useDispatch } from "react-redux";

function Login() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const [userEmailErr, setUserEmailErr] = useState("");
  const [userPassErr, setUserPassErr] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("Your email is required");
    }
    if (!password) {
      setErrPassword("Your password is required");
    }

    if (email && password) {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          //signed in
          const user = userCredential.user;
          console.log(user);
          dispatch(
            setUserInfo({
              _id: user.uid,
              userName: user.displayName,
              email: user.email,
              image: user.photoURL,
            })
          );
          //....
          setLoading(false);
          setSuccessMsg("Logged In Successfully! ");
          setTimeout(() => {
            navigate("/quiz");
          }, 3000);
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          if (errorCode.includes("auth/invalid-email")) {
            setUserEmailErr(
              "Email must match with the one that you use to create the account"
            );
          }
          if (errorCode.includes("auth/wrong-password")) {
            setUserPassErr("Wrong password! try again");
          }
        });
      // setEmail("");
      // setPassword("")
    }
  };

  return (
    <div>
      <Header />
      <div className=" w-full bg-gray-100  ">
        <div className=" w-full bg-gray-100 h-screen   pb-10">
          {successMsg ? (
            <div className=" w-full flex justify-center items-center py-12">
              <p className=" border-[1px] border-green-600 text-green-500 font-poppins text-lg font-semibold px-6 py-2">
                {successMsg}
              </p>
            </div>
          ) : (
            <form className="md:w-[550px] sm:w-[360px] xs:w-[300px] mx-auto flex flex-col items-center">
              <div className="w-full bg-white shadow-2xl mt-12 p-6">
                <h2 className=" font-poppins text-xl font-semibold mb-4">
                  Login In
                </h2>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">
                    Email or mobile phone number
                  </p>
                  <input
                    type="email"
                    onChange={handleEmail}
                    value={email}
                    className=" w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-cyan-600 focus-within:shadow-amazonInput duration-100"
                  />
                  {errEmail && (
                    <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      {errEmail}
                    </p>
                  )}
                  {userEmailErr && (
                    <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center ">
                      {userEmailErr}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Password</p>
                  <input
                    type="password"
                    onChange={handlePassword}
                    value={password}
                    className=" w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-cyan-600 focus-within:shadow-amazonInput duration-100"
                  />
                  {errPassword && (
                    <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      {errPassword}
                    </p>
                  )}
                  {userPassErr && (
                    <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center">
                      {userPassErr}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleLogin}
                  className="btn relative inline-flex w-full mt-5 px-6 py-2 items-center  overflow-hidden transition-all bg-blue-700 rounded hover:bg-car group"
                >
                  {/* purple box */}
                  <span className="w-0 h-0 rounded bg-blue-900 absolute top-0 left-0 ease-out duration-300  transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                  <span className="w-full text-white transition-colors duration-300 ease-in-out text-center group-hover:text-white z-10">
                    Login Here
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
                <p className=" mb-2 mt-4 lg:ml-20 text-[15px] font-medium">
                  New to quiz site
                  <NavLink
                    className=" font-medium pl-1 text-car text-blue-600 hover:text-red-600  transition-all duration-300"
                    style={({ isActive }) => {
                      return isActive ? { color: "red" } : {};
                    }}
                    to="/"
                  >
                    register
                  </NavLink>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
