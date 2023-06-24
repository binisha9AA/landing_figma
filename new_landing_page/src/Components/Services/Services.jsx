import React from 'react';
import bluefile from '../../assets/images/blue file.png';
import bluearrow from '../../assets/images/blue arrow.png';
import cyanfile from '../../assets/images/cyan file.png';
import cyanarrow from '../../assets/images/cyan arrow.png';
import orangefile from '../../assets/images/orange file.png';
import orangearrow from '../../assets/images/orange arrow.png';
import yellowfile from '../../assets/images/yellow file.png';
import yellowarrow from '../../assets/images/yellow arrow.png';
import purplefile from '../../assets/images/purple file.png';
import purplearrow from '../../assets/images/purple arrow.png';
import pinkfile from '../../assets/images/Pink file.png';
import pinkarrow from '../../assets/images/pink arrow.png';
export default function Services() {
  const services = [
    {
      id: 0,
      image: bluefile,
      title: ' Article Writing',
      description:
        'Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt ehylig viktigt',
      arrow: bluearrow,
      border: '[#267BFF]',
    },
    {
      id: 1,
      image: cyanfile,
      title: 'Content Writing',
      description:
        'Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt ehylig viktigt',
      arrow: cyanarrow,
      border: '[#21DAFF]',
    },
    {
      id: 2,
      image: orangefile,
      title: ' Ebook Writing',
      description:
        'Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt ehylig viktigt',
      arrow: orangearrow,
      border: '[#FF834B]',
    },
    {
      id: 3,
      image: yellowfile,
      title: ' Article Writing',
      description:
        'Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt ehylig viktigt',
      arrow: yellowarrow,
      border: '[#FF9318]',
    },
    {
      id: 4,
      image: purplefile,
      title: 'Content Writing',
      description:
        'Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt ehylig viktigt',
      arrow: purplearrow,
      border: '[#5252FF]',
    },
    {
      id: 5,
      image: pinkfile,
      title: 'Ebook Writing',
      description:
        'Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt ehylig viktigt',
      arrow: pinkarrow,
      border: '[#E72AFF]',
    },
  ];
  return (
    <div className="service_section">
      <section className=" service-section  w-full max-w-[1525px] mx-auto mt-[92px] ">
        <h2 className="text-center font-bold text-[25px]">
          Our Service and Prices
        </h2>
        <div className="text-center pt-5 pb-[98px] max-w-4xl mx-auto text-[14px] md:text-[18px]">
          <p>
            ContentAlpha offers optimal solutions at affordable rates for every
            content need. Understanding your requirements and generating results
            that satisfy you is our core mission. With us, you will be able to
            get the maximum possible ROI.
          </p>
        </div>

        <section className="services services flex gap-[57px] justify-center flex-wrap mx-auto items-center max-w-[1032px] ">
          {services.map((item) => (
            <div
              key={item.id}
              className={`w-[250px] h-64 pt-4 pb-[29.65px] px-[26.9px] shadow-md border-2 rounded-xl ${'border-'.concat(
                item.border
              )}`}
            >
              <img src={item.image} alt="" />
              <div
                className={`font-bold pt-5 pb-3 ${'text-'.concat(item.border)}`}
              >
                <h4>{item.title}</h4>
              </div>
              <div className="text-[#999999] pb-5">
                <p>{item.description}</p>
              </div>
              <div className="arrow_link">
                <a href="">
                  <img src={item.arrow} alt="" />
                </a>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
