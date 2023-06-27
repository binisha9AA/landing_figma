import React from 'react';
import testtwo from '../../assets/images/Test2.png';
import { Button } from '../Button/Button';

export default function TestomonialTwo() {
  return (
    <section className="testimonial">
      <div className="relative Testomonial mx-auto w-full max-w-[1176px]">
        <div
          className="absolute inset-0 bg-center bg-no-repeat rounded-[10px]"
          style={{ backgroundImage: `url(${testtwo})` }}
        ></div>
        <div className="relative z-10 h-full flex  items-center">
          <div className="bg-white px-2 py-4 my-[50px] rounded-[12px]  min-w[310px] w-[461px] mx-8 md:p-7 md:h-[226px]">
            <h2 className="font-bold px-5 text-[18px] md:text-xl">
              Get your content needs catered and
              <span className="text-[#55BDB3]"> boost your business</span> with
              this amazing discount of 20%.
            </h2>
            <div className="gap-3 flex p-6">
              <Button
                buttonText={'Free Proposal'}
                styles={'bg-[#0F2435]border-[#0F2435] text-white'}
              />
              <Button
                buttonText={'Chat Now'}
                styles={
                  'bg-transparent border-[1px] border-[#0F2435] text-black'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
