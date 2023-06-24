import React from 'react';
import { Button } from '../Button/Button';

export const HeaderAcceso = () => {
  return (
    <>
      <section className="header_buttons flex gap-2 pr-[44px] items-center">
        <Button
          buttonText={'Order Now'}
          styles={'bg-[#55BDB3] border-2 border-[#55BDB3] text-white'}
        />
        <Button
          buttonText={'Login'}
          styles={' bg-transparent border-2 text-black border-[#55BDB3]'}
        />
      </section>
    </>
  );
};
