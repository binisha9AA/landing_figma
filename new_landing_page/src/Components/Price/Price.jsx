import React from 'react';

function Price() {
  return (
    <>
      <section className="price w-full pt-[134px] pb-[133px] md:max-w-[1032px] mx-auto ">
        <h2 className=" text-center font-semibold min-w-[200px] text-[18px] mb-[20px] md:text-left">
          Calculate Your Price
        </h2>
        <div className="pricing_component flex w-full flex-col mx-auto shadow-lg border-2 rounded-[20px] p-5 md:flex-row gap-[45px]">
          <div className="price_left flex-grow-[1] h-full w-full">
            <section className="top-left flex flex-col w-full gap-[11px] h-full md:flex-row">
              <h2 className="flex flex-col basis-[50%] text-[#55BDB3] font-medium md:gap-[8px]">
                Service type
                <select
                  id="serviceType"
                  className="h-9 text-black bg-neutral-100 font-normal indent-3 rounded-[8px]"
                >
                  <option value="option1 selected">Writing</option>
                  <option value="option2">Editing</option>
                  <option value="option3">Marketing</option>
                  <option value="option4">web development</option>
                </select>
              </h2>
              <h2 className="flex flex-col text-[#55BDB3] font-medium grow-[1] md:gap-[8px]">
                Quantity
                <input
                  type="text"
                  inputMode="numeric"
                  className="h-9 bg-neutral-100 placeholder-black font-normal rounded-[8px] mb-4 indent-4"
                  placeholder="100"
                />
              </h2>
            </section>
            <section className="bottom_section flex flex-col gap-[11px] h-full md:flex-row">
              <h2 className=" text-[#55BDB3] font-medium flex flex-col basis-[30%] md:gap-[8px]">
                Due Date
                <input
                  type="date"
                  value="May 25, 2022"
                  placeholder="May 25, 2022"
                  className="h-9 bg-neutral-100 text-black font-normal rounded-[8px] mb-4 indent-1"
                />
              </h2>
              <h2 className=" text-[#55BDB3] font-medium flex flex-col basis-[30%] md:gap-[8px]">
                Words
                <input
                  type="text"
                  inputMode="numeric"
                  className="h-9 bg-neutral-100 placeholder-black font-normal rounded-[8px] mb-4 indent-3"
                  placeholder="100"
                />
              </h2>
              <h2 className=" text-[#55BDB3] font-medium flex flex-col flex-grow-[1] md:gap-[8px]">
                Quality
                <select
                  id="serviceType"
                  className="h-9 text-black bg-neutral-100 font-normal rounded-[8px]"
                >
                  <option value="option1 selected">Expert</option>
                  <option value="option2">High</option>
                  <option value="option3">Low</option>
                  <option value="option4">Medium</option>
                </select>
              </h2>
            </section>
          </div>

          <section className="prices_right flex flex-col justify-around basis-[30%] ">
            <h2 className="text-[#55BDB3] font-bold text-[55px] text-center md:gap-[8px]">
              $11.7
            </h2>
            <hr />
            <button className="bg-[#0F2435] border-2 border-[#0F2435] color text-white py-2 px-4 rounded-[8px]">
              Order Now
            </button>
          </section>
        </div>
      </section>
    </>
  );
}

export default Price;
