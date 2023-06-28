import { FiChevronDown } from 'react-icons/fi';
import side from '../../assets/images/46.png';
import { useState } from 'react';

export default function Faq() {
  const [openQuestionId, setOpenQuestionId] = useState(null);
  const faq = [
    {
      id: 0,
      question: 'How many team members can I invite?',
      answer:
        'You can invite up to 2 additional users on the Free plan.There is no limit on team members for the Premium plan',
    },
    {
      id: 1,
      question: 'How many team members can I invite?',
      answer:
        'You can invite up to 2 additional users on the Free plan.There is no limit on team members for the Premium plan',
    },
    {
      id: 2,
      question: 'How many team members can I invite?',
      answer:
        'You can invite up to 2 additional users on the Free plan.There is no limit on team members for the Premium plan',
    },
    {
      id: 3,
      question: 'How many team members can I invite?',
      answer:
        'You can invite up to 2 additional users on the Free plan.There is no limit on team members for the Premium plan',
    },
    {
      id: 4,
      question: 'How many team members can I invite?',
      answer:
        'You can invite up to 2 additional users on the Free plan.There is no limit on team members for the Premium plan',
    },
  ];
  return (
    <section className="FAQ_section">
      <div className="w-full max-w-[1165px] px-5  mx-auto mb-[104px]">
        <h2 className="title__accordion  text-center font-bold text-xl mb-8">
          Need Help? Read FAQs
        </h2>
        <div className="flex gap-10 ">
          <section className="basis-[30%] bg-[#E9F3FE] leading-10 p-[24px] h-[429.48px] md:leading-[3.5rem] ">
            <h3 className="font-bold text-base md:text-[24px]">
              Table of Content
            </h3>
            <a href="">
              <p className="text-[#55BDB3] font-medium text-[16px]">Process</p>
            </a>
            <hr />
            <p>
              <a href="" className="text-[#C4C4C4] font-medium text-[16px]">
                Support
              </a>
            </p>
            <hr />
            <p>
              <a href="" className="text-[#C4C4C4] font-medium text-[16px]">
                Discount
              </a>
            </p>
            <hr />
            <p>
              <a href="" className="text-[#C4C4C4] font-medium text-[16px]">
                Billing
              </a>
            </p>
            <hr />
            <p>
              <a href="" className="text-[#C4C4C4] font-medium text-[16px]">
                Office and Cleaning
              </a>
            </p>
            <hr />
          </section>

          <div className="questions__accordions flex flex-col flex-1 gap-5">
            {faq.map((item) => {
              return (
                <div
                  key={item.id}
                  className="question-answer__accordion flex justify-between items-center gap-5 p-[15px] shadow-sm shadow-[#DEDEDE] rounded-lg mb-[24px]"
                  onClick={() =>
                    item.id === openQuestionId
                      ? setOpenQuestionId(null)
                      : setOpenQuestionId(item.id)
                  }
                >
                  <div className="question">
                    <h3 className="title__question font-bold mb-[16px]">
                      {item.question}
                    </h3>
                    <div
                      className={`answer ${
                        openQuestionId != item.id && 'hidden'
                      } text-[#888580]`}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </div>
                  {item.id == openQuestionId ? (
                    <FiChevronDown className="w-7 h-12 text-[#55BDB3]" />
                  ) : (
                    <img src={side} className="w-6 h-auto flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
