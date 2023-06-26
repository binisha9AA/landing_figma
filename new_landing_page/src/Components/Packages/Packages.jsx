import React from 'react';
import { BsCheckAll } from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';
import { Button } from '../Button/Button';

export default function Packages() {
  const packages = [
    {
      id: 0,
      list: '1 On-Page SEO Analysis',
    },
    {
      id: 2,
      list: '100 Articles: 500 Words',
    },
    {
      id: 3,
      list: '100 Blog Posts: 500 Words',
    },
    {
      id: 4,
      list: '10 Press Release: 600 Words',
    },
    {
      id: 5,
      list: '10 Designed Info Graphics: 150 words',
    },
    {
      id: 6,
      list: '30 Business Profiles Submissions',
    },
    {
      id: 7,
      list: '2 Months Project',
    },
    {
      id: 8,
      list: 'Free Unlimited Revision',
    },
    {
      id: 9,
      list: 'Plagiarism Free Content',
    },
  ];
  const bundle = [
    {
      id: 0,
      list: 'Empower your online presence',
    },
    {
      id: 1,
      list: 'Empower your online presence',
    },
    {
      id: 2,
      list: 'Empower your online presence',
    },
    {
      id: 3,
      list: 'Empower your online presence',
    },
    {
      id: 4,
      list: 'Empower your online presence',
    },
  ];
  return (
    <>
      <div className="package_container relative  my-20">
        <div className="package_background absolute top-0 left-0 right-0 bottom-[30%] z-[-1] bg-[#F0F8F8]" />

        <section className="package_content pt-[62px] text-center">
          <h2 className="Package_title mb-[24px] font-semibold text-[28px]">
            SEO Content Bundle Packages
          </h2>
          <div className="text-center mb-[76px] mx-auto w-[60%] max-w-[617.86px] text-[14px] font-normal">
            <p>
              Be the echo in the digital world! Boost your brand awareness,
              increase your sales and let your brand be recognized with our new
              SEO content bundle package.!
            </p>
          </div>
        </section>
        <section className="mt-[74px] flex flex-col justify-center items-baseline md:items-start sm:flex-row">
          <div className="bg-white mx-auto w-[40%] min-w-[320px] max-w-[557px] rounded-2xl px-[24px] py-7 gap-4 flex flex-col md:width[557px]">
            <h2 className="font-bold text-[24px] mb-[27px]">Master Package</h2>
            <div className="bg-[#F0F8F8] rounded-xl px-[28px] py-[26px]">
              <div>
                {packages.map((item) => {
                  {
                    return (
                      <div
                        key={item.id}
                        className="flex gap-2 items-center mb-4"
                      >
                        <li className="flex justify-between items-center gap-5">
                          <div className="w-[15px] h-[15px] rounded-full flex justify-center items-center bg-[#55BDB3]">
                            <FiCheck className="text-white text-[12px] w-[20px] h-[20px]" />
                          </div>
                          <div className="font-semibold text-[14px] md:text-[16px]">
                            <p>{item.list}</p>
                          </div>
                        </li>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="bg-[#F0F8F8] px-5 py-7 flex flex-col justify-between md:flex-row ">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="">
                  <h2 className="text-xs">Total Price</h2>
                  <p className="font-bold text-xl">$14778</p>
                </div>
                <div className=" w-auto md:w-[2px] h-[100%] border-[1px] border-dashed border-black" />
                <div className="flex flex-col">
                  <h2 className="text-xs">After Discount</h2>
                  <p className="font-bold text-xl">$8865</p>
                </div>
              </div>
              <div>
                <Button
                  buttonText={'Get Packages'}
                  styles={'bg-[#0F2435]border-[#0F2435] text-white'}
                />
              </div>
            </div>
          </div>
          <div className="md:flex mx-auto flex-col w-[40%] min-w-[320px] max-h-40 p-7 ">
            <h2 className="font-bold text-lg md:font-bold text-[24px]">
              Boost Your Website Rankings
            </h2>
            <div className="mt-2 mb-4 font-normal text-[14px] md:text-[20px]">
              <p>Outperform your competitors & govern your niche.</p>
            </div>

            <div>
              {bundle.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="flex gap-[35px] items-center mb-3"
                  >
                    <div>
                      <BsCheckAll className="text-[#55BDB3] w-[20px] h-[20px]" />
                    </div>
                    <div className="font-normal text-[14px] md:text-[16px]">
                      {item.list}
                    </div>
                  </li>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
