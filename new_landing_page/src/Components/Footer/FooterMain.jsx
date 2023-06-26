import React from 'react';
import phone from '../../assets/images/phone.png';

export default function FooterMain() {
  return (
    <section className="footer">
      <div className="footer p-10  bg-[#0F2435] text-base-content text-white flex flex-col gap-10 h-max justify-evenly md:flex-row ">
        <div>
          <h2 className="font-bold text-lg">LOGO</h2>
          <p className="w-[280px] py-5">
            A platform was designed to address the immediate need to increase
            the visibility of qualified affordable tutors to parents.
          </p>
          <hr />
          <div className="flex flex-col">
            <p className="my-4">info@projexive.com</p>
            <p className="flex">
              <img src={phone} alt="" />
              +1-202-555-0112
            </p>
            <p className=" max-w-[165px] mt-5">
              7038 10th Street Mays Landing, NJ 08330
            </p>
          </div>
        </div>
        <div>
          <span className="footer-title font-bold uppercase text-lg">
            Useful Links
          </span>
          <section className="sub_categories flex gap-9 mt-6">
            <section className="left">
              <ul className="leading-8">
                <li className="flex gap-3">
                  <span className="text-[#55BDB3] font-bold">&gt;&gt;</span>
                  <a href="">Science</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#55BDB3] font-bold">&gt;&gt;</span>
                  <a href="">Language</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#55BDB3] font-bold">&gt;&gt;</span>
                  <a href="">Humanities</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#55BDB3] font-bold">&gt;&gt;</span>
                  <a href="">Body & Mind</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#55BDB3] font-bold">&gt;&gt;</span>
                  <a href="">Arts & Craft</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#55BDB3] font-bold">&gt;&gt;</span>
                  <a href="">Business</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#55BDB3] font-bold">&gt;&gt;</span>
                  <a href="">Mathematics</a>
                </li>
              </ul>
            </section>

            <section className="right">
              <ul className="leading-8">
                <li className="flex gap-3">
                  <span className="text-[#55BDB3] font-bold">&gt;&gt;</span>
                  <a href="">About us</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#55BDB3] font-bold">&gt;&gt;</span>
                  <a href="">Career</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#55BDB3] font-bold">&gt;&gt;</span>
                  <a href="">why Tutor</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#55BDB3] font-bold">&gt;&gt;</span>
                  <a href="">Policies</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#55BDB3] font-bold">&gt;&gt;</span>
                  <a href="">Meet team</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#55BDB3] font-bold">&gt;&gt;</span>
                  <a href="">Humanities</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#55BDB3] font-bold">&gt;&gt;</span>
                  <a href="">Project</a>
                </li>
              </ul>
            </section>
          </section>
        </div>

        <div>
          <p className="footer-title mb-9 font-bold uppercase text-lg">
            Subscribe Us
          </p>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-[#CCCCCC]">
                Sign up for our mailing list to get latest updates and offers.
              </span>
            </label>
            <div className="flex w-80 h-11 mt-5 bg-[#273A49]">
              <input
                type="text"
                placeholder="Email address"
                className="input input-bordered w-full pr-16 bg-transparent indent-5"
              />
              <button className="bg-[#55BDB3] w-[84px] rounded-lg">send</button>
            </div>
            <h2 className="text-[#CCCCCC] mt-3 font-sans font-normal italic">
              Your mail id is Confidential
            </h2>
            <hr className="my-3" />
            <img src="../images/footer-logo.png" className="mt-3" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
