import React from "react";
import { FaPinterest, FaFacebook, FaTwitter, FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";


export function TopHeader() {
    return(
        <div className="flex justify-between px-[100px] py-[30px] ">
            <div>
                <img src="https://preview.colorlib.com/theme/egames/img/core-img/logo.png" alt="logo"></img>
            </div>

            <div>
                <form className="flex gap-x-2">
                    <input placeholder="search" className="bg-searchcolor px-4 py-2"></input>
                    <button className="bg-logincolor px-4 py-2 text-white hover:bg-black ">Login/Register</button>
                </form>
            </div>
        </div>
    )
}

 export function Header() {
    return(
     <div className="flex justify-between px-[100px] ">
        <div>
            <ul className="flex space-x-6">
            <ul className="flex space-x-6 ">
  <li>
    <a href="#" className="font-cursive hover:text-logincolor transition-colors duration-300">
      Home
    </a>
  </li>
  <li>
    <a href="#" className="font-cursive hover:text-logincolor transition-colors duration-300">
      Games
    </a>
  </li>
  <li>
    <a href="#" className="font-cursive hover:text-logincolor transition-colors duration-300">
      Pages
    </a>
  </li>
  <li>
    <a href="#" className="font-cursive hover:text-logincolor transition-colors duration-300">
      Articles
    </a>
  </li>
  <li>
    <a href="#" className="font-cursive hover:text-logincolor transition-colors duration-300">
      Reviews
    </a>
  </li>
</ul>

            </ul>
        </div>

        <div className="flex">
        <ul className="flex space-x-6">
        
        <li>
    <a href="#" className="font-cursive hover:text-logincolor transition-colors duration-300">
      <FaPinterest size={15} />
    </a>
  </li>
  <li>
    <a href="#" className="font-cursive hover:text-logincolor transition-colors duration-300">
      <FaFacebook size={15} />
    </a>
  </li>
  <li>
    <a href="#" className="font-cursive hover:text-logincolor transition-colors duration-300">
      <FaDiscord size={15} />
    </a>
  </li>
  <li>
    <a href="#" className="font-cursive hover:text-logincolor transition-colors duration-300">
      <FaLinkedin size={15} />
    </a>
  </li>
  <li>
    <a href="#" className="font-cursive hover:text-logincolor transition-colors duration-300">
      <FaInstagram size={15} />
    </a>
 </li>
        </ul>
        </div>
     </div>

    )
 }
 
 export default function NavBar() {
    return(
        <>
        <TopHeader />
        <Header />
        </>
    )
 }