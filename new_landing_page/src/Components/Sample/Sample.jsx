import React from 'react';
import { Button } from '../Button/Button';
import pdf from '../../assets/images/pdf 1.png';

const Sample = () => {
  const divContent = [
    {
      id: 0,
      title: 'EBook-1',
      image: pdf,
      description: 'Sample | 5074 Words',
    },
    {
      id: 1,
      title: 'EBook-1',
      image: pdf,
      description: 'Sample | 5074 Words',
    },
    {
      id: 2,
      title: 'EBook-1',
      image: pdf,
      description: 'Sample | 5074 Words',
    },
    {
      id: 3,
      title: 'EBook-1',
      image: pdf,
      description: 'Sample | 5074 Words',
    },
  ];
  const displayedData = divContent.slice(0, 2);

  return (
    <section className="my-10 w-full mx-auto ">
      <div className="w-full">
        <div className="flex flex-wrap w-full">
          <div className="bg-[#F0F8F8] flex flex-wrap mt-28 mb-[132px] md:px-28 py-9">
            <div className="w-[100%] flex flex-col justify-around md:flex-row">
              <div className="flex flex-col text-center md:text-left pl-4">
                <h2 className="font-semibold mb-[21.87px] text-[28px]">
                  Our Samples
                </h2>
                <div className="mx-auto max-w-[334px] font-normal text-[14px] mb-[88.9px]">
                  <p>
                    Don't scratch your head whether you're making the right
                    choice or not; check our statistics. The numbers are crystal
                    clear, and we talk openly about our progress and
                    achievements.
                  </p>
                </div>
              </div>
              <div className="flex gap-[9px]">
                {displayedData.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[12px]  max-h-[200px] p-[11px] "
                  >
                    <h3 className="flex justify-between text-[#55BDB3] font-medium text-[20px]">
                      {item.title}
                      <img src={item.image} alt="EBook" />
                    </h3>
                    <p className="mb-6 text-[#999999] font-medium text-[14px]">
                      {item.description}
                    </p>
                    <div className="gap-3 flex py-8">
                      <Button
                        buttonText={'Preview'}
                        styles={'bg-[#0F2435]border-[#0F2435] text-white'}
                      />
                      <Button
                        buttonText={'Download'}
                        styles={
                          'bg-transparent border-[1px] border-[#0F2435]text-black'
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="right_sample_content flex flex-wrap gap-[11px] mx-auto mt-7 w-full justify-center">
              {divContent.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[12px]  p-[11px] "
                >
                  <h3 className="flex justify-between text-[#55BDB3] font-medium text-[20px]">
                    {item.title}
                    <img src={item.image} alt="EBook" />
                  </h3>
                  <p className="mb-6 text-[#999999] font-medium text-[14px]">
                    {item.description}
                  </p>
                  <div className="gap-3 flex py-8">
                    <Button
                      buttonText={'Preview'}
                      styles={'bg-[#0F2435]border-[#0F2435] text-white'}
                    />
                    <Button
                      buttonText={'Download'}
                      styles={
                        'bg-transparent border-[1px] border-[#0F2435]text-black'
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sample;