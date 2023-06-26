import React from 'react';
import { HeaderAcceso } from './HeaderAcceso';
import { AiOutlineMenu } from 'react-icons/ai';
import '../../../tailwind.config';
import '../../Styles/styles.css';

function menuHandler(e) {
  let list = document.querySelector('ul');
  if (e.target.name === 'menu') {
    e.target.name = 'close';
    list.classList.add('top-[88px]');
    list.classList.add('opacity-100');
  } else {
    e.target.name = 'menu';
    list.classList.remove('top-[88px]');
    list.classList.remove('opacity-100');
  }
}

export default function Navigation() {
  return (
    <nav className="p-5 bg-white shadow-md md:flex item-center justify-between max-h-[64px]  gap-7 rounded-[16px] relative">
      <div className="flex justify-around items-center">
        <span className="uppercase text-[18px]">logo</span>

        <span className="text-3text-lg cursor-pointer  mx-2 md:hidden block">
          <AiOutlineMenu className="menu" onClick={menuHandler} />
        </span>
      </div>

      <ul className="ss sm:bg-white sm:text-center sm:z-10 md:flex md:items-center z-[-1] md:z-auto md:static absolute md:bg-white md:text-black w-full left-0 md:w-auto md:py-0 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        {/* <ul className="text-gray-950 md:flex md:items-center z-[-1] md:z-auto text-[14px] font-medium  w-full left-0 md:w-auto md:py-0 md:pl-0 pl-7 md:opacity-100 opacity-0 transition-all ease-in duration-500"> */}
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-lg hover:text-[#55BDB3] duration-500">
            Home
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-lg hover:text-[#55BDB3] duration-500">
            Our Services
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-lg hover:text-[#55BDB3] duration-500">
            Our Process
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-lg hover:text-[#55BDB3] duration-500 mr-4"
          >
            Why Choose Us
          </a>
        </li>
        <HeaderAcceso />
      </ul>
    </nav>
  );
}
