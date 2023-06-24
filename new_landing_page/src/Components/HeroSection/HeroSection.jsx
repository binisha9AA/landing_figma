import React from 'react';
import { Button } from '../Button/Button';
import heroImage from '../../assets/images/header Image.png';

export default function HeroSection() {
  return (
    <>
      <section className="slogan bg-[#F0F8F8]">
        <div className="flex flex-col justify-between w-full  mx-auto  md:flex-row mt-[120px]">
          <section>
            <div className="leading-[50px] font-bold text-[40px]">
              <h1 className="text-[#55BDB3] uppercase">we provide</h1>
              <h1 className="text-[#0F2435]  font-bold ">ACTION-PROVOKING</h1>
            </div>
            <h2 className="text-[28px] font-normal  leading-[35.28px] uppercase  mb-[23px]">
              to help you grow gradually
            </h2>
            <div className=" max-w-[446px]  mb-[85px] text-[14px] font-normal">
              <p>
                Lörem ipsum onas. Ivera. Prende exoment: gigad för tralig
                nehahusade. Parasocial platinade och tyvaling, suskade, gäv.
                Beseng kopimism inte teröktig.
              </p>
            </div>

            <div className="pb-0 gap-3 flex flex-row md:pb-[137px]">
              <Button
                buttonText={'Free Proposal'}
                styles={'bg-[#0F2435]border-[#0F2435] text-white'}
              />
              <Button
                buttonText={'Chat Now'}
                styles={
                  'bg-transparent border-[1px] border-[#0F2435]text-black'
                }
              />
            </div>
          </section>
          <section>
            <img src={heroImage} />
          </section>
        </div>
      </section>
    </>
  );
}
