import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className=" w-full sticky top-0 z-50">
      <div className=" w-full bg-black text-white px-4 py-3 flex items-center gap-4">
        {/* =====image start here====== */}
        <Link to="/quiz">
          <div className=" px-2 h-[80%] flex items-center border border-transparent hover:border-cyan-600 cursor-pointer transition-all duration-300">
            {/* <img className=" w-24 h-12 " src={amazonLogo} alt="logo"></img> */}
            <h1 className=" hidden md:inline-flex text-2xl font-bold italic">
              Dexs<span className="text-cyan-600">tero</span>xy
            </h1>
            <h1 className=" md:hidden font-bold">
              Si<span className=" text-cyan-600">xt</span>us
            </h1>
          </div>
        </Link>
        <Link to="/login">
          <div className=" flex mt-2  items-start justify-center headerHover relative">
           
              <p className=" text-sm font-semibold hover:border-b-2 hover:border-b-cyan-600 -mt-1 text-whiteText ">
                
              </p>
            
          </div>
        </Link>

        {/* =====image end here====== */}

        {/* =====delivering start here====== */}

        <div className=" hidden mdl:inline-flex px-2 h-[80%] items-center border  border-transparent hover:border-cyan-600 cursor-pointer transition-all duration-300">
          <i className="fa-solid fa-location-dot"></i>
          <p className=" text-sm text-lightText font-medium flex flex-col">
            Quiz-App
          </p>
        </div>

        {/* =====delivering end here====== */}

        {/* =====seach start here====== */}

      <div className=" text-black"> ooooooooooooooooooooooooooooooooo</div>

        {/* =====sarch end here====== */}

        {/* =====signin start here====== */}

        <Link to="/profile">
          <div className="  flex flex-col items-start justify-center headerHover">
            <p className="text-sm font-semibold hover:border-b-cyan-600 duration-300 hover:border-b-2 -mt-1 text-whiteText hidden mdl:inline-flex">
              Profile
            </p>
          </div>
        </Link>
        {/* =====signin end here====== */}

        {/* =====order start here====== */}
        <Link to="/login">
          <div className=" flex  items-start justify-center headerHover relative">
            {userInfo ? (
              <p className="text-sm font-semibold hover:border-b-2 hover:border-b-cyan-600 -mt-1 text-whiteText"></p>
            ) : (
              <p className=" text-sm font-semibold hover:border-b-2 hover:border-b-cyan-600 -mt-1 text-whiteText ">
                Login
              </p>
            )}
          </div>
        </Link>
        {/* when the time comes i will on comment it */}
        {/* <div className=" hidden lgl:flex flex-col items-start justify-center headerHover">
          <p className=" text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div> */}

        {/* =====order end here====== */}

        {/* =====cart start here====== */}

        {/* =====cart end here====== */}
      </div>
    </div>


// https://youtu.be/tYozKtrs_Ck for car booking
  );
}

export default Header;
