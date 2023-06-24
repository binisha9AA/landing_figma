import React from 'react';

export default function Button() {
  return (
    <>
      <button className="bg-[#0F2435] border-[1px] border-[#0F2435] color text-white py-2 px-6 rounded-[8px] md: max-w-[145px]">
        <h3 className="font-medium text-[14px] ">Free Proposal</h3>
      </button>
      <button className="border-[1px] border-[#0F2435]  py-2 px-6 rounded-[8px]">
        <h3 className="font-medium text-[14px]"> Chat Now</h3>
      </button>
    </>
  );
}
