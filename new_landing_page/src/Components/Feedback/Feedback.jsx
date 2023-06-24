import React from 'react';
const feedback = [
  {
    id: 0,
    profile: '../images/pfp.png',
    Name: 'Qasim Abbasi',
    handle: '@qashiii_says',
    logo: '../images/instagram.png',
    description:
      'Lörem ipsum prelig krorenade innan plagisk inklusive infraledes.Korade otende benat. Ultrassade intran. Dedat kronus faning.Bagt terrakemi ultralar egorade. ',
    link: 'see full Post',
  },
  {
    id: 1,
    profile: '../images/pfp.png',
    Name: 'Qasim Abbasi',
    handle: '@qashiii_says',
    logo: '../images/messenger.png',
    description:
      'Lörem ipsum prelig krorenade innan plagisk inklusive infraledes.Korade otende benat. Ultrassade intran. Dedat kronus faning.Bagt terrakemi ultralar egorade. ',
    link: 'see full Post',
  },
  {
    id: 2,
    profile: '../images/pfp.png',
    Name: 'Qasim Abbasi',
    handle: '@qashiii_says',
    logo: '../images/twitter.png',
    description:
      'Lörem ipsum prelig krorenade innan plagisk inklusive infraledes.Korade otende benat. Ultrassade intran. Dedat kronus faning.Bagt terrakemi ultralar egorade. ',
    link: 'see full Post',
  },
  {
    id: 3,
    profile: '../images/pfp.png',
    Name: 'Qasim Abbasi',
    handle: '@qashiii_says',
    logo: '../images/whatsapp.png',
    description:
      'Lörem ipsum prelig krorenade innan plagisk inklusive infraledes.Korade otende benat. Ultrassade intran. Dedat kronus faning.Bagt terrakemi ultralar egorade. ',
    link: 'see full Post',
  },
  {
    id: 4,
    profile: '../images/pfp.png',
    Name: 'Qasim Abbasi',
    handle: '@qashiii_says',
    logo: '../images/Facebooklogo.png',
    description:
      'Lörem ipsum prelig krorenade innan plagisk inklusive infraledes.Korade otende benat. Ultrassade intran. Dedat kronus faning.Bagt terrakemi ultralar egorade. ',
    link: 'see full Post',
  },
  {
    id: 5,
    profile: '../images/pfp.png',
    Name: 'Qasim Abbasi',
    handle: '@qashiii_says',
    logo: '../images/messenger.png',
    description:
      'Lörem ipsum prelig krorenade innan plagisk inklusive infraledes.Korade otende benat. Ultrassade intran. Dedat kronus faning.Bagt terrakemi ultralar egorade. ',
    link: 'see full Post',
  },
];

export default function Feedback() {
  return (
    <>
      <section className="Feedback_section w-full max-w-[1165px] mt-[24rem] sm:mt-0  mx-auto my-10">
        <section className="feedback w-full max-w-[1040px] mx-auto">
          <h2 className="text-center mt-7 font-bold text-[20px] md:text-[28px]">
            They talk about it
          </h2>
          <h2 className="text-center  mb-4 font-bold text-[20px] md:text-[28px]">
            Better then Us!
          </h2>
          <p className="min-[300px]  w-[70%] mx-auto text-center text-[14px]">
            Be the echo in the digital world! Boost your brand awareness,
            increase your sales and let your brand be recognized with our new
            SEO content bundle package.!
          </p>

          <div className="card_component ">
            <section className="feedback grid place-items-center mt-6 md:grid-cols-2 gap-[16px] max-w-[900px]">
              {feedback.map((item) => (
                <div
                  key={item.id}
                  className="top_component flex flex-col w-[310px] bg-white justify-between md:w-[400px] p-8 shadow-md"
                >
                  <section className="profile_component flex justify-between mb-3 ">
                    <div className="flex gap-3">
                      <img src={item.profile} alt="" />
                      <div className="name_component flex flex-col">
                        <h3>{item.Name}</h3>
                        <p className="text-slate-400">{item.handle}</p>
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

                  <section>{item.description}</section>
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
