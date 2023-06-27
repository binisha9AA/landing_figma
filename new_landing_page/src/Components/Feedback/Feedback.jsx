import React from 'react';
import pfp from '../../assets/images/pfp.png';
import iglogo from '../../assets/images/instagram.png';
import msslogo from '../../assets/images/messenger.png';
import twtlogo from '../../assets/images/twitter.png';
import wtslogo from '../../assets/images/whatsapp.png';
import fblogo from '../../assets/images/Facebooklogo.png';
const feedback = [
  {
    id: 0,
    profile: pfp,
    Name: 'Qasim Abbasi',
    handle: '@qashiii_says',
    logo: iglogo,
    description:
      'Lörem ipsum prelig krorenade innan plagisk inklusive infraledes.Korade otende benat. Ultrassade intran. Dedat kronus faning.Bagt terrakemi ultralar egorade. ',
    link: 'see full Post',
  },
  {
    id: 1,
    profile: pfp,
    Name: 'Qasim Abbasi',
    handle: '@qashiii_says',
    logo: msslogo,
    description:
      'Lörem ipsum prelig krorenade innan plagisk inklusive infraledes.Korade otende benat. Ultrassade intran. Dedat kronus faning.Bagt terrakemi ultralar egorade. ',
    link: 'see full Post',
  },
  {
    id: 2,
    profile: pfp,
    Name: 'Qasim Abbasi',
    handle: '@qashiii_says',
    logo: twtlogo,
    description:
      'Lörem ipsum prelig krorenade innan plagisk inklusive infraledes.Korade otende benat. Ultrassade intran. Dedat kronus faning.Bagt terrakemi ultralar egorade. ',
    link: 'see full Post',
  },
  {
    id: 3,
    profile: pfp,
    Name: 'Qasim Abbasi',
    handle: '@qashiii_says',
    logo: wtslogo,
    description:
      'Lörem ipsum prelig krorenade innan plagisk inklusive infraledes.Korade otende benat. Ultrassade intran. Dedat kronus faning.Bagt terrakemi ultralar egorade. ',
    link: 'see full Post',
  },
  {
    id: 4,
    profile: pfp,
    Name: 'Qasim Abbasi',
    handle: '@qashiii_says',
    logo: fblogo,
    description:
      'Lörem ipsum prelig krorenade innan plagisk inklusive infraledes.Korade otende benat. Ultrassade intran. Dedat kronus faning.Bagt terrakemi ultralar egorade. ',
    link: 'see full Post',
  },
  {
    id: 5,
    profile: pfp,
    Name: 'Qasim Abbasi',
    handle: '@qashiii_says',
    logo: msslogo,
    description:
      'Lörem ipsum prelig krorenade innan plagisk inklusive infraledes.Korade otende benat. Ultrassade intran. Dedat kronus faning.Bagt terrakemi ultralar egorade. ',
    link: 'see full Post',
  },
];

export default function Feedback() {
  return (
    <>
      <section className="Feedback_section  w-full max-w-[1165px] mt-40 sm:mt-0  mx-auto my-10">
        <section className="feedback w-full max-w-[1040px] mx-auto flex flex-col items-center justify-center">
          <h2 className="text-center mt-7 font-bold text-[20px] md:text-[28px]">
            They talk about it
          </h2>
          <h2 className="text-center  mb-4 font-bold text-[20px] md:text-[28px]">
            Better then Us!
          </h2>
          <div className="min-[300px]  w-[70%] mx-auto text-center text-[14px]">
            <p>
              Be the echo in the digital world! Boost your brand awareness,
              increase your sales and let your brand be recognized with our new
              SEO content bundle package.!
            </p>
          </div>

          <div className="card_component">
            <section className="feedback grid place-items-center mt-6 md:grid-cols-2 gap-[16px]">
              {feedback.map((item) => (
                <div
                  key={item.id}
                  className="top_component flex flex-col w-[310px] shadow-lg rounded-[12px] bg-white justify-between lg:w-[512px] p-8 mb-[36px]"
                >
                  <section className="profile_component flex justify-between mb-3 ">
                    <div className="flex gap-3">
                      <img src={item.profile} alt="" />
                      <div className="name_component flex flex-col">
                        <h3 className="font-medium">{item.Name}</h3>
                        <div className="text-[#D9D9D9] text-[14px]">
                          <p>{item.handle}</p>
                        </div>
                      </div>
                    </div>

                    <section className="logo_component">
                      <img
                        src={item.logo}
                        alt=""
                        className="shadow-md p-[8px]"
                      />
                    </section>
                  </section>

                  <section className="text-[14px] md:text-[16px]">
                    {item.description}
                  </section>
                  <section className=" underline text-[#55BDB3] mt-[27px] font-bold text-[14px]">
                    {item.link}
                  </section>
                </div>
              ))}
            </section>
          </div>
        </section>
      </section>
    </>
  );
}
