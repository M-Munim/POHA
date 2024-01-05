import React from 'react'
import { categories } from '../../Data'
import Categories from './Categories'
import { motion } from "framer-motion";

import "./Partners.css"
import backgroundShape from "../../assets/background shape.png"
import { Link as ScrollLink } from 'react-scroll';
import rectangle48 from "../../assets/Rectangle48.png"


const Partners = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: .4,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className=''>
      <div className='partners' id='partners'>
        <div className="flex items-center justify-center py-20 gap-3">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
              <path d="M11.8758 0.190601C11.4961 -0.0635335 11.0039 -0.0635335 10.6242 0.190601L5.7375 3.46258L1.32187 4.44735C0.548437 4.6203 0 5.30505 0 6.09922V16.3775C0 17.3129 0.755859 18.0718 1.6875 18.0718H20.8125C21.7441 18.0718 22.5 17.3129 22.5 16.3775V6.09922C22.5 5.30505 21.9516 4.61677 21.1781 4.44382L16.7625 3.46258L11.8758 0.190601ZM9 14.6833C9 13.4373 10.009 12.4243 11.25 12.4243C12.491 12.4243 13.5 13.4373 13.5 14.6833V18.0718H9V14.6833ZM3.375 6.77691H4.5C4.80937 6.77691 5.0625 7.03104 5.0625 7.34165V9.60062C5.0625 9.91123 4.80937 10.1654 4.5 10.1654H3.375C3.06562 10.1654 2.8125 9.91123 2.8125 9.60062V7.34165C2.8125 7.03104 3.06562 6.77691 3.375 6.77691ZM17.4375 7.34165C17.4375 7.03104 17.6906 6.77691 18 6.77691H19.125C19.4344 6.77691 19.6875 7.03104 19.6875 7.34165V9.60062C19.6875 9.91123 19.4344 10.1654 19.125 10.1654H18C17.6906 10.1654 17.4375 9.91123 17.4375 9.60062V7.34165ZM3.375 11.2949H4.5C4.80937 11.2949 5.0625 11.549 5.0625 11.8596V14.1186C5.0625 14.4292 4.80937 14.6833 4.5 14.6833H3.375C3.06562 14.6833 2.8125 14.4292 2.8125 14.1186V11.8596C2.8125 11.549 3.06562 11.2949 3.375 11.2949ZM17.4375 11.8596C17.4375 11.549 17.6906 11.2949 18 11.2949H19.125C19.4344 11.2949 19.6875 11.549 19.6875 11.8596V14.1186C19.6875 14.4292 19.4344 14.6833 19.125 14.6833H18C17.6906 14.6833 17.4375 14.4292 17.4375 14.1186V11.8596ZM14.3438 6.21217C14.3438 7.92757 12.9586 9.31825 11.25 9.31825C9.54141 9.31825 8.15625 7.92757 8.15625 6.21217C8.15625 4.49676 9.54141 3.10608 11.25 3.10608C12.9586 3.10608 14.3438 4.49676 14.3438 6.21217ZM11.25 4.51794C10.9406 4.51794 10.6875 4.77207 10.6875 5.08268V6.21217C10.6875 6.52278 10.9406 6.77691 11.25 6.77691H12.375C12.6844 6.77691 12.9375 6.52278 12.9375 6.21217C12.9375 5.90156 12.6844 5.64743 12.375 5.64743H11.8125V5.08268C11.8125 4.77207 11.5594 4.51794 11.25 4.51794Z" fill="url(#paint0_linear_56_110)" />
              <defs>
                <linearGradient id="paint0_linear_56_110" x1="0" y1="0" x2="17.6463" y2="21.9702" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0072FF" />
                  <stop offset="1" stopColor="#00C6FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-3xl font-semibold text-white">
            700+ Partner Schools
          </div>
        </div>

        <div className="partnerCards relative w-10/12 m-auto p-8 mt-2 rounded-lg z-10">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className='grid md:grid-cols-5 sm:grid-cols-2 mt-12 gap-8'>
            {categories.map((category) => (
              <Categories key={category.id} {...category} />
            ))}
          </motion.div>
        </div>
      </div >
      <div className="mt-96 relative z-0 ">
        <img src={backgroundShape} alt="" className='backgroundShape' />
        <svg xmlns="http://www.w3.org/2000/svg" width="305" height="177" viewBox="0 0 305 177" fill="none" className='absolute bottom-0 left-20 opacity-25'>
          <g>
            <path d="M19.3941 232.158C6.52704 209.018 7.88872e-06 182.469 6.62265e-06 153.234C5.35658e-06 123.998 6.52703 97.0702 19.3941 73.93C32.0452 50.9674 50.8637 32.1084 73.667 19.54C96.5965 6.78189 122.96 0.3081 152.042 0.308099C181.125 0.308097 207.539 6.78188 230.588 19.54C253.444 32.077 272.309 50.941 284.979 73.93C297.846 97.0702 304.373 123.74 304.373 153.234C304.373 182.727 297.846 209.328 284.979 232.348C272.237 255.277 253.39 274.117 230.588 286.721C207.522 299.616 181.091 306.142 152.025 306.142C122.96 306.142 96.5796 299.599 73.616 286.703C50.8531 274.028 32.0649 255.128 19.3941 232.158ZM253.738 153.182C253.989 135.178 249.375 117.448 240.395 101.908C231.656 86.9677 219.055 74.7279 203.953 66.5092C187.88 58.1135 170.058 53.7329 151.974 53.7329C133.89 53.7329 116.069 58.1135 99.996 66.5092C84.9628 74.6649 72.4279 86.8439 63.7574 101.719C55.1081 117.453 50.5684 135.164 50.5684 153.173C50.5684 171.182 55.1081 188.893 63.7574 204.628C72.4286 219.502 84.9633 231.681 99.996 239.837C116.069 248.233 133.89 252.614 151.974 252.614C170.058 252.614 187.88 248.233 203.953 239.837C219.055 231.619 231.656 219.379 240.395 204.438C249.373 188.905 253.987 171.18 253.738 153.182Z" fill="#F9F9F9" />
          </g>
        </svg>

      </div>

      <div className="mt-40 w-11/12 m-auto flex justify-between">
        <div className="left w-2/5 z-10">
          <div className="flex items-center gap-3 justify-start">
            <div className="logo w-12 h-12 rounded-lg flex items-center justify-center" style={{
              background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#clip0_61_172)">
                  <path d="M15 0H5C4.33696 0 3.70107 0.263392 3.23223 0.732233C2.76339 1.20107 2.5 1.83696 2.5 2.5V7.5H17.5V2.5C17.5 1.83696 17.2366 1.20107 16.7678 0.732233C16.2989 0.263392 15.663 0 15 0V0ZM17.5 8.75H12.5V11.25H17.5V8.75ZM17.5 12.5H12.5V15H17.5V12.5ZM17.5 16.25H12.5V20H15C15.663 20 16.2989 19.7366 16.7678 19.2678C17.2366 18.7989 17.5 18.163 17.5 17.5V16.25ZM11.25 20V16.25H7.5V20H11.25ZM6.25 20V16.25H2.5V17.5C2.5 18.163 2.76339 18.7989 3.23223 19.2678C3.70107 19.7366 4.33696 20 5 20H6.25ZM2.5 15H6.25V12.5H2.5V15ZM2.5 11.25H6.25V8.75H2.5V11.25ZM7.5 11.25V8.75H11.25V11.25H7.5ZM7.5 12.5H11.25V15H7.5V12.5Z" fill="#F9F9F9" />
                </g>
                <defs>
                  <clipPath id="clip0_61_172">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="txt font-semibold text-3xl font-workSans " style={{
              background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}>
              Request a Demo
            </div>
          </div>

          <div className="inputs flex flex-col items-center justify-center gap-3 mt-14">
            <div className="input">
              <input type="text" name="" id="" placeholder='First Name' className='w-96 h-10 rounded border border-textLight py-2 ps-2 font-normal text-base outline-none' />
            </div>

            <div className="input">
              <input type="text" name="" id="" placeholder='Last Name' className='w-96 h-10 rounded border border-textLight py-2 ps-2 font-normal text-base outline-none' />
            </div>

            <div className="input">
              <input type="email" name="" id="" placeholder='Email Address' className='w-96 h-10 rounded border border-textLight py-2 ps-2 font-normal text-base outline-none' />
            </div>

            <div className="input">
              <input type="number" name="" id="" placeholder='Contact Number' className='w-96 h-10 rounded border border-textLight py-2 ps-2 font-normal text-base outline-none' />
            </div>

            <div className="mb-16">
              <ScrollLink to="home" smooth={true} duration={800} className="text-xs font-medium text-textLight cursor-pointer">
                <button className='w-44 h-14 rounded-lg text-white leading-normal font-semibold text-base' style={{
                  background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                }}> Request a Demo</button>
              </ScrollLink>
            </div>
          </div>

        </div>

        <div className="right w-1/2 z-10">
          <img src={rectangle48} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Partners 