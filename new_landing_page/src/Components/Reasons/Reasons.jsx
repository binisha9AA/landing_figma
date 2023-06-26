import React from 'react';
import contenticon from '../../assets/images/content.png';
import researchicon from '../../assets/images/research.png';
import staricon from '../../assets/images/star.png';
import revisionicon from '../../assets/images/revision.png';
import seoicon from '../../assets/images/Seo.png';
import suppicon from '../../assets/images/supp.png';
import writericon from '../../assets/images/writer.png';
import tickicon from '../../assets/images/tick.png';
const reasons = [
  {
    id: 0,
    image: contenticon,
    title: ' Custom Content',
    background: '[#ECF3FE] ',
  },
  {
    id: 1,
    image: researchicon,
    title: 'Complete Research',
    background: '[#FEF8E6]',
  },
  {
    id: 2,
    image: revisionicon,
    title: 'Fastest Delivery',
    background: '[#E7FAF3]',
  },
  {
    id: 3,
    image: seoicon,
    title: 'SEO Optimized',
    background: '[#F1F1FB] ',
  },
  {
    id: 4,
    image: suppicon,
    title: '24/7 Support',
    background: '[#ECF3FE]',
  },
  {
    id: 5,
    image: writericon,
    title: 'Dedicated Writers',
    background: '[#FEF8E6] ',
  },
  {
    id: 6,
    image: tickicon,
    title: ' Statisfaction',
    background: '[#FDF4F0]',
  },
  {
    id: 7,
    image: revisionicon,
    title: 'Flexible Revision',
    background: '[#E7FAF3] ',
  },
  {
    id: 8,
    image: staricon,
    title: 'Money Back Guarantee',
    background: '[#FEF8E6]',
  },
  {
    id: 9,
    image: staricon,
    title: 'Money Back Guarantee',
    background: '[#FEF8E6]',
  },
];

export default function Reasons() {
  return (
    <section className="reason_section py-12 ">
      <div className="w-full max-w-[938px] mx-auto">
        <h3 className="text-center mb-[20px] mt-12 font-bold text-[28px]">
          Reason we are no.1
        </h3>
        <div className="text-center text-[14px] pb-[71px] px-8 mx-[80px]">
          <p>
            Customer satisfaction is our priority, and we ensure to deliver what
            we promise. Let us align our innovative ideas and strategies to your
            needs to generate unique and powerful results.
          </p>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-4 max-w-[1000px] mx-auto">
        {reasons.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-row flex-wrap gap-4 justify-center mx-auto items-center w-[30%] min-w-[300px]"
            >
              <div
                className={`h-16 flex ${'bg-'.concat(
                  item.background
                )} font-bold w-full rounded-lg justify-center gap-3 items-center`}
              >
                <section className="image">
                  <img src={item.image} />
                </section>
                <div>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
