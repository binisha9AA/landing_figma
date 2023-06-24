import React from 'react';

const Sample = () => {
  const divContent = [
    {
      id: 0,
      title: 'EBook-1',
      image: '../images/pdf 1.png',
      description: 'Sample | 5074 Words',
    },
    {
      id: 1,
      title: 'EBook-1',
      image: '../images/pdf 1.png',
      description: 'Sample | 5074 Words',
    },
    {
      id: 2,
      title: 'EBook-1',
      image: '../images/pdf 1.png',
      description: 'Sample | 5074 Words',
    },
    {
      id: 3,
      title: 'EBook-1',
      image: '../images/pdf 1.png',
      description: 'Sample | 5074 Words',
    },
  ];

  return (
    <section className="my-10 w-full max-w-[1165px]  mx-auto ">
      <div className="w-full">
        <div className="flex flex-wrap w-full">
          <div className="bg-[#F0F8F8] flex flex-wrap mt-28 mb-[132px] md:pl-28 py-9">
            <div className="w-[100%] flex flex-col gap-4 justify-around md:flex-row">
              <div className="flex flex-col text-left pl-4">
                <h2 className="font-semibold mb-[21.87px] text-[28px]">
                  {' '}
                  Our Samples
                </h2>
                <p className="max-w-[334px] font-normal text-[14px] mb-[88.9px]">
                  Don't scratch your head whether you're making the right choice
                  or not; check our statistics. The numbers are crystal clear,
                  and we talk openly about our progress and achievements.
                </p>
              </div>
              {/* <div className="flex gap-[9px]">
                <div className="bg-white rounded-md p-[11px] max-h-[185px]">
                  <h3 className="flex justify-between text-[#55BDB3] font-medium text-[20px]">
                    EBook-1
                    <img src="../images/pdf 1.png" alt="EBook" />
                  </h3>
                  <p className="mb-4 text-[#999999] font-medium text-[14px]">
                    Sample | 5074 Words
                  </p>
                  <div className="gap-3 flex py-6">
                    <button className="bg-[#0F2435] border-2 border-[#0F2435] color text-white py-2 px-6 rounded-md">
                      Preview
                    </button>
                    <button className="border-2 border-[#0F2435]  py-2 px-6 rounded-md">
                      Download
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-md p-[11px]  max-h-[185px] ">
                  <h3 className="flex justify-between text-[#55BDB3] font-medium text-[20px]">
                    EBook-1
                    <img src="../images/pdf 1.png" alt="EBook" />
                  </h3>
                  <p className="mb-4 text-[#999999] font-medium text-[14px]">
                    Sample | 5074 Words
                  </p>
                  <div className="gap-3 flex py-8">
                    <button className="bg-[#0F2435] border-2 border-[#0F2435] color text-white py-2 px-6 rounded-md">
                      Preview
                    </button>
                    <button className="border-2 border-[#0F2435]  py-2 px-6 rounded-md">
                      Download
                    </button>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="right_sample_content flex flex-wrap gap-[11px] mx-auto mt-7 w-full justify-center">
              {divContent.map((item) => (
                <div key={item.id} className="bg-white rounded-md p-[11px] ">
                  <h3 className="flex justify-between text-[#55BDB3] font-medium text-[20px]">
                    {item.title}
                    <img src={item.image} alt="EBook" />
                  </h3>
                  <p className="mb-6 text-[#999999] font-medium text-[14px]">
                    {item.description}
                  </p>
                  <div className="gap-3 flex py-8">
                    <button className="bg-[#0F2435] border-2 border-[#0F2435] color text-white py-2 px-6 rounded-md">
                      Preview
                    </button>
                    <button className="border-2 border-[#0F2435]  py-2 px-6 rounded-md">
                      Download
                    </button>
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
