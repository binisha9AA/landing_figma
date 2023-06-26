import React from 'react';
import { Button } from '../Button/Button';

export const HeaderAcceso = () => {
  return (
    <div className=" mb-[7px] text-center flex justify-center md:mb-0 ">
      <section className="buttons flex gap-2 pr-[44px] items-center">
        <Button
          buttonText={'Order Now'}
          styles={'bg-[#55BDB3] border-2 border-[#55BDB3] text-white'}
        />
        <Button
          buttonText={'Login'}
          styles={
            'login sm:text-white md:bg-transparent md:text-black border-2 md:mb-0 text-black border-[#55BDB3]'
          }
        />
      </section>
    </div>
  );
};
