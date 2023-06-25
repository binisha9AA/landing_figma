import React from 'react';

export default function Status() {
  return (
    <div>
      <div className="bg-[#F0F8F8]  w-auto my-10">
        <div className="status_container p-10 w-full">
          <section className="status_heading">
            <h2 className="text-center font-bold text-[28px] pt-5">
              Our Stats
            </h2>
            <div className="text-center pt-5 w-[100%] min-w-[200px] text-[14px] font-medium md:px-[153px]">
              <p>
                Don't scratch your head whether you're making the right choice
                or not; check our statistics. The numbers are crystal clear, and
                we talk openly about our progress and achievements.
              </p>
            </div>
          </section>
          <section className='"dotted_lines border-dashed border-[0.5px] border-black md:mx-[20rem] my-[49px] '></section>
          <div className="flex justify-center">
            <div className="grid grid-cols-2  md:grid-cols-4 gap-[93px] ">
              <div>
                <h2 className="font-bold text-[26px]">350+</h2>
                <span className="font-medium">Projects in Progress</span>
              </div>
              <div>
                <h2 className="font-bold text-[26px]">18250+</h2>
                <span className="font-medium">Files Delivered</span>
              </div>
              <div>
                <h2 className="font-bold text-[26px]">5000+</h2>
                <span className="font-medium">Happy Clients</span>
              </div>
              <div className="">
                <h2 className="font-bold text-[26px]">300+</h2>
                <span className="font-medium">Content Writers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
