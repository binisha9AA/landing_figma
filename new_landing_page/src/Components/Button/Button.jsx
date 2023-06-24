import React from 'react';

export const Button = ({ buttonText, styles }) => {
  return (
    <>
      <button
        className={`bg-[#0F2435] border-[1px] border-[#0F2435] py-2 px-6 rounded-[8px] md: max-w-[145px] ${styles}`}
      >
        <h3 className="font-medium text-[14px]">{buttonText}</h3>
      </button>
    </>
  );
};
