import React, { useState } from "react";


import { Link } from "react-router-dom";


function Header() {
  
 
  const [showAll, setShowAll] = useState(false);

  return (
    <div className=" w-full sticky top-0 z-50">
      <div className=" w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        {/* =====image start here====== */}
        <Link to="/quiz">
          <div className=" px-2 h-[80%] flex items-center border border-transparent hover:border-cyan-600 cursor-pointer transition-all duration-300">
            {/* <img className=" w-24 h-12 " src={amazonLogo} alt="logo"></img> */}
            <h1 className=" hidden md:inline-flex text-2xl font-bold italic">Dexs<span className="text-cyan-600">tero</span>xy</h1>
       <h1 className=" md:hidden font-bold">Si<span className=" text-cyan-600">xt</span>us</h1>
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

        <div className="h-10 rounded-md hidden lgl:flex flex-grow relative ">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-mono flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All<span></span>
            <i className="fa-sharp fa-solid fa-caret-down"></i>
          </span>

          {showAll && (
            <div>
              <ul className=" absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50">
                {/* ============================================================== */}
                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  All department
                </li>
                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  educational
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Sport wears
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Shoe
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  jacket/hoddy
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  cap/hat/capwarmer
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  musical instrument
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  All department
                </li>
                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  educational
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Sport wears
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Shoe
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  jacket/hoddy
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  cap/hat/capwarmer
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  musical instrument
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  All department
                </li>
                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  educational
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Sport wears
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Shoe
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  jacket/hoddy
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  cap/hat/capwarmer
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  musical instrument
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  All department
                </li>
                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  educational
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Sport wears
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Shoe
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  jacket/hoddy
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  cap/hat/capwarmer
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  musical instrument
                </li>
                {/* ========================================================= */}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 duration-300 transition-all text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <i className="fa-solid fa-magnifying-glass fa-beat"></i>
          </span>
        </div>

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
           
            <p className=" text-sm font-semibold hover:border-b-2 hover:border-b-cyan-600 -mt-1 text-whiteText ">
              Login
            
            </p>
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
  );
}

export default Header;