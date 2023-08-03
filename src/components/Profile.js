import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import empty from "../asset/frepiks.avif";
//api == https://opentdb.com/api.php?amount=10
function Profile() {
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  return (
    <div>
      <Header />
      {userInfo ? (
        <div className=" justify-center items-center text-center py-7">
          <h1 className=" text-4xl font-bold font-poppins ">
            {" "}
            Your name is {userInfo.userName}
          </h1>
          <h1 className=" text-4xl font-bold font-poppins py-5 ">
            {" "}
            Your email is {userInfo.email}
          </h1>
        </div>
      ) : (
        <div className=" text-center py-8 justify-center items-center">
          <p className="text-2xl font-bold font-poppins py-5 ">
            Please Log In to see your profile
          </p>
          <img className=" h-72 w-96 mx-auto" src={empty} alt="" />
        </div>
      )}
    </div>
  );
}

export default Profile;
