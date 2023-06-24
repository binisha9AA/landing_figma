import React from 'react';

export const HeaderAcceso = () => {
  return (
    <>
      <section className="header_buttons flex gap-2 pr-[44px] items-center">
        <button className="bg-[#55BDB3] border-2 border-[#55BDB3] color text-white py-2 px-6 rounded-md md:ml-[30px]">
          Order Now
        </button>

        <button className="border-2 text-white border-[#55BDB3] py-2 px-6 rounded-md w-[118px] md:text-black ">
          login
        </button>
      </section>
    </>
  );
};
