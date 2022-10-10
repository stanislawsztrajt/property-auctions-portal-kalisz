import { faBuildingWheat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className="text-gray-600 body-font h-1/12">
      <div className="container flex flex-col flex-wrap items-center p-4 mx-auto md:flex-row">
        <Link href='/' className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          <>
            <FontAwesomeIcon
              className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
              icon={faBuildingWheat}
            />
            <span className="ml-3 text-xl">Property auctions</span>
          </>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <Link href='/' className="mr-5 hover:text-gray-900">Strona główna</Link>
          <Link href='/about' className="mr-5 hover:text-gray-900">O Aplikacji</Link>
          <Link href='/auth/login' className="mr-5 hover:text-gray-900">Login</Link>
          <Link href='/user/saved-auctions' className="mr-5 hover:text-gray-900">Zapisane</Link>
        </nav>
        <Link href={'/auth/register'}>
          <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0">
            Rejestracja
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
