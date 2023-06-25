import React from 'react';

export default function Copyright() {
  return (
    <div className='copyright'>
      <div className='bg-[#0C1D2A] py-5 px-12 gap-6  flex flex-col justify-between md:flex-row '>
        <div>
          <h3 className='text-[#CCCCCC]'>
            Copyrights © 2020 All Rights Reserved by{' '}
            <span className='text-[#55BDB3] font-bold'>E-Courses</span>
          </h3>
        </div>
        <div className=' flex flex-col md:flex-row gap-2'>
          <p className='text-[#CCCCCC]'>Terms of Privacy</p>
          <p className='text-[#CCCCCC] hidden md:flex'>|</p>
          <p className='text-[#CCCCCC]'>Security Statement</p>
        </div>
      </div>
    </div>
  );
}
