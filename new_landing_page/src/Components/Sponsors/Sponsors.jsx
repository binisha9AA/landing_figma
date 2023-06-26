import React from 'react';
import linklogo from '../../assets/images/LinkedIn.png';
import facebook from '../../assets/images/facebook.png';
import google from '../../assets/images/google.png';
import nike from '../../assets/images/nike.png';

export default function Sponsors() {
  return (
    <>
      <section
        className="sponsor hidden py-3  min-w-[600px] bg-white md:flex  px-8 gap-4 items-center rounded-xl shadow-md justify-between absolute bottom-0 mx-auto left-[50%] translate-x-[-50%]
      translate-y-[50%]"
      >
        <h2 className="font-medium text-[#C4C4C4] text-[14px] mr-8">
          Powered By
        </h2>
        <figure className=" flex gap-9 items-center">
          <img src={linklogo} className="h-[20px]" />
          <img src={facebook} className="h-[20px]" />
          <img src={google} className="h-[24px]" />
          <img src={nike} className="h-[45px]" />
        </figure>
      </section>
    </>
  );
}
