import React from 'react';
import testone from '../../assets/images/Test1.png';
import button from '../Button/Button';
import Button from '../Button/Button';

export default function TestominialOne() {
  return (
    <section className="testimonialOne">
      <div className="relative  Testimonial max-w-[1176px] mx-auto ">
        <div
          className="absolute inset-0 bg-center bg-no-repeat rounded-[10px]"
          style={{ backgroundImage: `url(${testone})` }}
        ></div>
        <div className="relative z-10 h-full flex  items-center ">
          <div className="bg-white px-2 rounded-[12px] py-4 my-[50px] h-[226px] min-w[310px] w-[461px] mx-8 md:p-7">
            <h3 className="font-bold px-5 text-[18px] md:text-xl">
              Get your content needs catered and
              <span className="text-[#55BDB3]"> boost your business</span> with
              this amazing discount of 20%.
            </h3>
            <div className="gap-3 flex p-6">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
