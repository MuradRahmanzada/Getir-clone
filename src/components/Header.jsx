import React from "react";
import { Link } from "react-router-dom";
import {BiGlobe} from 'react-icons/bi';
import {RiUserFill, RiUserAddFill} from 'react-icons/ri';

const Header = () => {
  return (
    <div className="bg-brand-color">
      <div className="container mx-auto h-16 md:h-11 justify-center flex items-center md:justify-between">
        <a href="#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Getir_wordmark.svg" width={50} />
        </a>

        <nav className="hidden  md:flex gap-x-32 text-sm font-semibold">
          <a href="#" className="text-white flex items-center gap-x-2 text-opacity-80 hover:text-opacity-100 transition-all">
            <BiGlobe size={20}/>
            Türkçe (TR)
          </a>
          <a href="#" className="text-white flex items-center gap-x-2 text-opacity-80 hover:text-opacity-100 transition-all">
            <RiUserFill/>
            Giriş yap
          </a>
          <a href="#" className="text-white flex items-center gap-x-2 text-opacity-80 hover:text-opacity-100 transition-all">
            <RiUserAddFill/>
            Kayıt ol
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
