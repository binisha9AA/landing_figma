import React from 'react';
import testone from '../../assets/images/Test1.png';
import { Button } from '../Button/Button';

export default function TestominialOne() {
  return (
    <section className="testimonialOne">
      <div className="relative  Testimonial max-w-[1176px] mx-auto ">
        <div
          className="absolute inset-0 bg-center bg-no-repeat rounded-[10px]"
          style={{ backgroundImage: `url(${testone})` }}
        ></div>
        <div className="relative z-10 h-full flex  items-center ">
          <div className="bg-white px-2 rounded-[12px] py-4 my-[50px]  min-w[310px] w-[461px] mx-8 md:p-7 md:h-[226px]">
            <h3 className="font-bold px-5 text-base mb-5 md:text-xl text-[18px] max-w">
              Get your content needs catered and
              <span className="text-[#55BDB3]"> boost your business</span> with
              this amazing discount of 20%.
            </h3>
            <div className="gap-3 flex md:p-5">
              <Button
                buttonText={'Free Proposal'}
                styles={'bg-[#0F2435] border-[#0F2435] text-white '}
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
