import React from 'react';
import Services from '../Services/Services';
import Price from '../Price/Price';
import TestominialOne from '../Testimonials/TestominialOne';
import Reasons from '../Reasons/Reasons';
import Status from '../Status/Status';
import Process from '../Process/Process';
import TestomonialTwo from '../Testimonials/TestomonialTwo';
import Packages from '../Packages/Packages';
import Feedback from '../Feedback/Feedback';
import Sample from '../Sample/Sample';
import Faq from '../Faq/Faq';

export default function Main() {
  return (
    <main>
      <Services />
      <TestominialOne />
      {/* <Reasons /> */}
      <Price />
      <Status />
      <Process />
      <TestomonialTwo />
      <Packages />
      <Feedback />
      <Sample />
      <Faq />
    </main>
  );
}
