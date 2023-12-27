import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
import Partners from "../Partners/Partners"

// IMages 
import rectangle9 from '../../assets/Rectangle9.png'
import rectangle8 from '../../assets/Rectangle8.png'
import Ellipse3 from "../../assets/Ellipse3.png"
import Ellipse7 from "../../assets/Ellipse7.svg"
import Ellipse9 from "../../assets/Ellipse9.svg"
import Ellipse8 from "../../assets/Ellipse8.svg"

const Home = () => {
    return (
        <>
            {/* HOME */}

            <div className="Main font-workSans relative pb-72" id='home'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1028" height="1024" viewBox="0 0 1028 1024" fill="none" className='absolute z-0'>
                    <path d="M799.25 708.982L1028 0H0V1024L765.176 744.384C781.381 738.463 793.952 725.401 799.25 708.982Z" fill="url(#paint0_linear_17_14)" />
                    <defs>
                        <linearGradient id="paint0_linear_17_14" x1="0" y1="0" x2="1023.99" y2="1027.99" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00C6FF" />
                            <stop offset="1" stopColor="#0072FF" />
                        </linearGradient>
                    </defs>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="518" height="613" viewBox="0 0 518 613" fill="none" className='absolute'>
                    <path opacity="0.2" d="M-119.489 203.669C-133.245 257.544 -132.226 314.837 -116.441 373.982C-100.657 433.126 -72.8018 484.021 -34.0577 523.773C4.14981 563.284 52.7238 591.109 106.031 604.021C159.698 617.247 216.976 615.875 276.308 599.914C335.639 583.953 386.031 556.359 426.164 517.899C466.025 479.992 494.325 431.476 507.762 378.014C521.518 324.138 520.434 266.602 504.51 206.935C488.586 147.268 460.908 97.0351 422.229 57.5267C383.854 18.1329 335.231 -9.63872 281.907 -22.6208C227.888 -36.0509 170.443 -34.7462 111.146 -18.7943C51.8495 -2.84247 1.56434 24.8716 -38.3208 63.5635C-77.9156 101.7 -106.041 150.247 -119.489 203.669ZM401.237 234.829C411.469 271.114 411.629 309.516 401.7 345.881C391.938 380.903 372.84 412.581 346.466 437.496C318.209 463.302 284.217 481.945 247.324 491.87C210.431 501.795 171.707 502.714 134.385 494.55C99.3119 486.301 67.1638 468.542 41.4439 443.207C15.3032 416.123 -3.52079 382.784 -13.2443 346.351C-22.9679 309.917 -23.2689 271.596 -14.1189 235.017C-4.45999 200.167 14.5365 168.649 40.8009 143.898C69.0576 118.092 103.05 99.4486 139.943 89.5237C176.836 79.5989 215.56 78.6802 252.882 86.8442C288.131 95.1821 320.446 113.029 346.341 138.458C373.045 164.956 392.028 198.281 401.237 234.829Z" fill="url(#paint0_linear_17_31)" />
                    <defs>
                        <linearGradient id="paint0_linear_17_31" x1="-33.8735" y1="683.358" x2="418.693" y2="-104.279" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00C6FF" />
                            <stop offset="1" stopColor="#0072FF" />
                        </linearGradient>
                    </defs>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="399" height="619" viewBox="0 0 399 619" fill="none" className='absolute right-0 bottom-5'>
                    <path opacity="0.4" d="M580.72 469.134C606.94 422.374 620.24 368.725 620.24 309.648C620.24 250.572 606.94 196.157 580.72 149.397C554.94 102.996 516.592 64.8865 470.125 39.4892C423.4 13.7084 369.678 0.626606 310.415 0.626604C251.151 0.626601 197.326 13.7084 150.358 39.4892C103.782 64.8232 65.34 102.942 39.5205 149.397C13.3005 196.157 5.01758e-05 250.05 4.7581e-05 309.648C4.49862e-05 369.247 13.3005 423 39.5205 469.517C65.4859 515.851 103.892 553.923 150.358 579.39C197.36 605.449 251.22 618.635 310.449 618.635C369.678 618.635 423.434 605.414 470.228 579.355C516.614 553.741 554.9 515.549 580.72 469.134ZM103.183 309.544C102.672 273.163 112.074 237.334 130.373 205.934C148.181 175.743 173.858 151.009 204.634 134.402C237.386 117.436 273.702 108.584 310.553 108.584C347.404 108.584 383.72 117.436 416.472 134.402C447.106 150.882 472.65 175.492 490.318 205.551C507.943 237.346 517.194 273.135 517.194 309.527C517.194 345.918 507.943 381.707 490.318 413.502C472.648 443.56 447.105 468.17 416.472 484.652C383.72 501.617 347.404 510.469 310.553 510.469C273.702 510.469 237.386 501.617 204.634 484.652C173.858 468.044 148.181 443.31 130.373 413.119C112.077 381.73 102.675 345.914 103.183 309.544Z" fill="url(#paint0_linear_26_243)" />
                    <defs>
                        <linearGradient id="paint0_linear_26_243" x1="620.24" y1="0.626617" x2="2.23555" y2="620.863" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0072FF" />
                            <stop offset="1" stopColor="#00C6FF" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="border-2 border-dashed border-red-700 rounded-full h-96 w-96 absolute -top-20 right-96 opacity-30"></div>
                <div className="border-2 border-solid border-red-700 rounded-full h-80 w-80 absolute bottom-28 left-72 opacity-30"></div>
                <div className="border-2 border-dashed border-red-700 rounded-full h-96 w-96 absolute bottom-20 left-64 opacity-30"></div>

                <div className="flex items-center justify-between h-auto  w-10/12 m-auto relative z-10">
                    {/* Left */}
                    <div className="left border w-4/6 my-44 ">
                        <div className="text-white">
                            <p className="uppercase font-semibold text-xl leading-normal">visual type scale</p>
                            <p className="font-bold text-7xl leading-normal">21st Century K-12</p>
                            <p className="font-normal text-5xl leading-normal">Digital Learning Solution</p>
                            <p className="leading-normal font-medium text-base">Transforming learning and teaching experience with the use of technology.</p>
                        </div>
                        <div className="mt-20 bg-white h-14 rounded-lg w-40 flex items-center gap-4 justify-center">
                            <button className="font-semibold leading-normal border pl-0" style={{
                                background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}>Learn More</button>

                            <div className="text-4xl border" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.1567 7.47168C23.2817 7.34666 23.3519 7.1771 23.3519 7.00029C23.3519 6.82349 23.2817 6.65392 23.1566 6.5289L17.4998 0.872043C17.3748 0.747018 17.2052 0.676778 17.0284 0.676773C16.8516 0.676769 16.682 0.747001 16.557 0.872018C16.432 0.997036 16.3617 1.1666 16.3618 1.34341C16.3618 1.52021 16.432 1.68978 16.557 1.8148L21.0759 6.33369L1.94398 6.33224C1.76695 6.33223 1.59718 6.40256 1.472 6.52773C1.34683 6.65291 1.27651 6.82268 1.27651 6.99971C1.27651 7.17674 1.34684 7.34652 1.47203 7.47171C1.59721 7.59689 1.76699 7.66722 1.94402 7.66722L21.0759 7.66678L16.5573 12.1854C16.4323 12.3104 16.362 12.48 16.362 12.6568C16.3621 12.8336 16.4323 13.0032 16.5573 13.1282C16.6823 13.2532 16.8519 13.3235 17.0287 13.3235C17.2055 13.3235 17.3751 13.2533 17.5001 13.1282L23.1567 7.47168Z" fill="url(#paint0_linear_934_59)" stroke="url(#paint1_linear_934_59)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_934_59" x1="12.3143" y1="18.314" x2="12.3149" y2="-4.314" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#00C6FF" />
                                            <stop offset="1" stopColor="#0072FF" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_934_59" x1="12.3143" y1="18.314" x2="12.3149" y2="-4.314" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#00C6FF" />
                                            <stop offset="1" stopColor="#0072FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                        </div>
                    </div>

                    {/* Right */}
                    <div className="right border w-2/5 m-auto relative bg-white rounded-lg my-40">
                        <svg xmlns="http://www.w3.org/2000/svg" width="105" height="107" viewBox="0 0 105 107" fill="none" className='absolute right-0'>
                            <path d="M196.619 55.3122C205.497 39.4356 210 21.2201 210 1.16173C210 -18.8966 205.497 -37.3721 196.619 -53.2487C187.891 -69.0033 174.907 -81.9426 159.174 -90.5657C143.354 -99.3191 125.165 -103.761 105.1 -103.761C85.0344 -103.761 66.8102 -99.3191 50.908 -90.5657C35.1382 -81.9641 22.1227 -69.0214 13.3808 -53.2487C4.50325 -37.3721 1.15717e-05 -19.0738 1.06907e-05 1.16172C9.80968e-06 21.3973 4.50324 39.6482 13.3808 55.4421C22.1721 71.1739 35.1755 84.1005 50.908 92.7474C66.8219 101.595 85.0578 106.072 105.111 106.072C125.165 106.072 143.366 101.583 159.209 92.7356C174.914 84.0389 187.877 71.0715 196.619 55.3122ZM34.9355 1.12628C34.7626 -11.2262 37.9459 -23.3911 44.1414 -34.0527C50.1708 -44.3034 58.8646 -52.7012 69.2846 -58.34C80.3738 -64.1004 92.6697 -67.1059 105.147 -67.1059C117.623 -67.1059 129.919 -64.1004 141.009 -58.34C151.381 -52.7444 160.029 -44.3884 166.011 -34.1826C171.979 -23.3872 175.111 -11.2357 175.111 1.12038C175.111 13.4765 171.979 25.628 166.011 36.4234C160.028 46.6288 151.38 54.9847 141.009 60.5808C129.919 66.3411 117.623 69.3467 105.147 69.3467C92.6697 69.3467 80.3738 66.3411 69.2846 60.5808C58.8646 54.942 50.1708 46.5442 44.1414 36.2934C37.9469 25.6358 34.7635 13.4749 34.9355 1.12628Z" fill="url(#paint0_linear_26_268)" />
                            <defs>
                                <linearGradient id="paint0_linear_26_268" x1="210" y1="-103.761" x2="0.16682" y2="106.239" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00C6FF" />
                                    <stop offset="1" stopColor="#0072FF" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className=" text-center">
                            <p className="mt-20 leading-normal font-normal text-base text-textLight">Login with your</p>
                            <p className="leading-normal font-semibold text-2xl mb-12" style={{
                                background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}>E Learning Account</p>
                        </div>

                        <div className="inputs flex flex-col items-center justify-center gap-3">
                            <div className="input">
                                <input type="text" name="" id="" placeholder='User Name' className='w-96 h-10 rounded border border-textLight py-2 ps-2 font-normal text-base outline-none' />
                            </div>

                            <div className="input">
                                <input type="password" name="" id="" placeholder='Password' className='w-96 h-10 rounded border border-textLight py-2 ps-2 font-normal text-base outline-none' />
                            </div>

                            <div className="flex justify-between items-center border mb-10 w-96">
                                <div className=" flex justify-center items-center gap-2">
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" placeholder='fsd' className='w-3 h-3' />
                                    <label htmlFor="vehicle1" className='text-xs font-normal text-textLight' > Remember me</label>
                                </div>
                                <div className="">
                                    <p className="font-medium text-xs text-primaryBlue">Forgot Password?</p>
                                </div>
                            </div>

                            <div className="mb-16">
                                <NavLink to="/Dashmain">
                                    <button className='w-44 h-14 rounded-lg text-white leading-normal font-semibold text-base' style={{
                                        background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                                    }}>Login</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* OVERVIEW */}

            <div className='overview'>
                <div className="flex w-11/12 ml-auto py-32 font-workSans" id='overview'>
                    {/* Left Section */}
                    <div className="left border border-dotted border-gray-500  w-2/5 flex flex-col gap-6">
                        <div className="l-top flex items-center gap-2">
                            <div className="l-top-left  w-12 h-12 rounded-lg flex items-center justify-center" style={{
                                background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_27_41)">
                                        <path d="M0 2.5C0 1.83696 0.263392 1.20107 0.732233 0.732233C1.20107 0.263392 1.83696 0 2.5 0L12.5 0C13.163 0 13.7989 0.263392 14.2678 0.732233C14.7366 1.20107 15 1.83696 15 2.5V5H17.5C18.163 5 18.7989 5.26339 19.2678 5.73223C19.7366 6.20107 20 6.83696 20 7.5V17.5C20 18.163 19.7366 18.7989 19.2678 19.2678C18.7989 19.7366 18.163 20 17.5 20H7.5C6.83696 20 6.20107 19.7366 5.73223 19.2678C5.26339 18.7989 5 18.163 5 17.5V15H2.5C1.83696 15 1.20107 14.7366 0.732233 14.2678C0.263392 13.7989 0 13.163 0 12.5V2.5ZM15 5H6.25C5.91848 5 5.60054 5.1317 5.36612 5.36612C5.1317 5.60054 5 5.91848 5 6.25V15H13.75C14.0815 15 14.3995 14.8683 14.6339 14.6339C14.8683 14.3995 15 14.0815 15 13.75V5Z" fill="#F9F9F9" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_27_41">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="l-top-right font-semibold text-3xl" style={{
                                background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}>
                                Overview
                            </div>
                        </div>
                        <div className="l-center text-base font-normal leading-6 text-textLight">
                            Learn Smart Classroom, powered by Singapore-based Knowledge Platform, is used by over 700 schools in Pakistan and over 1,000 schools in China. This solution uses modern teaching techniques to improve each child’s education by making classroom learning more effective and engaging. Through Learn Smart Classroom, your child will join a global community of over 500,000 bright learners from China, the Philippines, Myanmar and Pakistan.
                        </div>
                        <div className="l-bottom w-44 flex items-center gap-3 justify-between">
                            <ScrollLink to="home" smooth={true} duration={800} className="font-semibold text-base cursor-pointer border" style={{
                                background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}>
                                Request a Demo
                            </ScrollLink>

                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.1567 7.47168C23.2817 7.34666 23.3519 7.1771 23.3519 7.00029C23.3519 6.82349 23.2817 6.65392 23.1566 6.5289L17.4998 0.872043C17.3748 0.747018 17.2052 0.676778 17.0284 0.676773C16.8516 0.676769 16.682 0.747001 16.557 0.872018C16.432 0.997036 16.3617 1.1666 16.3618 1.34341C16.3618 1.52021 16.432 1.68978 16.557 1.8148L21.0759 6.33369L1.94398 6.33224C1.76695 6.33223 1.59718 6.40256 1.472 6.52773C1.34683 6.65291 1.27651 6.82268 1.27651 6.99971C1.27651 7.17674 1.34684 7.34652 1.47203 7.47171C1.59721 7.59689 1.76699 7.66722 1.94402 7.66722L21.0759 7.66678L16.5573 12.1854C16.4323 12.3104 16.362 12.48 16.362 12.6568C16.3621 12.8336 16.4323 13.0032 16.5573 13.1282C16.6823 13.2532 16.8519 13.3235 17.0287 13.3235C17.2055 13.3235 17.3751 13.2533 17.5001 13.1282L23.1567 7.47168Z" fill="url(#paint0_linear_934_59)" stroke="url(#paint1_linear_934_59)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_934_59" x1="12.3143" y1="18.314" x2="12.3149" y2="-4.314" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#00C6FF" />
                                            <stop offset="1" stopColor="#0072FF" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_934_59" x1="12.3143" y1="18.314" x2="12.3149" y2="-4.314" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#00C6FF" />
                                            <stop offset="1" stopColor="#0072FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="right border border-dotted border-gray-500  w-3/5 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="498" height="464" viewBox="0 0 498 464" fill="none" className='ml-auto'>
                            <path d="M24.3993 0.000366211H499V464L125.824 315.564C98.7109 304.78 77.9744 282.248 69.4718 254.335L1.44073 30.9937C-3.25614 15.5741 8.28026 0.000366211 24.3993 0.000366211Z" fill="url(#paint0_linear_26_278)" />
                            <defs>
                                <linearGradient id="paint0_linear_26_278" x1="-8" y1="0.000366211" x2="454.184" y2="505.016" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0072FF" />
                                    <stop offset="1" stopColor="#00C6FF" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="125" height="197" viewBox="0 0 125 197" fill="none" className='absolute top-0 right-0'>
                            <g style={{ mixBlendMode: 'screen', opacity: 0.2 }} opacity="0.2">
                                <path d="M286.502 123.183C299.438 100.165 306 73.7571 306 44.6772C306 15.5974 299.438 -11.1875 286.502 -34.2048C273.784 -57.0453 254.864 -75.8041 231.939 -88.3056C208.887 -100.996 182.383 -107.435 153.145 -107.435C123.907 -107.435 97.352 -100.996 74.1802 -88.3056C51.2014 -75.8352 32.2359 -57.0715 19.4977 -34.2048C6.56185 -11.1876 -5.34539e-06 15.3405 -6.62265e-06 44.6772C-7.8999e-06 74.0139 6.56185 100.473 19.4977 123.371C32.3079 146.178 51.2558 164.919 74.1802 177.455C97.369 190.282 123.941 196.773 153.162 196.773C182.383 196.773 208.904 190.265 231.991 177.437C254.875 164.829 273.764 146.03 286.502 123.183ZM50.906 44.6258C50.654 26.7177 55.2926 9.08146 64.3202 -6.37517C73.106 -21.2363 85.774 -33.4112 100.958 -41.5861C117.116 -49.9372 135.033 -54.2945 153.214 -54.2945C171.394 -54.2945 189.311 -49.9372 205.47 -41.5861C220.583 -33.4738 233.185 -21.3595 241.902 -6.56358C250.597 9.08713 255.161 26.7039 255.161 44.6173C255.161 62.5307 250.597 80.1474 241.902 95.7982C233.184 110.594 220.583 122.708 205.47 130.821C189.311 139.172 171.394 143.529 153.214 143.529C135.033 143.529 117.116 139.172 100.958 130.821C85.774 122.646 73.106 110.471 64.3202 95.6097C55.294 80.1588 50.6554 62.5284 50.906 44.6258Z" fill="#F9F9F9" />
                            </g>
                        </svg>

                        {/* Additional Divs */}
                        <div className="bg-overviewBlue h-56 w-56 absolute -top-20 right-48 rounded-lg flex items-center justify-center">
                            <div className=" font-semibold text-2xl leading-normal text-white border text-center">
                                1,000,000+ Students
                            </div>
                        </div>

                        <div className="bg-overviewWhite h-44 w-44 absolute top-20 right-96 rounded-lg flex items-center justify-center">
                            <div className=" font-semibold text-2xl leading-normal text-black border text-center">
                                <span className="text-3xl text-primaryBlue">100+</span>
                                <br />
                                Schools
                            </div>
                        </div>

                        <div className="bg-overviewBlue h-40 w-40 absolute top-56 right-80 rounded-lg flex items-center justify-center">
                            <div className=" font-semibold text-2xl leading-normal text-white border text-center">
                                20,000+ Teachers
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative  w-11/12 mr-auto pb-96 mt-10 pt-24 border border-dotted border-gray-500 overflow-hidden">
                    {/* Top Right SVG */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="163"
                        height="163"
                        viewBox="0 0 163 163"
                        fill="none"
                        className="absolute top-5 right-24 z-0"
                    >
                        <path
                            d="M152.614 123.52C159.505 111.29 163 97.2579 163 81.8062C163 66.3545 159.505 52.1223 152.614 39.892C145.839 27.7556 135.761 17.7881 123.549 11.1453C111.27 4.40229 97.1519 0.98071 81.5774 0.980709C66.0029 0.980709 51.8574 4.40229 39.5143 11.1453C27.274 17.7715 17.1714 27.7417 10.386 39.892C3.49537 52.1223 -2.84029e-06 66.218 -3.51897e-06 81.8062C-4.19764e-06 97.3944 3.49537 111.454 10.386 123.62C17.2098 135.739 27.3029 145.697 39.5143 152.358C51.8665 159.174 66.0211 162.623 81.5865 162.623C97.1519 162.623 111.279 159.165 123.577 152.349C135.767 145.649 145.828 135.66 152.614 123.52ZM27.1166 81.7789C26.9824 72.2634 29.4533 62.8923 34.2621 54.6793C38.9421 46.7828 45.6901 40.3137 53.778 35.9699C62.3854 31.5325 71.9294 29.2172 81.6138 29.2172C91.2982 29.2172 100.842 31.5325 109.449 35.9699C117.5 40.2804 124.213 46.7173 128.856 54.5792C133.488 62.8953 135.919 72.256 135.919 81.7744C135.919 91.2927 133.488 100.653 128.856 108.969C124.213 116.831 117.5 123.268 109.449 127.579C100.842 132.016 91.2982 134.331 81.6138 134.331C71.9294 134.331 62.3853 132.016 53.778 127.579C45.6901 123.235 38.9421 116.766 34.2621 108.869C29.454 100.659 26.9831 91.2915 27.1166 81.7789Z"
                            fill="url(#paint0_linear_32_32)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_32_32"
                                x1="163"
                                y1="0.980713"
                                x2="1.36377"
                                y2="163.975"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#0072FF" />
                                <stop offset="1" stopColor="#00C6FF" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div
                        className="h-overview w-3/4 m-auto bg-blue-100 relative z-10 flex items-center justify-center rounded-lg"
                        style={{
                            backgroundImage: `url(${rectangle9}), url(${rectangle8})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundBlendMode: 'multiply',
                            borderRadius: "16px"
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <circle opacity="0.5" cx="50" cy="50" r="50" fill="#00C6FF" />
                            <circle cx="50" cy="50" r="40" fill="#F9F9F9" />
                            <path d="M61.9891 51.3332L46.0823 60.8046C44.7324 61.6076 43 60.6353 43 59.0165V40.0737C43 38.4575 44.7299 37.4827 46.0823 38.2882L61.9891 47.7596C62.2961 47.9395 62.5514 48.1995 62.7289 48.5133C62.9065 48.8271 63 49.1835 63 49.5464C63 49.9093 62.9065 50.2657 62.7289 50.5795C62.5514 50.8933 62.2961 51.1533 61.9891 51.3332Z" fill="#397FC0" />
                        </svg>
                    </div>


                    {/* Bottom Left SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="1009" height="464" viewBox="0 0 1009 464" fill="none" className="absolute top-64 left-0 z-0">
                        <path d="M984.968 464L-0.00012207 464L-0.000162634 -3.21997e-05L802.482 157.426C828.723 162.574 851.627 178.433 865.679 201.184L1005.39 427.389C1015.26 443.378 1003.76 464 984.968 464Z" fill="url(#paint0_linear_27_61)" />
                        <defs>
                            <linearGradient id="paint0_linear_27_61" x1="1028" y1="464" x2="680.027" y2="-306.939" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00C6FF" />
                                <stop offset="1" stopColor="#0072FF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            {/* IMPACT */}

            <div className='py-20 font-inter' id='impact'>
                <div className="heading flex items-center gap-3 justify-center ">
                    <div className="logo w-12 h-12 rounded-lg flex items-center justify-center" style={{
                        background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M12.3169 0.183058C12.4342 0.300269 12.5 0.45924 12.5 0.625C12.5 0.79076 12.5658 0.949732 12.6831 1.06694C12.8003 1.18415 12.9592 1.25 13.125 1.25C13.2908 1.25 13.4497 1.31585 13.5669 1.43306C13.6842 1.55027 13.75 1.70924 13.75 1.875V2.5C13.75 2.66576 13.6842 2.82473 13.5669 2.94194C13.4497 3.05915 13.2908 3.125 13.125 3.125H6.875C6.70924 3.125 6.55027 3.05915 6.43306 2.94194C6.31585 2.82473 6.25 2.66576 6.25 2.5V1.875C6.25 1.70924 6.31585 1.55027 6.43306 1.43306C6.55027 1.31585 6.70924 1.25 6.875 1.25C7.04076 1.25 7.19973 1.18415 7.31694 1.06694C7.43415 0.949732 7.5 0.79076 7.5 0.625C7.5 0.45924 7.56585 0.300269 7.68306 0.183058C7.80027 0.065848 7.95924 0 8.125 0H11.875C12.0408 0 12.1997 0.065848 12.3169 0.183058Z" fill="#F9F9F9" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.375 1.25H5.10625C5.0375 1.445 5 1.65625 5 1.875V2.5C5 2.99728 5.19754 3.47419 5.54917 3.82583C5.9008 4.17746 6.37772 4.375 6.875 4.375H13.125C13.6223 4.375 14.0992 4.17746 14.4508 3.82583C14.8025 3.47419 15 2.99728 15 2.5V1.875C15 1.65625 14.9625 1.445 14.8938 1.25H15.625C16.1223 1.25 16.5992 1.44754 16.9508 1.79917C17.3025 2.15081 17.5 2.62772 17.5 3.125V18.125C17.5 18.6223 17.3025 19.0992 16.9508 19.4508C16.5992 19.8025 16.1223 20 15.625 20H4.375C3.87772 20 3.40081 19.8025 3.04917 19.4508C2.69754 19.0992 2.5 18.6223 2.5 18.125V3.125C2.5 2.62772 2.69754 2.15081 3.04917 1.79917C3.40081 1.44754 3.87772 1.25 4.375 1.25ZM14.215 12.5L12.475 6.695C12.4352 6.56203 12.351 6.4461 12.2381 6.36547C12.1251 6.28484 11.9885 6.24411 11.8498 6.24969C11.7111 6.25528 11.5783 6.30687 11.4722 6.39633C11.366 6.48578 11.2927 6.60801 11.2638 6.74375L9.89875 13.1138L8.72375 9.195C8.68775 9.0751 8.61657 8.96877 8.51943 8.88979C8.42229 8.81082 8.30367 8.76283 8.17895 8.75206C8.05422 8.74128 7.92913 8.76821 7.81989 8.82936C7.71065 8.8905 7.62228 8.98305 7.56625 9.095L5.86375 12.5H5.625C5.45924 12.5 5.30027 12.5658 5.18306 12.6831C5.06585 12.8003 5 12.9592 5 13.125C5 13.2908 5.06585 13.4497 5.18306 13.5669C5.30027 13.6842 5.45924 13.75 5.625 13.75H6.25C6.3661 13.7499 6.47988 13.7174 6.57857 13.6563C6.67726 13.5951 6.75697 13.5077 6.80875 13.4037L7.97875 11.0625L9.40125 15.805C9.44104 15.938 9.52396 16.0539 9.63693 16.1345C9.7499 16.2152 9.88649 16.2559 10.0252 16.2503C10.1639 16.2447 10.2967 16.1931 10.4028 16.1037C10.509 16.0142 10.5823 15.892 10.6112 15.7562L11.9763 9.38625L13.1512 13.305C13.19 13.4337 13.2691 13.5465 13.377 13.6266C13.4848 13.7068 13.6156 13.75 13.75 13.75H14.375C14.5408 13.75 14.6997 13.6842 14.8169 13.5669C14.9342 13.4497 15 13.2908 15 13.125C15 12.9592 14.9342 12.8003 14.8169 12.6831C14.6997 12.5658 14.5408 12.5 14.375 12.5H14.215Z" fill="#F9F9F9" />
                        </svg>
                    </div>
                    <div className="txt font-semibold text-3xl font-workSans" style={{
                        background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}>
                        Impact
                    </div>
                </div>

                <div className="cards w-10/12 m-auto mt-20 flex flex-wrap gap-10">
                    <div className="card relative border-2 bg-white border-solid rounded-lg border-cardBorder w-96 h-96 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="147" height="135" viewBox="0 0 147 135" fill="none" >
                            <path d="M147 0L8.00002 -1.21518e-05C3.58174 -1.2538e-05 1.49457e-05 3.58171 1.45594e-05 7.99999L3.45671e-06 135L106.348 92.5514C115.379 88.9467 122.282 81.4311 125.106 72.1263L147 0Z" fill="url(#paint0_linear_40_34)" />
                            <defs>
                                <linearGradient id="paint0_linear_40_34" x1="147" y1="0" x2="12.488" y2="146.469" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0072FF" />
                                    <stop offset="1" stopColor="#00C6FF" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className='absolute top-7 left-7'>
                            <g clipPath="url(#clip0_51_44)">
                                <path d="M28 7.00098C28.2552 7.00098 28.5072 7.05676 28.7385 7.16443L54.9885 19.4144C55.2976 19.5587 55.5578 19.7902 55.7371 20.0804C55.9164 20.3706 56.007 20.7069 55.9977 21.0479C55.9884 21.3889 55.8797 21.7197 55.6848 21.9997C55.49 22.2798 55.2175 22.4967 54.901 22.6239L52.5 23.5864V45.4999C53.4283 45.4999 54.3185 45.8687 54.9749 46.5251C55.6313 47.1814 56 48.0717 56 48.9999V55.9999H45.5V48.9999C45.5 48.0717 45.8688 47.1814 46.5252 46.5251C47.1815 45.8687 48.0718 45.4999 49 45.4999V24.9899L28.651 33.1239C28.2332 33.2914 27.7669 33.2914 27.349 33.1239L1.09904 22.6239C0.782524 22.4967 0.510094 22.2798 0.315253 21.9997C0.120412 21.7197 0.0116558 21.3889 0.00235919 21.0479C-0.00693742 20.7069 0.0836312 20.3706 0.262927 20.0804C0.442222 19.7902 0.702426 19.5587 1.01154 19.4144L27.2615 7.16443C27.4928 7.05676 27.7449 7.00098 28 7.00098Z" fill="#F9F9F9" />
                                <path d="M13.9097 31.502C14.1502 31.4897 14.3906 31.5272 14.616 31.612L28 36.631L41.384 31.612C41.6093 31.5272 41.8497 31.4897 42.0902 31.502C42.3307 31.5143 42.5661 31.5761 42.7816 31.6835C42.9971 31.7909 43.1881 31.9417 43.3427 32.1263C43.4973 32.3109 43.6121 32.5255 43.68 32.7565L45.43 38.7065C45.5525 39.1243 45.515 39.5727 45.3248 39.9642C45.1345 40.3557 44.8051 40.6623 44.401 40.824L28.651 47.124C28.2331 47.2915 27.7668 47.2915 27.349 47.124L11.599 40.824C11.1948 40.6623 10.8654 40.3557 10.6752 39.9642C10.4849 39.5727 10.4474 39.1243 10.57 38.7065L12.32 32.7565C12.3878 32.5255 12.5026 32.3109 12.6572 32.1263C12.8118 31.9417 13.0028 31.7909 13.2183 31.6835C13.4338 31.5761 13.6692 31.5143 13.9097 31.502Z" fill="#F9F9F9" />
                            </g>
                            <defs>
                                <clipPath id="clip0_51_44">
                                    <rect width="56" height="56" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="p-4">
                            <p className="text-2xl font-medium leading-normal pb-4">Student Learning</p>
                            <p className="leading-normal text-base pb-4 text-textLight"> <span className="text-xl" style={{
                                background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}>97% </span>Students understand concepts better with Learn Smart Classroom.</p>
                            <p className="leading-normal text-base pb-20 text-textLight"> <span className="text-xl" style={{
                                background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}>97% </span>Students consider learning from home is easy through Learn Smart Classroom.</p>
                        </div>
                    </div>

                    <div className="card relative border-2 border-solid border-cardBorder rounded-lg w-96 h-96">
                        <svg xmlns="http://www.w3.org/2000/svg" width="147" height="135" viewBox="0 0 147 135" fill="none" >
                            <path d="M147 0L8.00002 -1.21518e-05C3.58174 -1.2538e-05 1.49457e-05 3.58171 1.45594e-05 7.99999L3.45671e-06 135L106.348 92.5514C115.379 88.9467 122.282 81.4311 125.106 72.1263L147 0Z" fill="url(#paint0_linear_40_34)" />
                            <defs>
                                <linearGradient id="paint0_linear_40_34" x1="147" y1="0" x2="12.488" y2="146.469" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0072FF" />
                                    <stop offset="1" stopColor="#00C6FF" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className='absolute top-7 left-7'>
                            <path d="M28.0001 0L33.8416 3.024L40.3446 4.011L43.2916 9.891L47.9711 14.511L46.9001 21L47.9711 27.489L43.2916 32.109L40.3446 37.989L33.8416 38.976L28.0001 42L22.1586 38.976L15.6556 37.989L12.7086 32.109L8.02905 27.489L9.10005 21L8.02905 14.511L12.7086 9.891L15.6556 4.011L22.1586 3.024L28.0001 0Z" fill="#F9F9F9" />
                            <path d="M14.0001 41.279V56L28.0001 52.5L42.0001 56V41.279L34.9371 42.35L28.0001 45.941L21.0631 42.35L14.0001 41.279Z" fill="#F9F9F9" />
                        </svg>
                        <div className="p-4">
                            <p className="text-2xl font-medium leading-normal pb-4">Teaching Quality</p>
                            <p className="leading-normal text-base pb-4 text-textLight"> <span className="text-xl" style={{
                                background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}>98% </span>Students felt teaching quality improved.</p>
                            <p className="leading-normal text-base pb-20 text-textLight"> <span className="text-xl" style={{
                                background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}>90% </span>Improvement in subject and pedagogy knowledge.</p>
                        </div>
                    </div>

                    <div className="card relative border-2 border-solid border-cardBorder rounded-lg w-96 h-96">
                        <svg xmlns="http://www.w3.org/2000/svg" width="147" height="135" viewBox="0 0 147 135" fill="none">
                            <path d="M147 0L8.00002 -1.21518e-05C3.58174 -1.2538e-05 1.49457e-05 3.58171 1.45594e-05 7.99999L3.45671e-06 135L106.348 92.5514C115.379 88.9467 122.282 81.4311 125.106 72.1263L147 0Z" fill="url(#paint0_linear_40_34)" />
                            <defs>
                                <linearGradient id="paint0_linear_40_34" x1="147" y1="0" x2="12.488" y2="146.469" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0072FF" />
                                    <stop offset="1" stopColor="#00C6FF" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className='absolute top-7 left-7'>
                            <path d="M14 56C14 56 10.5 56 10.5 52.5C10.5 49 14 38.5 28 38.5C42 38.5 45.5 49 45.5 52.5C45.5 56 42 56 42 56H14ZM28 35.175C30.3206 35.175 32.5462 34.2531 34.1872 32.6122C35.8281 30.9712 36.75 28.7456 36.75 26.425C36.75 24.1044 35.8281 21.8788 34.1872 20.2378C32.5462 18.5969 30.3206 17.675 28 17.675C25.6794 17.675 23.4538 18.5969 21.8128 20.2378C20.1719 21.8788 19.25 24.1044 19.25 26.425C19.25 28.7456 20.1719 30.9712 21.8128 32.6122C23.4538 34.2531 25.6794 35.175 28 35.175Z" fill="#F9F9F9" />
                            <path d="M7 3.5C5.14348 3.5 3.36301 4.2375 2.05025 5.55025C0.737498 6.86301 0 8.64348 0 10.5V43.75C0 45.1424 0.553123 46.4777 1.53769 47.4623C2.52226 48.4469 3.85761 49 5.25 49H7.5355C8.26732 46.4279 9.53928 44.0415 11.2665 42H3.5V10.5C3.5 9.57174 3.86875 8.6815 4.52513 8.02513C5.1815 7.36875 6.07174 7 7 7H49C49.9283 7 50.8185 7.36875 51.4749 8.02513C52.1312 8.6815 52.5 9.57174 52.5 10.5V42H44.7335C46.6725 44.289 47.8485 46.8055 48.4645 49H50.75C52.1424 49 53.4777 48.4469 54.4623 47.4623C55.4469 46.4777 56 45.1424 56 43.75V10.5C56 8.64348 55.2625 6.86301 53.9497 5.55025C52.637 4.2375 50.8565 3.5 49 3.5H7Z" fill="#F9F9F9" />
                        </svg>
                        <div className="p-4">
                            <p className="text-2xl font-medium leading-normal pb-4">Student Engagement</p>
                            <p className="leading-normal text-base pb-4 text-textLight"> <span className="text-xl" style={{
                                background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}>80%-100% </span>Increase in students’ engagement in classroom.</p>
                            <p className="leading-normal text-base pb-20 text-textLight"> <span className="text-xl" style={{
                                background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}>90% </span>Students enjoy learning in Learn Smart Classroom.</p>
                        </div>
                    </div>

                    <div className="card relative border-2 border-solid border-cardBorder rounded-lg w-96 h-96">
                        <svg xmlns="http://www.w3.org/2000/svg" width="147" height="135" viewBox="0 0 147 135" fill="none">
                            <path d="M147 0L8.00002 -1.21518e-05C3.58174 -1.2538e-05 1.49457e-05 3.58171 1.45594e-05 7.99999L3.45671e-06 135L106.348 92.5514C115.379 88.9467 122.282 81.4311 125.106 72.1263L147 0Z" fill="url(#paint0_linear_40_34)" />
                            <defs>
                                <linearGradient id="paint0_linear_40_34" x1="147" y1="0" x2="12.488" y2="146.469" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0072FF" />
                                    <stop offset="1" stopColor="#00C6FF" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className='absolute top-7 left-7'>
                            <g clipPath="url(#clip0_51_38)">
                                <path d="M5.25 0C3.85761 0 2.52226 0.553123 1.53769 1.53769C0.553123 2.52226 0 3.85761 0 5.25L0 29.75C0 31.1424 0.553123 32.4777 1.53769 33.4623C2.52226 34.4469 3.85761 35 5.25 35H21V38.5H3.5C2.57174 38.5 1.6815 38.8688 1.02513 39.5251C0.368749 40.1815 0 41.0717 0 42L0 52.5C0 53.4283 0.368749 54.3185 1.02513 54.9749C1.6815 55.6312 2.57174 56 3.5 56H52.5C53.4283 56 54.3185 55.6312 54.9749 54.9749C55.6312 54.3185 56 53.4283 56 52.5V42C56 41.0717 55.6312 40.1815 54.9749 39.5251C54.3185 38.8688 53.4283 38.5 52.5 38.5H35V35H50.75C52.1424 35 53.4777 34.4469 54.4623 33.4623C55.4469 32.4777 56 31.1424 56 29.75V5.25C56 3.85761 55.4469 2.52226 54.4623 1.53769C53.4777 0.553123 52.1424 0 50.75 0L5.25 0ZM5.25 3.5H50.75C51.2141 3.5 51.6592 3.68437 51.9874 4.01256C52.3156 4.34075 52.5 4.78587 52.5 5.25V29.75C52.5 30.2141 52.3156 30.6593 51.9874 30.9874C51.6592 31.3156 51.2141 31.5 50.75 31.5H5.25C4.78587 31.5 4.34075 31.3156 4.01256 30.9874C3.68437 30.6593 3.5 30.2141 3.5 29.75V5.25C3.5 4.78587 3.68437 4.34075 4.01256 4.01256C4.34075 3.68437 4.78587 3.5 5.25 3.5ZM42 43.75C42 43.2859 42.1844 42.8408 42.5126 42.5126C42.8408 42.1844 43.2859 42 43.75 42C44.2141 42 44.6592 42.1844 44.9874 42.5126C45.3156 42.8408 45.5 43.2859 45.5 43.75C45.5 44.2141 45.3156 44.6592 44.9874 44.9874C44.6592 45.3156 44.2141 45.5 43.75 45.5C43.2859 45.5 42.8408 45.3156 42.5126 44.9874C42.1844 44.6592 42 44.2141 42 43.75ZM49 43.75C49 43.2859 49.1844 42.8408 49.5126 42.5126C49.8408 42.1844 50.2859 42 50.75 42C51.2141 42 51.6592 42.1844 51.9874 42.5126C52.3156 42.8408 52.5 43.2859 52.5 43.75C52.5 44.2141 52.3156 44.6592 51.9874 44.9874C51.6592 45.3156 51.2141 45.5 50.75 45.5C50.2859 45.5 49.8408 45.3156 49.5126 44.9874C49.1844 44.6592 49 44.2141 49 43.75ZM5.25 42H22.75C23.2141 42 23.6592 42.1844 23.9874 42.5126C24.3156 42.8408 24.5 43.2859 24.5 43.75C24.5 44.2141 24.3156 44.6592 23.9874 44.9874C23.6592 45.3156 23.2141 45.5 22.75 45.5H5.25C4.78587 45.5 4.34075 45.3156 4.01256 44.9874C3.68437 44.6592 3.5 44.2141 3.5 43.75C3.5 43.2859 3.68437 42.8408 4.01256 42.5126C4.34075 42.1844 4.78587 42 5.25 42ZM3.5 49.875C3.5 49.6429 3.59219 49.4204 3.75628 49.2563C3.92038 49.0922 4.14294 49 4.375 49H23.625C23.8571 49 24.0796 49.0922 24.2437 49.2563C24.4078 49.4204 24.5 49.6429 24.5 49.875C24.5 50.1071 24.4078 50.3296 24.2437 50.4937C24.0796 50.6578 23.8571 50.75 23.625 50.75H4.375C4.14294 50.75 3.92038 50.6578 3.75628 50.4937C3.59219 50.3296 3.5 50.1071 3.5 49.875Z" fill="#F9F9F9" />
                            </g>
                            <defs>
                                <clipPath id="clip0_51_38">
                                    <rect width="56" height="56" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="p-4">
                            <p className="text-2xl font-medium leading-normal pb-4">Digital Literacy</p>
                            <p className="leading-normal text-base pb-4 text-textLight"> <span className="text-xl" style={{
                                background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}>70% </span>Teachers had not touched computer prior to training.</p>
                        </div>
                    </div>

                    <div className="card relative border-2 border-solid border-cardBorder rounded-lg w-96 h-96">
                        <svg xmlns="http://www.w3.org/2000/svg" width="147" height="135" viewBox="0 0 147 135" fill="none">
                            <path d="M147 0L8.00002 -1.21518e-05C3.58174 -1.2538e-05 1.49457e-05 3.58171 1.45594e-05 7.99999L3.45671e-06 135L106.348 92.5514C115.379 88.9467 122.282 81.4311 125.106 72.1263L147 0Z" fill="url(#paint0_linear_40_34)" />
                            <defs>
                                <linearGradient id="paint0_linear_40_34" x1="147" y1="0" x2="12.488" y2="146.469" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0072FF" />
                                    <stop offset="1" stopColor="#00C6FF" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className='absolute top-7 left-7'>
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.0377 1.53769C20.0223 0.553123 21.3576 0 22.75 0H33.25C34.6424 0 35.9777 0.553123 36.9623 1.53769C37.9469 2.52226 38.5 3.85761 38.5 5.25V8.75C38.5 10.1424 37.9469 11.4777 36.9623 12.4623C35.9777 13.4469 34.6424 14 33.25 14H22.75C21.3576 14 20.0223 13.4469 19.0377 12.4623C18.0531 11.4777 17.5 10.1424 17.5 8.75V5.25C17.5 3.85761 18.0531 2.52226 19.0377 1.53769ZM34.4874 4.01256C34.1593 3.68437 33.7141 3.5 33.25 3.5H22.75C22.2859 3.5 21.8408 3.68437 21.5126 4.01256C21.1844 4.34075 21 4.78587 21 5.25V8.75C21 9.21413 21.1844 9.65925 21.5126 9.98744C21.8408 10.3156 22.2859 10.5 22.75 10.5H33.25C33.7141 10.5 34.1593 10.3156 34.4874 9.98744C34.8156 9.65925 35 9.21413 35 8.75V5.25C35 4.78587 34.8156 4.34075 34.4874 4.01256Z" fill="#F9F9F9" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5 5.25H14V8.75C14 11.0706 14.9219 13.2962 16.5628 14.9372C18.2038 16.5781 20.4294 17.5 22.75 17.5H33.25C34.3991 17.5 35.5369 17.2737 36.5985 16.8339C37.6601 16.3942 38.6247 15.7497 39.4372 14.9372C40.2497 14.1247 40.8942 13.1601 41.3339 12.0985C41.7737 11.0369 42 9.89907 42 8.75V5.25H45.5C47.3565 5.25 49.137 5.9875 50.4497 7.30025C51.7625 8.61301 52.5 10.3935 52.5 12.25V49C52.5 50.8565 51.7625 52.637 50.4497 53.9497C49.137 55.2625 47.3565 56 45.5 56H10.5C8.64348 56 6.86301 55.2625 5.55025 53.9497C4.2375 52.637 3.5 50.8565 3.5 49V12.25C3.5 10.3935 4.2375 8.61301 5.55025 7.30025C6.86301 5.9875 8.64348 5.25 10.5 5.25ZM27.489 41.489L37.989 30.989C38.3176 30.6604 38.5022 30.2147 38.5022 29.75C38.5022 29.2853 38.3176 28.8396 37.989 28.511C37.6604 28.1824 37.2147 27.9978 36.75 27.9978C36.2853 27.9978 35.8396 28.1824 35.511 28.511L26.25 37.7755L22.239 33.761C21.9104 33.4324 21.4647 33.2478 21 33.2478C20.5353 33.2478 20.0896 33.4324 19.761 33.761C19.4324 34.0896 19.2478 34.5353 19.2478 35C19.2478 35.4647 19.4324 35.9104 19.761 36.239L25.011 41.489C25.1736 41.652 25.3667 41.7813 25.5793 41.8695C25.7919 41.9577 26.0198 42.0031 26.25 42.0031C26.4802 42.0031 26.7081 41.9577 26.9207 41.8695C27.1333 41.7813 27.3264 41.652 27.489 41.489Z" fill="#F9F9F9" />
                        </svg>
                        <div className="p-4">
                            <p className="text-2xl font-medium leading-normal pb-4">Content Relevance</p>
                            <p className="leading-normal text-base pb-4 text-textLight"> <span className="text-xl" style={{
                                background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}>99% </span>Teachers find the content relevant to textbooks.</p>
                        </div>
                    </div>

                    <div className="card relative border-2 border-solid border-cardBorder rounded-lg w-96 h-96">
                        <svg xmlns="http://www.w3.org/2000/svg" width="147" height="135" viewBox="0 0 147 135" fill="none">
                            <path d="M147 0L8.00002 -1.21518e-05C3.58174 -1.2538e-05 1.49457e-05 3.58171 1.45594e-05 7.99999L3.45671e-06 135L106.348 92.5514C115.379 88.9467 122.282 81.4311 125.106 72.1263L147 0Z" fill="url(#paint0_linear_40_34)" />
                            <defs>
                                <linearGradient id="paint0_linear_40_34" x1="147" y1="0" x2="12.488" y2="146.469" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0072FF" />
                                    <stop offset="1" stopColor="#00C6FF" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" className='absolute top-7 left-7'>
                            <g clipPath="url(#clip0_51_42)">
                                <path d="M29.6555 1.17953C29.5372 0.834443 29.3141 0.534932 29.0173 0.322877C28.7205 0.110823 28.3648 -0.00317383 28 -0.00317383C27.6352 -0.00317383 27.2795 0.110823 26.9827 0.322877C26.6859 0.534932 26.4628 0.834443 26.3445 1.17953L24.339 7.00003H7C6.07174 7.00003 5.1815 7.36878 4.52513 8.02516C3.86875 8.68154 3.5 9.57178 3.5 10.5V35C3.5 35.9283 3.86875 36.8185 4.52513 37.4749C5.1815 38.1313 6.07174 38.5 7 38.5H13.475L8.8445 51.9295C8.69319 52.3686 8.7225 52.8498 8.92598 53.2672C9.12946 53.6847 9.49043 54.0042 9.9295 54.1555C10.3686 54.3068 10.8498 54.2775 11.2672 54.0741C11.6847 53.8706 12.0042 53.5096 12.1555 53.0705L17.178 38.5H26.25V47.25C26.25 47.7142 26.4344 48.1593 26.7626 48.4875C27.0908 48.8157 27.5359 49 28 49C28.4641 49 28.9093 48.8157 29.2374 48.4875C29.5656 48.1593 29.75 47.7142 29.75 47.25V38.5H38.822L43.8445 53.0705C43.9958 53.5096 44.3153 53.8706 44.7328 54.0741C45.1502 54.2775 45.6314 54.3068 46.0705 54.1555C46.5096 54.0042 46.8705 53.6847 47.074 53.2672C47.2775 52.8498 47.3068 52.3686 47.1555 51.9295L42.525 38.5H49C49.9283 38.5 50.8185 38.1313 51.4749 37.4749C52.1312 36.8185 52.5 35.9283 52.5 35V10.5C52.5 9.57178 52.1312 8.68154 51.4749 8.02516C50.8185 7.36878 49.9283 7.00003 49 7.00003H31.661L29.6555 1.17953Z" fill="#F9F9F9" />
                            </g>
                            <defs>
                                <clipPath id="clip0_51_42">
                                    <rect width="56" height="56" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="p-4">
                            <p className="text-2xl font-medium leading-normal pb-4">Training & Support</p>
                            <p className="leading-normal text-base pb-4 text-textLight"> <span className="text-xl" style={{
                                background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}>90% </span>Teachers are satisfied from training and support.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FEEDBACK */}

            <div className='py-40 flex border border-solid border-sky-900 relative' id='feedback'>
                <div className="relative w-1/12 border border-solid border-sky-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="392" height="678" viewBox="0 0 392 678" fill="none">
                        <path d="M348.545 513.504C377.376 462.304 392.001 403.561 392.001 338.875C392.001 274.189 377.376 214.608 348.545 163.408C320.198 112.601 278.032 70.8739 226.938 43.0652C175.56 14.8366 116.489 0.512683 51.3247 0.51268C-13.8399 0.512678 -73.0251 14.8366 -124.669 43.0652C-175.883 70.8046 -218.153 112.543 -246.543 163.408C-275.374 214.608 -289.999 273.618 -289.999 338.875C-289.999 404.133 -275.374 462.99 -246.543 513.923C-217.992 564.656 -175.762 606.343 -124.669 634.228C-72.987 662.762 -13.7637 677.2 51.3628 677.2C116.489 677.2 175.598 662.724 227.052 634.19C278.056 606.144 320.154 564.326 348.545 513.504ZM-176.542 338.761C-177.104 298.926 -166.765 259.695 -146.645 225.313C-127.063 192.256 -98.8294 165.174 -64.9891 146.989C-28.9757 128.413 10.9569 118.72 51.477 118.72C91.997 118.72 131.93 128.413 167.943 146.989C201.628 165.034 229.714 191.982 249.142 224.894C268.522 259.708 278.694 298.895 278.694 338.742C278.694 378.589 268.522 417.776 249.142 452.59C229.713 485.501 201.626 512.448 167.943 530.495C131.93 549.071 91.997 558.764 51.477 558.764C10.9569 558.764 -28.9757 549.071 -64.9891 530.495C-98.8294 512.31 -127.063 485.228 -146.645 452.171C-166.762 417.801 -177.1 378.584 -176.542 338.761Z" fill="url(#paint0_linear_51_60)" />
                        <defs>
                            <linearGradient id="paint0_linear_51_60" x1="392.001" y1="0.512695" x2="-284.665" y2="682.492" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00C6FF" />
                                <stop offset="1" stopColor="#0072FF" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="477" height="844" viewBox="0 0 477 844" fill="none" className='absolute -top-20'>
                        <path d="M422.277 639.272L422.276 639.274C421.542 640.584 420.801 641.89 420.052 643.192L420.486 643.441C418.985 646.049 417.456 648.637 415.897 651.205L415.47 650.946C413.911 653.515 412.323 656.064 410.706 658.593L411.128 658.862C409.507 661.397 407.859 663.911 406.182 666.405L405.767 666.126C404.09 668.619 402.385 671.091 400.653 673.542L401.061 673.83C399.325 676.287 397.561 678.722 395.769 681.135L395.368 680.837C393.577 683.249 391.759 685.639 389.914 688.006L390.308 688.314C388.459 690.686 386.584 693.036 384.682 695.363L384.294 695.047C382.394 697.373 380.466 699.675 378.513 701.955L378.892 702.28C376.935 704.564 374.952 706.824 372.943 709.061L372.571 708.727C370.565 710.961 368.532 713.171 366.474 715.358L366.838 715.7C364.778 717.89 362.692 720.056 360.581 722.196L360.225 721.845C358.116 723.984 355.983 726.097 353.825 728.186L354.173 728.545C352.013 730.636 349.828 732.702 347.62 734.743L347.28 734.376C345.075 736.413 342.846 738.425 340.593 740.411L340.924 740.786C338.669 742.775 336.391 744.737 334.09 746.673L333.768 746.29C331.47 748.223 329.15 750.129 326.807 752.009L327.12 752.399C324.775 754.279 322.408 756.133 320.019 757.96L319.715 757.563C317.331 759.387 314.924 761.183 312.496 762.952L312.791 763.356C310.361 765.125 307.911 766.868 305.438 768.582L305.154 768.171C302.687 769.881 300.2 771.564 297.692 773.218L297.968 773.635C295.459 775.29 292.93 776.916 290.381 778.514L290.115 778.09C287.572 779.684 285.009 781.249 282.426 782.785L282.682 783.215C280.1 784.751 277.498 786.258 274.877 787.735L274.632 787.3C273.324 788.037 272.012 788.767 270.695 789.489L270.693 789.49C269.414 790.198 268.13 790.899 266.843 791.593L267.081 792.033C264.503 793.422 261.911 794.784 259.304 796.118L259.076 795.673C256.474 797.004 253.856 798.308 251.223 799.584L251.441 800.034C248.808 801.31 246.159 802.558 243.496 803.779L243.288 803.324C240.631 804.542 237.96 805.732 235.274 806.894L235.472 807.353C232.787 808.515 230.087 809.649 227.373 810.755L227.184 810.292C224.479 811.395 221.76 812.47 219.026 813.517L219.205 813.984C216.474 815.03 213.729 816.049 210.97 817.04L210.801 816.569C208.052 817.557 205.29 818.517 202.513 819.449L202.672 819.923C199.9 820.854 197.115 821.758 194.316 822.634L194.167 822.157C191.381 823.029 188.581 823.874 185.768 824.691L185.908 825.171C183.102 825.987 180.282 826.776 177.449 827.538L177.319 827.055C174.5 827.813 171.668 828.544 168.823 829.248L168.943 829.734C166.106 830.436 163.257 831.112 160.395 831.761L160.284 831.273C157.439 831.918 154.581 832.537 151.711 833.129L151.812 833.618C148.951 834.209 146.078 834.773 143.193 835.31L143.101 834.819C140.233 835.353 137.352 835.862 134.46 836.344L134.542 836.837C131.66 837.318 128.767 837.773 125.862 838.202L125.789 837.707C122.904 838.133 120.007 838.534 117.098 838.909L117.162 839.405C114.267 839.778 111.36 840.126 108.442 840.449L108.387 839.952C105.488 840.273 102.578 840.568 99.6574 840.839L99.7035 841.337C96.7963 841.606 93.8782 841.851 90.9492 842.071L90.9118 841.572C88.003 841.79 85.0834 841.984 82.1533 842.153L82.1821 842.653C79.2682 842.821 76.3438 842.965 73.409 843.085L73.3886 842.586C70.4759 842.705 67.5529 842.8 64.6197 842.871L64.6319 843.371C61.7146 843.442 58.7873 843.489 55.8501 843.513L55.8461 843.013C54.3841 843.024 52.9196 843.03 51.4527 843.03C49.9834 843.03 48.5165 843.024 47.052 843.013L47.048 843.513C44.1059 843.489 41.1736 843.442 38.2511 843.371L38.2632 842.871C35.3252 842.8 32.3972 842.704 29.4793 842.585L29.4589 843.085C26.5192 842.965 23.5897 842.821 20.6706 842.652L20.6994 842.153C17.7644 841.984 14.8398 841.79 11.9259 841.571L11.8885 842.07C8.95468 841.85 6.03155 841.605 3.11917 841.336L3.16522 840.838C0.239313 840.567 -2.6757 840.271 -5.57969 839.951L-5.63456 840.448C-8.55744 840.125 -11.4692 839.777 -14.3697 839.403L-14.3059 838.907C-17.2194 838.532 -20.1216 838.132 -23.0122 837.706L-23.0852 838.2C-25.9951 837.771 -28.8934 837.316 -31.78 836.836L-31.6979 836.343C-34.5953 835.86 -37.481 835.352 -40.3547 834.817L-40.4461 835.309C-43.3363 834.771 -46.2144 834.208 -49.0803 833.618L-48.9795 833.128C-51.8549 832.536 -54.718 831.917 -57.5687 831.273L-57.679 831.76C-60.5463 831.112 -63.4012 830.436 -66.2433 829.734L-66.1234 829.249C-68.9735 828.545 -71.8109 827.814 -74.6355 827.057L-74.7651 827.539C-77.6029 826.778 -80.428 825.99 -83.2399 825.175L-83.1007 824.694C-85.9187 823.877 -88.7235 823.033 -91.5151 822.162L-91.6641 822.639C-94.4685 821.764 -97.2596 820.861 -100.037 819.931L-99.8783 819.457C-102.66 818.525 -105.429 817.566 -108.183 816.58L-108.352 817.05C-111.116 816.06 -113.867 815.043 -116.604 813.997L-116.425 813.53C-119.165 812.484 -121.89 811.411 -124.601 810.309L-124.789 810.772C-127.509 809.668 -130.215 808.535 -132.907 807.374L-132.709 806.915C-135.401 805.755 -138.079 804.566 -140.742 803.35L-140.949 803.805C-143.619 802.586 -146.274 801.34 -148.914 800.065L-148.696 799.615C-151.335 798.341 -153.96 797.039 -156.569 795.71L-156.796 796.155C-159.41 794.824 -162.009 793.464 -164.593 792.077L-164.357 791.637C-165.647 790.944 -166.934 790.244 -168.217 789.537L-168.219 789.536C-169.539 788.818 -170.853 788.092 -172.163 787.359L-172.408 787.795C-175.033 786.326 -177.64 784.827 -180.227 783.299L-179.972 782.869C-182.56 781.341 -185.128 779.783 -187.676 778.198L-187.94 778.622C-190.495 777.033 -193.029 775.414 -195.543 773.767L-195.269 773.349C-197.782 771.703 -200.274 770.028 -202.746 768.326L-203.029 768.738C-205.507 767.031 -207.963 765.297 -210.398 763.535L-210.105 763.129C-212.539 761.368 -214.951 759.579 -217.341 757.764L-217.644 758.162C-220.039 756.342 -222.412 754.496 -224.762 752.622L-224.45 752.231C-226.799 750.359 -229.126 748.46 -231.429 746.535L-231.75 746.918C-234.057 744.989 -236.342 743.034 -238.603 741.053L-238.274 740.677C-240.533 738.698 -242.768 736.693 -244.98 734.662L-245.318 735.031C-247.533 732.997 -249.724 730.938 -251.891 728.853L-251.544 728.493C-253.708 726.411 -255.848 724.304 -257.963 722.173L-258.318 722.525C-260.436 720.39 -262.529 718.231 -264.597 716.048L-264.234 715.704C-266.298 713.524 -268.338 711.32 -270.352 709.092L-270.723 709.428C-272.739 707.197 -274.729 704.943 -276.693 702.666L-276.314 702.339C-278.275 700.066 -280.21 697.769 -282.118 695.449L-282.504 695.767C-284.414 693.446 -286.297 691.102 -288.153 688.735L-287.759 688.426C-289.612 686.064 -291.438 683.68 -293.236 681.274L-293.637 681.573C-295.436 679.165 -297.208 676.736 -298.952 674.285L-298.545 673.995C-300.285 671.55 -301.997 669.083 -303.682 666.595L-304.096 666.876C-305.78 664.387 -307.437 661.878 -309.066 659.348L-308.645 659.078C-310.269 656.554 -311.865 654.01 -313.432 651.446L-313.859 651.706C-315.426 649.143 -316.964 646.559 -318.472 643.956L-318.04 643.705C-318.793 642.407 -319.538 641.103 -320.276 639.794L-320.277 639.793C-320.995 638.527 -321.706 637.257 -322.411 635.983L-322.848 636.225C-324.258 633.674 -325.64 631.108 -326.994 628.526L-326.551 628.294C-327.902 625.716 -329.225 623.123 -330.519 620.514L-330.967 620.736C-332.262 618.126 -333.529 615.501 -334.767 612.861L-334.315 612.648C-335.55 610.014 -336.757 607.365 -337.936 604.701L-338.393 604.903C-339.572 602.239 -340.722 599.561 -341.844 596.867L-341.382 596.675C-342.501 593.991 -343.591 591.291 -344.652 588.578L-345.118 588.76C-346.179 586.049 -347.211 583.323 -348.216 580.583L-347.747 580.411C-348.747 577.681 -349.72 574.937 -350.665 572.178L-351.138 572.34C-352.081 569.587 -352.997 566.819 -353.884 564.037L-353.408 563.885C-354.291 561.117 -355.147 558.334 -355.975 555.538L-356.454 555.68C-357.28 552.891 -358.079 550.087 -358.85 547.27L-358.368 547.138C-359.135 544.336 -359.875 541.519 -360.587 538.689L-361.072 538.811C-361.783 535.991 -362.466 533.157 -363.122 530.309L-362.635 530.197C-363.287 527.367 -363.913 524.524 -364.511 521.668L-365.001 521.771C-365.597 518.926 -366.167 516.067 -366.71 513.196L-366.219 513.103C-366.759 510.249 -367.272 507.383 -367.76 504.504L-368.253 504.587C-368.738 501.72 -369.197 498.841 -369.63 495.949L-369.136 495.875C-369.565 493.004 -369.97 490.121 -370.348 487.226L-370.844 487.291C-371.22 484.41 -371.571 481.517 -371.897 478.612L-371.4 478.556C-371.723 475.671 -372.021 472.775 -372.294 469.866L-372.792 469.913C-373.063 467.02 -373.309 464.115 -373.531 461.199L-373.032 461.161C-373.252 458.266 -373.447 455.359 -373.617 452.442L-374.117 452.471C-374.286 449.571 -374.431 446.66 -374.552 443.738L-374.052 443.717C-374.172 440.818 -374.268 437.908 -374.339 434.988L-374.839 435C-374.91 432.096 -374.958 429.182 -374.982 426.258L-374.482 426.254C-374.493 424.798 -374.499 423.34 -374.499 421.88C-374.499 420.416 -374.493 418.955 -374.482 417.496L-374.982 417.492C-374.958 414.561 -374.91 411.641 -374.839 408.731L-374.339 408.743C-374.267 405.817 -374.171 402.901 -374.05 399.995L-374.55 399.974C-374.429 397.046 -374.283 394.129 -374.113 391.222L-373.614 391.251C-373.443 388.328 -373.247 385.415 -373.027 382.514L-373.525 382.476C-373.303 379.554 -373.056 376.643 -372.784 373.743L-372.286 373.789C-372.013 370.875 -371.714 367.972 -371.39 365.081L-371.887 365.026C-371.56 362.114 -371.208 359.215 -370.831 356.328L-370.335 356.392C-369.956 353.491 -369.551 350.602 -369.12 347.724L-369.614 347.65C-369.18 344.753 -368.72 341.867 -368.234 338.994L-367.741 339.077C-367.253 336.192 -366.738 333.32 -366.197 330.46L-366.689 330.367C-366.145 327.49 -365.574 324.625 -364.977 321.773L-364.487 321.875C-363.888 319.013 -363.261 316.164 -362.609 313.328L-363.096 313.216C-362.439 310.362 -361.755 307.522 -361.044 304.695L-360.559 304.817C-359.845 301.981 -359.105 299.158 -358.337 296.349L-358.82 296.217C-358.048 293.394 -357.249 290.584 -356.423 287.788L-355.943 287.93C-355.115 285.127 -354.259 282.338 -353.376 279.563L-353.852 279.412C-352.964 276.623 -352.049 273.849 -351.106 271.089L-350.633 271.25C-349.688 268.485 -348.715 265.734 -347.715 262.997L-348.184 262.826C-347.18 260.079 -346.148 257.346 -345.088 254.628L-344.622 254.81C-343.561 252.089 -342.471 249.383 -341.354 246.691L-341.816 246.499C-340.695 243.799 -339.546 241.113 -338.368 238.442L-337.911 238.643C-336.733 235.972 -335.527 233.315 -334.293 230.673L-334.746 230.461C-333.509 227.814 -332.244 225.181 -330.951 222.563L-330.503 222.784C-329.21 220.168 -327.889 217.566 -326.54 214.98L-326.983 214.749C-325.632 212.159 -324.252 209.584 -322.844 207.024L-322.406 207.265C-321.703 205.987 -320.993 204.713 -320.276 203.442L-320.275 203.441C-319.541 202.129 -318.8 200.822 -318.051 199.52L-318.485 199.271C-316.984 196.662 -315.454 194.072 -313.894 191.502L-313.467 191.762C-311.907 189.191 -310.318 186.641 -308.7 184.112L-309.121 183.843C-307.499 181.307 -305.849 178.792 -304.169 176.298L-303.755 176.578C-302.076 174.085 -300.368 171.613 -298.633 169.162L-299.041 168.873C-297.301 166.417 -295.534 163.983 -293.738 161.571L-293.337 161.869C-291.543 159.458 -289.721 157.069 -287.871 154.703L-288.265 154.395C-286.412 152.024 -284.532 149.676 -282.625 147.351L-282.238 147.668C-280.333 145.345 -278.4 143.044 -276.441 140.768L-276.82 140.441C-274.857 138.161 -272.868 135.904 -270.853 133.671L-270.482 134.006C-268.469 131.775 -266.431 129.568 -264.366 127.386L-264.729 127.043C-262.662 124.857 -260.569 122.696 -258.451 120.56L-258.096 120.912C-255.98 118.779 -253.84 116.671 -251.675 114.588L-252.021 114.228C-249.854 112.142 -247.661 110.082 -245.444 108.048L-245.106 108.417C-242.893 106.386 -240.656 104.381 -238.395 102.402L-238.724 102.026C-236.461 100.045 -234.174 98.0903 -231.864 96.1626L-231.543 96.5465C-229.237 94.6222 -226.908 92.7245 -224.556 90.8539L-224.867 90.4626C-222.513 88.5909 -220.137 86.7463 -217.738 84.9292L-217.437 85.3278C-215.043 83.5144 -212.627 81.7285 -210.189 79.9705L-210.481 79.5649C-208.043 77.8062 -205.582 76.0753 -203.1 74.3726L-202.817 74.785C-200.341 73.0866 -197.844 71.4165 -195.326 69.7749L-195.599 69.3561C-193.081 67.7143 -190.541 66.1011 -187.982 64.517L-187.719 64.9422C-185.165 63.3621 -182.592 61.8111 -179.999 60.2893L-180.252 59.8581C-177.66 58.3369 -175.048 56.8451 -172.416 55.383L-172.173 55.8201C-170.861 55.0906 -169.543 54.3686 -168.221 53.6541L-168.219 53.6532C-166.934 52.9526 -165.646 52.2589 -164.353 51.5721L-164.588 51.1306C-162.001 49.7555 -159.399 48.4079 -156.782 47.088L-156.557 47.5344C-153.944 46.2168 -151.317 44.9268 -148.676 43.6643L-148.891 43.2131C-146.249 41.9503 -143.592 40.7149 -140.92 39.5072L-140.714 39.9628C-138.049 38.758 -135.369 37.5806 -132.675 36.4308L-132.872 35.9709C-130.179 34.8214 -127.471 33.6994 -124.75 32.6049L-124.563 33.0688C-121.851 31.978 -119.125 30.9145 -116.384 29.8784L-116.561 29.4108C-113.823 28.3757 -111.072 27.368 -108.307 26.3876L-108.14 26.8589C-105.385 25.8821 -102.616 24.9325 -99.8335 24.01L-99.9908 23.5354C-97.2134 22.6146 -94.4224 21.7208 -91.6179 20.8541L-91.4703 21.3318C-88.6791 20.4692 -85.8745 19.6334 -83.0568 18.8245L-83.1947 18.344C-80.3834 17.5369 -77.559 16.7567 -74.7216 16.0032L-74.5933 16.4864C-71.7696 15.7366 -68.933 15.0132 -66.0836 14.3165L-66.2024 13.8308C-63.3615 13.1361 -60.5079 12.4678 -57.6418 11.826L-57.5325 12.3139C-54.6832 11.6758 -51.8215 11.0638 -48.9474 10.478L-49.0473 9.98806C-46.183 9.40425 -43.3066 8.8464 -40.418 8.31453L-40.3274 8.80626C-37.4555 8.27748 -34.5716 7.7744 -31.6758 7.29706L-31.7571 6.80372C-28.8726 6.32823 -25.9763 5.87826 -23.0683 5.45384L-22.996 5.9486C-20.1077 5.52704 -17.2077 5.13071 -14.2964 4.75963L-14.3596 4.26364C-11.4615 3.89424 -8.552 3.54985 -5.63135 3.23049L-5.577 3.72753C-2.67548 3.41025 0.237152 3.11771 3.16077 2.84991L3.11514 2.35199C6.02493 2.08546 8.94559 1.84343 11.877 1.62592L11.914 2.12455C14.8253 1.90853 17.7473 1.71672 20.6798 1.54915L20.6513 1.04996C23.5677 0.883315 26.4945 0.740617 29.4315 0.621895L29.4517 1.12149C32.3669 1.00365 35.2922 0.909453 38.2277 0.838924L38.2157 0.339068C41.1353 0.268919 44.0649 0.222162 47.0043 0.198822L47.0083 0.698806C48.4715 0.687188 49.9371 0.681378 51.4051 0.681378C52.8704 0.681378 54.3332 0.687166 55.7935 0.69874L55.7975 0.198756C58.7313 0.222009 61.6552 0.268594 64.5689 0.338484L64.5569 0.83834C67.4868 0.908618 70.4065 1.00248 73.3158 1.1199L73.3359 0.620311C76.2674 0.738628 79.1883 0.880843 82.0987 1.04693L82.0703 1.54612C84.9973 1.71316 87.9136 1.90436 90.8191 2.11971L90.856 1.62107C93.782 1.83793 96.6969 2.07925 99.6009 2.345L99.5553 2.84292C102.473 3.10997 105.38 3.40171 108.276 3.71812L108.33 3.22108C111.246 3.53962 114.149 3.88314 117.042 4.25161L116.978 4.74761C119.884 5.11779 122.778 5.51319 125.661 5.93376L125.733 5.439C128.636 5.86252 131.526 6.31155 134.405 6.78607L134.324 7.27941C137.214 7.75584 140.092 8.25799 142.958 8.78581L143.049 8.29408C145.932 8.82507 148.803 9.38202 151.661 9.9649L151.562 10.4548C154.43 11.0398 157.286 11.6509 160.13 12.2882L160.239 11.8003C163.1 12.4414 165.947 13.1089 168.782 13.8028L168.663 14.2884C171.507 14.9845 174.338 15.7072 177.156 16.4564L177.284 15.9732C180.116 16.7262 182.935 17.506 185.74 18.3125L185.602 18.7931C188.414 19.6016 191.213 20.437 193.998 21.2993L194.146 20.8217C196.944 21.6882 199.729 22.5818 202.5 23.5026L202.343 23.9771C205.119 24.8996 207.882 25.8493 210.631 26.8263L210.798 26.3552C213.557 27.3359 216.303 28.344 219.034 29.3794L218.856 29.8469C221.591 30.8836 224.311 31.9477 227.016 33.0392L227.203 32.5755C229.918 33.6709 232.619 34.7939 235.305 35.9444L235.108 36.404C237.796 37.5551 240.469 38.7338 243.126 39.94L243.333 39.4847C245.998 40.694 248.648 41.931 251.283 43.1956L251.067 43.6464C253.701 44.9108 256.321 46.2029 258.925 47.5226L259.151 47.0766C261.761 48.3989 264.355 49.7488 266.934 51.1265L266.699 51.5675C267.987 52.2557 269.272 52.9507 270.552 53.6527L270.554 53.6536C271.873 54.37 273.188 55.0938 274.498 55.8249L274.741 55.3884C277.367 56.8539 279.973 58.3491 282.559 59.8733L282.305 60.3041C284.892 61.8289 287.46 63.383 290.007 64.9658L290.271 64.5411C292.824 66.128 295.358 67.7438 297.87 69.388L297.596 69.8064C300.109 71.4503 302.6 73.1228 305.07 74.8232L305.353 74.4114C307.83 76.1161 310.285 77.849 312.718 79.6095L312.425 80.0146C314.857 81.7744 317.267 83.562 319.655 85.3768L319.958 84.9787C322.351 86.7972 324.721 88.6432 327.069 90.516L326.758 90.9069C329.104 92.7786 331.428 94.6773 333.729 96.6024L334.05 96.219C336.355 98.1476 338.636 100.103 340.894 102.084L340.564 102.46C342.82 104.439 345.052 106.445 347.261 108.476L347.599 108.108C349.811 110.142 351.998 112.202 354.161 114.288L353.814 114.648C355.974 116.73 358.11 118.838 360.22 120.971L360.576 120.62C362.689 122.755 364.777 124.916 366.84 127.101L366.477 127.444C368.536 129.625 370.571 131.831 372.579 134.061L372.951 133.727C374.961 135.959 376.946 138.215 378.904 140.494L378.525 140.82C380.48 143.096 382.408 145.395 384.31 147.717L384.697 147.4C386.6 149.724 388.476 152.071 390.325 154.44L389.931 154.748C391.777 157.112 393.595 159.499 395.386 161.908L395.787 161.61C397.579 164.021 399.343 166.453 401.08 168.907L400.671 169.196C402.403 171.644 404.108 174.114 405.783 176.605L406.198 176.326C407.874 178.817 409.522 181.33 411.141 183.863L410.72 184.132C412.335 186.659 413.922 189.206 415.479 191.774L415.906 191.515C417.463 194.082 418.991 196.669 420.489 199.275L420.056 199.525C420.803 200.825 421.544 202.13 422.276 203.441L422.277 203.442C422.994 204.712 423.704 205.987 424.407 207.265L424.845 207.024C426.252 209.583 427.63 212.158 428.981 214.75L428.537 214.981C429.885 217.566 431.204 220.168 432.495 222.786L432.944 222.565C434.235 225.183 435.498 227.817 436.733 230.466L436.279 230.677C437.511 233.319 438.714 235.977 439.89 238.65L440.348 238.449C441.522 241.12 442.669 243.807 443.788 246.509L443.326 246.7C444.441 249.392 445.527 252.099 446.586 254.821L447.052 254.64C448.11 257.358 449.14 260.092 450.142 262.839L449.672 263.011C450.67 265.748 451.641 268.499 452.584 271.265L453.057 271.104C453.999 273.865 454.912 276.639 455.798 279.428L455.322 279.579C456.204 282.355 457.058 285.144 457.886 287.946L458.365 287.805C459.191 290.601 459.989 293.411 460.76 296.234L460.277 296.365C461.044 299.175 461.785 301.997 462.498 304.833L462.983 304.711C463.694 307.538 464.378 310.379 465.035 313.232L464.548 313.344C465.202 316.181 465.829 319.029 466.429 321.89L466.918 321.788C467.517 324.64 468.089 327.504 468.634 330.38L468.143 330.473C468.685 333.334 469.201 336.206 469.691 339.089L470.184 339.005C470.672 341.879 471.134 344.764 471.57 347.66L471.075 347.734C471.508 350.613 471.916 353.502 472.297 356.402L472.793 356.337C473.173 359.225 473.527 362.124 473.855 365.033L473.359 365.089C473.685 367.981 473.986 370.883 474.262 373.796L474.76 373.749C475.035 376.649 475.284 379.56 475.508 382.48L475.01 382.519C475.233 385.421 475.43 388.333 475.603 391.254L476.103 391.225C476.275 394.133 476.422 397.05 476.545 399.977L476.045 399.998C476.167 402.905 476.264 405.821 476.337 408.745L476.837 408.733C476.91 411.644 476.958 414.565 476.983 417.494L476.483 417.498C476.495 418.956 476.501 420.417 476.501 421.88C476.501 423.336 476.495 424.791 476.483 426.243L476.983 426.247C476.959 429.164 476.911 432.071 476.839 434.969L476.339 434.956C476.266 437.869 476.169 440.772 476.048 443.665L476.548 443.686C476.426 446.601 476.279 449.505 476.108 452.399L475.609 452.369C475.436 455.279 475.239 458.178 475.017 461.067L475.516 461.105C475.292 464.014 475.043 466.911 474.77 469.798L474.272 469.751C473.997 472.651 473.696 475.541 473.37 478.419L473.867 478.475C473.539 481.372 473.185 484.258 472.805 487.133L472.309 487.067C471.928 489.955 471.521 492.831 471.088 495.695L471.582 495.77C471.146 498.653 470.684 501.525 470.196 504.385L469.703 504.301C469.213 507.172 468.696 510.03 468.153 512.877L468.644 512.971C468.098 515.834 467.525 518.685 466.926 521.523L466.437 521.42C465.835 524.268 465.207 527.103 464.552 529.926L465.039 530.039C464.38 532.878 463.695 535.705 462.982 538.519L462.497 538.396C461.782 541.217 461.04 544.026 460.271 546.822L460.753 546.954C459.981 549.763 459.181 552.559 458.353 555.341L457.874 555.199C457.045 557.987 456.188 560.762 455.304 563.523L455.78 563.676C454.892 566.45 453.976 569.21 453.033 571.957L452.56 571.795C451.616 574.545 450.643 577.283 449.643 580.006L450.112 580.178C449.109 582.911 448.077 585.63 447.018 588.335L446.553 588.153C445.493 590.859 444.405 593.552 443.289 596.231L443.751 596.423C442.632 599.11 441.485 601.782 440.309 604.441L439.852 604.238C438.677 606.896 437.474 609.54 436.244 612.169L436.696 612.381C435.463 615.016 434.202 617.636 432.912 620.242L432.464 620.02C431.176 622.624 429.86 625.213 428.515 627.787L428.958 628.018C427.612 630.596 426.238 633.159 424.836 635.707L424.398 635.466C423.698 636.739 422.991 638.007 422.277 639.272ZM-233.102 435.611C-233.216 432.533 -233.278 429.449 -233.287 426.363L-233.787 426.364C-233.791 424.823 -233.783 423.28 -233.761 421.737C-233.783 420.194 -233.792 418.651 -233.787 417.109L-233.287 417.11C-233.278 414.022 -233.217 410.938 -233.103 407.859L-233.602 407.84C-233.488 404.749 -233.321 401.663 -233.102 398.583L-232.604 398.619C-232.385 395.54 -232.113 392.467 -231.79 389.401L-232.287 389.349C-231.963 386.274 -231.586 383.206 -231.158 380.147L-230.663 380.216C-230.235 377.16 -229.755 374.113 -229.224 371.076L-229.716 370.99C-229.184 367.945 -228.599 364.91 -227.964 361.886L-227.474 361.989C-226.839 358.97 -226.153 355.962 -225.416 352.967L-225.902 352.848C-225.164 349.847 -224.374 346.859 -223.534 343.885L-223.053 344.021C-222.214 341.053 -221.325 338.099 -220.386 335.16L-220.862 335.008C-219.922 332.065 -218.931 329.138 -217.89 326.227L-217.419 326.395C-216.381 323.492 -215.293 320.605 -214.156 317.736L-214.621 317.552C-213.482 314.681 -212.295 311.827 -211.058 308.993L-210.6 309.193C-209.367 306.368 -208.085 303.562 -206.755 300.776L-207.206 300.561C-205.876 297.775 -204.497 295.009 -203.07 292.264L-202.627 292.495C-201.205 289.761 -199.736 287.048 -198.219 284.359L-198.654 284.113C-197.896 282.768 -197.125 281.429 -196.343 280.095L-196.342 280.093C-195.579 278.809 -194.807 277.533 -194.024 276.264L-193.599 276.527C-192.033 273.99 -190.427 271.482 -188.779 269.005L-189.196 268.728C-187.542 266.241 -185.848 263.785 -184.114 261.36L-183.708 261.651C-181.974 259.227 -180.201 256.834 -178.389 254.474L-178.785 254.169C-176.968 251.801 -175.111 249.466 -173.215 247.163L-172.829 247.481C-170.936 245.181 -169.005 242.914 -167.036 240.681L-167.411 240.351C-165.437 238.112 -163.426 235.908 -161.378 233.739L-161.015 234.082C-158.97 231.917 -156.89 229.786 -154.773 227.691L-155.125 227.336C-153.005 225.237 -150.849 223.174 -148.658 221.148L-148.319 221.515C-146.133 219.494 -143.912 217.509 -141.658 215.562L-141.985 215.184C-139.728 213.234 -137.437 211.322 -135.113 209.449L-134.8 209.838C-132.482 207.97 -130.132 206.141 -127.751 204.35L-128.051 203.951C-125.668 202.159 -123.253 200.407 -120.807 198.695L-120.52 199.104C-118.082 197.398 -115.614 195.732 -113.116 194.106L-113.389 193.687C-110.89 192.062 -108.362 190.477 -105.805 188.934L-105.546 189.362C-102.999 187.825 -100.424 186.33 -97.8206 184.877L-98.0643 184.441C-96.7624 183.714 -95.4536 182.998 -94.1381 182.293L-94.1307 182.289C-92.7281 181.567 -91.3209 180.856 -89.9089 180.156L-89.6868 180.604C-86.8641 179.204 -84.0228 177.848 -81.1641 176.534L-81.3728 176.08C-78.5056 174.762 -75.6207 173.489 -72.7194 172.259L-72.5242 172.719C-69.6239 171.49 -66.7072 170.304 -63.7748 169.163L-63.9561 168.697C-61.0164 167.552 -58.061 166.452 -55.0909 165.397L-54.9235 165.868C-51.9561 164.813 -48.9739 163.803 -45.9783 162.837L-46.1317 162.361C-43.1298 161.394 -40.1143 160.471 -37.0862 159.593L-36.947 160.074C-33.9228 159.197 -30.886 158.366 -27.8376 157.579L-27.9625 157.095C-24.9091 156.308 -21.8441 155.566 -18.7686 154.869L-18.6581 155.357C-15.5879 154.662 -12.5071 154.012 -9.41682 153.408L-9.5127 152.917C-6.41862 152.313 -3.31501 151.754 -0.202918 151.241L-0.12165 151.734C2.98382 151.223 6.09777 150.757 9.21914 150.337L9.15252 149.842C12.2764 149.422 15.4077 149.048 18.5454 148.721L18.5973 149.218C21.7269 148.892 24.863 148.612 28.0044 148.378L27.9674 147.88C31.1099 147.646 34.2579 147.459 37.4102 147.318L37.4325 147.818C40.5753 147.678 43.7225 147.584 46.873 147.537L46.8656 147.037C48.4414 147.014 50.018 147.002 51.5953 147.002C53.1727 147.002 54.7493 147.014 56.3251 147.037L56.3177 147.537C59.4682 147.584 62.6154 147.678 65.7582 147.818L65.7804 147.318C68.9328 147.459 72.0807 147.646 75.2233 147.88L75.1862 148.378C78.3277 148.612 81.4637 148.892 84.5934 149.218L84.6453 148.721C87.783 149.048 90.9143 149.422 94.0381 149.842L93.9715 150.337C97.0929 150.757 100.207 151.223 103.312 151.734L103.394 151.241C106.506 151.754 109.609 152.313 112.703 152.917L112.607 153.408C115.698 154.012 118.779 154.662 121.849 155.357L121.959 154.869C125.035 155.566 128.1 156.308 131.153 157.095L131.028 157.579C134.077 158.366 137.113 159.197 140.138 160.074L140.277 159.593C143.305 160.471 146.32 161.394 149.322 162.361L149.169 162.837C152.165 163.803 155.147 164.813 158.114 165.868L158.282 165.397C161.252 166.452 164.207 167.552 167.147 168.697L166.965 169.163C169.898 170.304 172.815 171.49 175.715 172.719L175.91 172.259C178.811 173.489 181.696 174.763 184.563 176.08L184.355 176.534C187.213 177.848 190.055 179.204 192.877 180.604L193.1 180.156C194.511 180.856 195.919 181.567 197.321 182.289L197.328 182.293C198.638 182.993 199.94 183.703 201.236 184.424L200.993 184.861C203.584 186.303 206.147 187.787 208.682 189.314L208.94 188.885C211.485 190.417 214.001 191.991 216.488 193.606L216.216 194.025C218.702 195.64 221.158 197.295 223.584 198.991L223.87 198.581C226.304 200.282 228.708 202.024 231.079 203.805L230.779 204.205C233.149 205.984 235.487 207.803 237.792 209.66L238.106 209.271C240.418 211.134 242.697 213.035 244.942 214.974L244.615 215.352C246.858 217.288 249.066 219.262 251.24 221.273L251.58 220.906C253.759 222.921 255.903 224.973 258.012 227.061L257.66 227.417C259.764 229.5 261.833 231.62 263.866 233.775L264.23 233.432C266.266 235.591 268.265 237.784 270.227 240.012L269.852 240.342C271.809 242.564 273.728 244.82 275.61 247.109L275.996 246.792C277.88 249.083 279.725 251.408 281.531 253.765L281.134 254.069C282.934 256.418 284.696 258.8 286.417 261.213L286.824 260.923C288.546 263.337 290.228 265.782 291.87 268.257L291.453 268.533C293.088 271 294.683 273.496 296.236 276.022L296.662 275.76C297.439 277.023 298.206 278.293 298.962 279.571L298.968 279.582C299.722 280.933 300.465 282.29 301.196 283.651L300.756 283.888C302.219 286.61 303.637 289.353 305.01 292.116L305.458 291.893C306.836 294.665 308.168 297.457 309.455 300.266L309.001 300.475C310.287 303.284 311.528 306.111 312.723 308.956L313.184 308.762C314.383 311.616 315.535 314.486 316.642 317.373L316.175 317.552C317.28 320.436 318.339 323.337 319.351 326.253L319.823 326.089C320.838 329.011 321.805 331.949 322.726 334.901L322.249 335.05C323.168 337.998 324.04 340.96 324.865 343.935L325.347 343.802C326.174 346.782 326.953 349.776 327.684 352.781L327.198 352.899C327.928 355.899 328.61 358.911 329.244 361.933L329.734 361.83C330.369 364.857 330.956 367.894 331.495 370.94L331.002 371.027C331.54 374.067 332.029 377.115 332.47 380.173L332.965 380.101C333.406 383.161 333.799 386.229 334.143 389.305L333.646 389.36C333.989 392.427 334.284 395.501 334.529 398.58L335.028 398.541C335.273 401.622 335.47 404.709 335.618 407.8L335.118 407.824C335.265 410.906 335.364 413.992 335.413 417.082L335.913 417.074C335.938 418.62 335.95 420.166 335.95 421.713C335.95 423.261 335.938 424.807 335.913 426.353L335.413 426.345C335.364 429.435 335.265 432.521 335.118 435.603L335.618 435.626C335.47 438.718 335.273 441.805 335.028 444.886L334.529 444.846C334.284 447.926 333.989 451 333.646 454.067L334.143 454.122C333.799 457.198 333.406 460.266 332.965 463.326L332.47 463.254C332.029 466.311 331.54 469.36 331.002 472.4L331.495 472.487C330.956 475.533 330.369 478.57 329.734 481.597L329.244 481.494C328.61 484.516 327.928 487.528 327.198 490.527L327.684 490.646C326.953 493.651 326.174 496.644 325.347 499.625L324.865 499.491C324.04 502.466 323.168 505.429 322.249 508.377L322.726 508.526C321.805 511.478 320.838 514.415 319.823 517.338L319.351 517.174C318.339 520.09 317.28 522.991 316.175 525.875L316.642 526.054C315.535 528.941 314.383 531.811 313.184 534.664L312.723 534.471C311.528 537.315 310.287 540.143 309.001 542.952L309.455 543.16C308.168 545.97 306.836 548.762 305.458 551.534L305.01 551.311C303.637 554.073 302.219 556.816 300.756 559.539L301.196 559.775C300.465 561.137 299.722 562.493 298.968 563.845L298.962 563.856C298.205 565.133 297.439 566.404 296.662 567.667L296.236 567.405C294.683 569.931 293.088 572.427 291.453 574.893L291.869 575.169C290.228 577.645 288.545 580.09 286.823 582.504L286.416 582.213C284.695 584.626 282.933 587.008 281.133 589.357L281.53 589.661C279.724 592.018 277.879 594.343 275.995 596.634L275.609 596.317C273.727 598.606 271.808 600.862 269.851 603.084L270.226 603.414C268.264 605.642 266.264 607.835 264.229 609.993L263.865 609.65C261.832 611.805 259.763 613.925 257.659 616.009L258.01 616.364C255.902 618.452 253.757 620.504 251.579 622.519L251.239 622.152C249.065 624.163 246.856 626.137 244.614 628.073L244.941 628.452C242.695 630.391 240.416 632.292 238.105 634.154L237.791 633.765C235.486 635.623 233.148 637.442 230.778 639.221L231.078 639.621C228.707 641.402 226.304 643.143 223.87 644.845L223.583 644.435C221.157 646.131 218.701 647.786 216.215 649.401L216.487 649.82C214.001 651.435 211.485 653.009 208.94 654.541L208.682 654.113C206.147 655.639 203.584 657.123 200.993 658.565L201.236 659.002C199.94 659.724 198.638 660.434 197.328 661.134L197.321 661.138C195.919 661.859 194.511 662.57 193.1 663.271L192.877 662.823C190.055 664.223 187.213 665.579 184.355 666.893L184.563 667.347C181.696 668.664 178.811 669.938 175.91 671.168L175.715 670.708C172.815 671.937 169.898 673.123 166.965 674.264L167.147 674.73C164.207 675.874 161.252 676.975 158.282 678.03L158.114 677.559C155.147 678.614 152.165 679.624 149.169 680.59L149.322 681.065C146.32 682.033 143.305 682.956 140.277 683.833L140.138 683.353C137.113 684.23 134.077 685.061 131.028 685.847L131.153 686.331C128.1 687.119 125.035 687.861 121.959 688.557L121.849 688.07C118.779 688.765 115.698 689.415 112.607 690.019L112.703 690.509C109.609 691.114 106.506 691.673 103.394 692.186L103.312 691.692C100.207 692.204 97.0929 692.67 93.9715 693.089L94.0381 693.585C90.9142 694.005 87.783 694.378 84.6452 694.706L84.5934 694.208C81.4637 694.535 78.3276 694.815 75.1861 695.049L75.2232 695.547C72.0807 695.781 68.9327 695.968 65.7804 696.109L65.7581 695.609C62.6153 695.749 59.4681 695.843 56.3176 695.889L56.325 696.389C54.7492 696.413 53.1726 696.424 51.5953 696.424C50.018 696.424 48.4413 696.413 46.8655 696.389L46.873 695.889C43.7225 695.843 40.5753 695.749 37.4325 695.609L37.4102 696.109C34.2579 695.968 31.1099 695.781 27.9674 695.547L28.0045 695.049C24.863 694.815 21.7269 694.535 18.5973 694.208L18.5454 694.706C15.4077 694.378 12.2763 694.005 9.1525 693.585L9.21909 693.089C6.09772 692.67 2.98383 692.204 -0.121643 691.692L-0.202942 692.186C-3.31503 691.673 -6.41864 691.114 -9.51273 690.509L-9.41684 690.019C-12.5071 689.415 -15.588 688.765 -18.6582 688.07L-18.7686 688.557C-21.8441 687.861 -24.9091 687.119 -27.9625 686.331L-27.8376 685.847C-30.886 685.061 -33.9228 684.23 -36.9471 683.353L-37.0862 683.833C-40.1143 682.956 -43.1298 682.033 -46.1317 681.065L-45.9783 680.59C-48.974 679.624 -51.9561 678.614 -54.9236 677.559L-55.091 678.03C-58.061 676.975 -61.0164 675.874 -63.9561 674.73L-63.7747 674.264C-66.7071 673.123 -69.624 671.937 -72.5243 670.708L-72.7194 671.168C-75.6208 669.938 -78.5056 668.664 -81.3729 667.347L-81.1642 666.893C-84.0229 665.579 -86.8641 664.223 -89.6868 662.823L-89.909 663.271C-91.3209 662.57 -92.7281 661.859 -94.1306 661.138L-94.1382 661.134C-95.4536 660.428 -96.7624 659.712 -98.0643 658.986L-97.8206 658.549C-100.424 657.097 -102.999 655.601 -105.546 654.064L-105.805 654.492C-108.362 652.95 -110.89 651.365 -113.389 649.739L-113.116 649.32C-115.614 647.695 -118.082 646.029 -120.52 644.322L-120.807 644.732C-123.253 643.02 -125.668 641.268 -128.051 639.476L-127.751 639.076C-130.132 637.286 -132.482 635.457 -134.8 633.588L-135.113 633.978C-137.437 632.104 -139.728 630.192 -141.985 628.243L-141.658 627.864C-143.912 625.917 -146.133 623.933 -148.319 621.911L-148.658 622.278C-150.849 620.252 -153.005 618.19 -155.125 616.091L-154.773 615.736C-156.89 613.641 -158.97 611.51 -161.015 609.344L-161.378 609.688C-163.426 607.519 -165.437 605.314 -167.411 603.076L-167.036 602.745C-169.005 600.512 -170.936 598.246 -172.829 595.945L-173.216 596.263C-175.111 593.961 -176.968 591.625 -178.785 589.257L-178.389 588.953C-180.201 586.592 -181.974 584.2 -183.708 581.776L-184.114 582.066C-185.848 579.641 -187.542 577.185 -189.196 574.699L-188.779 574.422C-190.427 571.944 -192.033 569.437 -193.599 566.9L-194.024 567.162C-194.807 565.893 -195.579 564.617 -196.342 563.334L-196.343 563.332C-197.125 561.999 -197.895 560.66 -198.654 559.315L-198.218 559.069C-199.735 556.381 -201.204 553.669 -202.626 550.936L-203.069 551.167C-204.496 548.424 -205.875 545.659 -207.205 542.873L-206.754 542.658C-208.084 539.873 -209.365 537.068 -210.598 534.244L-211.056 534.444C-212.293 531.611 -213.48 528.758 -214.618 525.888L-214.154 525.704C-215.291 522.836 -216.379 519.95 -217.417 517.048L-217.887 517.216C-218.928 514.307 -219.919 511.38 -220.859 508.438L-220.383 508.286C-221.322 505.348 -222.211 502.395 -223.05 499.428L-223.531 499.564C-224.371 496.591 -225.161 493.604 -225.899 490.604L-225.414 490.485C-226.151 487.491 -226.837 484.484 -227.471 481.466L-227.961 481.569C-228.596 478.546 -229.181 475.513 -229.714 472.469L-229.221 472.382C-229.753 469.346 -230.232 466.3 -230.661 463.244L-231.156 463.314C-231.584 460.256 -231.961 457.189 -232.285 454.115L-231.788 454.063C-232.111 450.998 -232.383 447.926 -232.602 444.848L-233.101 444.884C-233.32 441.805 -233.487 438.72 -233.601 435.63L-233.102 435.611Z" stroke="url(#paint0_linear_61_87)" strokeDasharray="9 9" />
                        <defs>
                            <linearGradient id="paint0_linear_61_87" x1="477.001" y1="0.181396" x2="-366.304" y2="852.137" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00C6FF" />
                                <stop offset="1" stopColor="#0072FF" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="204" height="304" viewBox="0 0 204 304" fill="none" className='absolute top-48'>
                        <path d="M184.068 229.865L184.067 229.867C183.278 231.278 182.465 232.673 181.628 234.053L182.056 234.312C180.373 237.089 178.595 239.801 176.729 242.444L176.32 242.156C174.455 244.797 172.5 247.37 170.46 249.869L170.847 250.185C168.796 252.697 166.658 255.136 164.439 257.496L164.075 257.154C161.863 259.507 159.569 261.783 157.198 263.976L157.537 264.343C155.159 266.543 152.703 268.66 150.174 270.691L149.861 270.301C147.346 272.321 144.758 274.256 142.101 276.1L142.386 276.511C139.728 278.356 137.002 280.111 134.212 281.773L133.956 281.343C132.57 282.168 131.168 282.97 129.751 283.749L129.749 283.749C128.557 284.409 127.356 285.053 126.146 285.679L126.376 286.123C123.95 287.379 121.487 288.567 118.988 289.687L118.784 289.231C116.303 290.344 113.786 291.39 111.235 292.368L111.414 292.835C108.87 293.811 106.291 294.72 103.679 295.562L103.526 295.086C100.943 295.919 98.3275 296.686 95.68 297.387L95.808 297.871C93.1788 298.567 90.5182 299.199 87.8269 299.765L87.7239 299.276C85.0733 299.834 82.3927 300.329 79.6829 300.761L79.7615 301.255C77.0801 301.682 74.3704 302.047 71.6329 302.35L71.5778 301.853C68.8885 302.151 66.1721 302.389 63.4294 302.566L63.4617 303.065C60.7552 303.24 58.0233 303.357 55.2666 303.415L55.2561 302.915C53.8979 302.944 52.5336 302.958 51.1633 302.958C49.7908 302.958 48.4242 302.944 47.0635 302.915L47.053 303.415C44.2921 303.357 41.5555 303.24 38.8439 303.065L38.8761 302.566C36.1292 302.389 33.4081 302.151 30.7136 301.853L30.6586 302.35C27.9169 302.047 25.2024 301.681 22.5159 301.254L22.5944 300.76C19.8802 300.329 17.1948 299.834 14.5389 299.276L14.4361 299.765C11.7405 299.199 9.07494 298.567 6.44028 297.871L6.56801 297.388C3.91599 296.687 1.29547 295.921 -1.2928 295.088L-1.44584 295.564C-4.06259 294.723 -6.64659 293.815 -9.19703 292.84L-9.01849 292.373C-11.5744 291.395 -14.0965 290.351 -16.584 289.24L-16.788 289.696C-19.2917 288.577 -21.7604 287.391 -24.1935 286.137L-23.9644 285.693C-25.1777 285.067 -26.382 284.425 -27.5774 283.766L-27.5795 283.765C-28.9992 282.991 -30.4035 282.194 -31.792 281.373L-32.0465 281.803C-34.8423 280.15 -37.5741 278.403 -40.2379 276.567L-39.954 276.155C-42.6165 274.319 -45.2106 272.393 -47.7323 270.381L-48.0442 270.772C-50.5796 268.748 -53.0421 266.639 -55.4272 264.446L-55.0888 264.078C-57.4671 261.892 -59.7681 259.624 -61.9879 257.278L-62.3511 257.621C-64.5777 255.268 -66.7227 252.836 -68.7819 250.33L-68.3956 250.013C-70.4439 247.52 -72.407 244.954 -74.2806 242.318L-74.6882 242.608C-76.563 239.97 -78.3486 237.264 -80.0408 234.492L-79.6141 234.231C-80.4546 232.855 -81.272 231.462 -82.0657 230.053L-82.0663 230.052C-82.7357 228.871 -83.3879 227.681 -84.0231 226.481L-84.465 226.715C-85.7384 224.309 -86.943 221.865 -88.0787 219.384L-87.6241 219.176C-88.7517 216.713 -89.8111 214.214 -90.8021 211.678L-91.2678 211.86C-92.2561 209.331 -93.1766 206.767 -94.0292 204.168L-93.5541 204.012C-94.3965 201.444 -95.1723 198.842 -95.8814 196.206L-96.3643 196.336C-97.068 193.72 -97.7061 191.071 -98.2785 188.39L-97.7895 188.286C-98.3528 185.647 -98.8522 182.978 -99.2875 180.278L-99.7812 180.357C-100.212 177.688 -100.58 174.988 -100.885 172.26L-100.388 172.204C-100.688 169.526 -100.927 166.82 -101.105 164.086L-101.604 164.119C-101.78 161.423 -101.898 158.701 -101.956 155.953L-101.456 155.943C-101.485 154.59 -101.499 153.23 -101.499 151.865C-101.499 150.496 -101.485 149.134 -101.456 147.778L-101.956 147.767C-101.897 145.014 -101.78 142.286 -101.603 139.584L-101.104 139.617C-100.925 136.878 -100.685 134.166 -100.384 131.481L-100.881 131.426C-100.575 128.692 -100.206 125.987 -99.7749 123.311L-99.2813 123.39C-98.8452 120.685 -98.3449 118.01 -97.7807 115.365L-98.2697 115.261C-97.6967 112.574 -97.0579 109.92 -96.3535 107.297L-95.8706 107.427C-95.1611 104.785 -94.385 102.177 -93.5424 99.6021L-94.0176 99.4466C-93.1652 96.8419 -92.2449 94.2714 -91.2569 91.7359L-90.7911 91.9174C-89.8007 89.3756 -88.7421 86.8691 -87.6156 84.3987L-88.0705 84.1912C-86.9362 81.7038 -85.7332 79.2527 -84.4616 76.8388L-84.0193 77.0719C-83.3852 75.8681 -82.734 74.6736 -82.0658 73.4886L-82.0649 73.4869C-81.2757 72.075 -80.4626 70.6788 -79.626 69.2989L-80.0536 69.0397C-78.3691 66.2612 -76.5898 63.5484 -74.7201 60.9057L-74.312 61.1944C-72.4434 58.5533 -70.4842 55.9823 -68.4386 53.4857L-68.8253 53.1688C-66.7686 50.6587 -64.625 48.2236 -62.3988 45.8677L-62.0353 46.2111C-59.816 43.8625 -57.5143 41.5929 -55.1345 39.4067L-55.4727 39.0385C-53.0859 36.8458 -50.6208 34.7367 -48.0819 32.7153L-47.7705 33.1065C-45.2456 31.0963 -42.6474 29.1733 -39.9801 27.3417L-40.2632 26.9295C-37.5947 25.0971 -34.8574 23.3558 -32.0556 21.71L-31.8024 22.1411C-30.411 21.3238 -29.0037 20.5301 -27.5809 19.7605L-27.5792 19.7596C-26.3824 19.1063 -25.1765 18.4696 -23.9616 17.8497L-24.1889 17.4044C-21.7537 16.1617 -19.2826 14.986 -16.7765 13.8773L-16.5742 14.3346C-14.0855 13.2337 -11.5621 12.1991 -9.00464 11.2312L-9.18163 10.7636C-6.63091 9.79814 -4.04651 8.89875 -1.42918 8.06558L-1.27751 8.54203C1.31029 7.71826 3.93048 6.95941 6.58234 6.26568L6.4558 5.78196C9.0892 5.09306 11.7536 4.46821 14.4483 3.90761L14.5502 4.39713C17.2043 3.84495 19.8882 3.35525 22.6009 2.92824L22.5232 2.43432C25.2075 2.01178 27.92 1.65046 30.6599 1.35053L30.7143 1.84756C33.4063 1.55287 36.1251 1.31759 38.87 1.14192L38.8381 0.642939C41.547 0.46957 44.2811 0.354101 47.0398 0.296694L47.0502 0.796585C48.4095 0.768298 49.7749 0.754144 51.1462 0.754144C52.515 0.754144 53.8777 0.768245 55.2344 0.796427L55.2447 0.296535C57.9985 0.353741 60.7272 0.468819 63.4304 0.641607L63.3985 1.14059C66.1385 1.31574 68.852 1.55033 71.5383 1.84418L71.5927 1.34715C74.3278 1.64634 77.035 2.00682 79.7135 2.4284L79.6358 2.92232C82.3438 3.34853 85.0223 3.83736 87.6706 4.38861L87.7725 3.8991C90.4625 4.459 93.1215 5.08314 95.749 5.77131L95.6223 6.255C98.2693 6.9483 100.884 7.70677 103.466 8.53021L103.618 8.05385C106.23 8.88707 108.809 9.78662 111.353 10.7523L111.175 11.2198C113.727 12.1884 116.245 13.2237 118.726 14.3256L118.929 13.8686C121.429 14.9787 123.894 16.1562 126.321 17.4008L126.093 17.8457C127.305 18.4667 128.507 19.1045 129.7 19.7591L129.702 19.76C131.121 20.5315 132.525 21.3271 133.913 22.1461L134.167 21.7155C136.963 23.3647 139.694 25.1087 142.356 26.9435L142.072 27.3552C144.733 29.189 147.325 31.1138 149.844 33.1252L150.156 32.7345C152.689 34.7571 155.148 36.867 157.53 39.0599L157.191 39.4277C159.565 41.6142 161.862 43.8836 164.076 46.2316L164.44 45.8885C166.661 48.2438 168.8 50.6779 170.853 53.1865L170.466 53.5031C172.507 55.9982 174.462 58.5674 176.327 61.2063L176.735 60.9178C178.602 63.5584 180.378 66.2686 182.059 69.0442L181.632 69.3032C182.467 70.6818 183.279 72.0765 184.067 73.4869L184.068 73.4886C184.736 74.673 185.386 75.8674 186.02 77.0717L186.463 76.8389C187.732 79.2515 188.933 81.7035 190.066 84.1932L189.611 84.4003C190.735 86.8705 191.791 89.378 192.78 91.9212L193.246 91.7401C194.231 94.276 195.15 96.8473 196 99.4523L195.525 99.6076C196.366 102.183 197.142 104.792 197.85 107.433L198.333 107.303C199.038 109.927 199.677 112.582 200.25 115.266L199.761 115.37C200.326 118.017 200.828 120.692 201.266 123.395L201.759 123.315C202.193 125.993 202.564 128.698 202.872 131.429L202.375 131.485C202.678 134.172 202.92 136.883 203.101 139.619L203.6 139.586C203.779 142.291 203.898 145.019 203.957 147.768L203.457 147.779C203.486 149.136 203.501 150.498 203.501 151.865C203.501 153.227 203.486 154.583 203.457 155.933L203.957 155.944C203.898 158.684 203.78 161.399 203.602 164.09L203.103 164.057C202.923 166.782 202.681 169.482 202.379 172.154L202.876 172.211C202.568 174.931 202.197 177.623 201.764 180.288L201.27 180.207C200.832 182.899 200.33 185.561 199.764 188.194L200.253 188.299C199.678 190.971 199.037 193.613 198.331 196.224L197.849 196.094C197.138 198.72 196.361 201.316 195.518 203.879L195.993 204.035C195.141 206.626 194.221 209.183 193.233 211.707L192.768 211.525C191.779 214.053 190.722 216.547 189.598 219.007L190.053 219.214C188.922 221.689 187.723 224.128 186.455 226.531L186.013 226.298C185.382 227.496 184.733 228.685 184.068 229.865ZM-50.3757 165.086C-50.7349 162.158 -50.962 159.209 -51.0548 156.247L-51.5545 156.263C-51.6009 154.782 -51.6138 153.299 -51.5931 151.814C-51.614 150.328 -51.6011 148.844 -51.5548 147.363L-51.0551 147.378C-50.9625 144.416 -50.7355 141.466 -50.3764 138.536L-50.8727 138.475C-50.5107 135.522 -50.0151 132.589 -49.3882 129.686L-48.8995 129.792C-48.2752 126.901 -47.5201 124.04 -46.6366 121.217L-47.1138 121.068C-46.2266 118.234 -45.2106 115.439 -44.0681 112.691L-43.6064 112.883C-42.4732 110.158 -41.215 107.48 -39.834 104.857L-40.2764 104.624C-39.5848 103.311 -38.8627 102.012 -38.1102 100.728L-38.1088 100.726C-37.376 99.4902 -36.6164 98.2733 -35.8306 97.0757L-35.4125 97.35C-33.8439 94.959 -32.1707 92.6453 -30.3993 90.4149L-30.7909 90.1039C-29.0049 87.8551 -27.1196 85.6905 -25.1414 83.6162L-24.7796 83.9613C-22.81 81.8961 -20.7479 79.921 -18.5996 78.042L-18.9288 77.6657C-16.7715 75.7788 -14.5278 73.9884 -12.204 72.3007L-11.9101 72.7052C-9.60582 71.0316 -7.22237 69.4594 -4.76609 67.9946L-5.02219 67.5651C-3.792 66.8315 -2.54364 66.1247 -1.2779 65.4455L-1.27048 65.4415C0.0773593 64.7473 1.43734 64.0806 2.80864 63.4417L3.0198 63.8949C5.75775 62.6192 8.54101 61.4548 11.3627 60.4033L11.1881 59.9347C14.0287 58.8762 16.908 57.9315 19.8192 57.1025L19.9561 57.5834C22.8566 56.7574 25.7888 56.0467 28.7458 55.453L28.6474 54.9628C31.6149 54.3669 34.6072 53.8883 37.6173 53.5288L37.6766 54.0252C40.6665 53.6681 43.674 53.4288 46.6923 53.3092L46.6725 52.8095C48.1841 52.7496 49.6984 52.7195 51.2146 52.7195C52.7307 52.7195 54.245 52.7496 55.7566 52.8095L55.7368 53.3092C58.7551 53.4288 61.7626 53.6681 64.7525 54.0252L64.8118 53.5288C67.8219 53.8883 70.8142 54.3669 73.7818 54.9628L73.6833 55.453C76.6403 56.0467 79.5725 56.7574 82.473 57.5834L82.6099 57.1025C85.5211 57.9315 88.4004 58.8762 91.241 59.9347L91.0664 60.4033C93.8881 61.4548 96.6714 62.6192 99.4093 63.8949L99.6205 63.4417C100.992 64.0806 102.352 64.7473 103.7 65.4416L103.706 65.4451L103.706 65.4452C104.966 66.1192 106.209 66.8208 107.433 67.5493L107.178 67.979C109.622 69.4334 111.994 70.9953 114.287 72.6586L114.581 72.2539C116.893 73.9314 119.126 75.7116 121.272 77.5882L120.943 77.9646C123.08 79.8332 125.131 81.798 127.089 83.8529L127.451 83.5079C129.418 85.5719 131.292 87.7262 133.067 89.9646L132.675 90.2752C134.435 92.4951 136.097 94.7982 137.654 97.1784L138.072 96.9047C138.852 98.097 139.606 99.3085 140.333 100.539L140.34 100.549L140.34 100.55C141.065 101.85 141.761 103.164 142.429 104.491L141.982 104.716C143.315 107.365 144.533 110.065 145.633 112.808L146.097 112.621C147.205 115.385 148.195 118.191 149.063 121.033L148.585 121.179C149.451 124.01 150.196 126.877 150.819 129.771L151.307 129.666C151.933 132.571 152.435 135.504 152.813 138.458L152.317 138.521C152.691 141.452 152.943 144.403 153.068 147.366L153.568 147.345C153.631 148.829 153.662 150.316 153.662 151.805C153.662 153.294 153.631 154.781 153.568 156.265L153.068 156.244C152.943 159.207 152.691 162.158 152.317 165.089L152.813 165.152C152.435 168.105 151.933 171.039 151.307 173.944L150.819 173.839C150.196 176.733 149.451 179.599 148.585 182.431L149.063 182.577C148.195 185.419 147.205 188.225 146.097 190.988L145.633 190.802C144.533 193.545 143.315 196.245 141.982 198.894L142.429 199.119C141.761 200.446 141.065 201.76 140.34 203.06L140.333 203.071L140.333 203.071C139.606 204.301 138.852 205.513 138.072 206.705L137.654 206.431C136.096 208.811 134.434 211.115 132.674 213.334L133.066 213.645C131.291 215.883 129.417 218.038 127.45 220.102L127.088 219.757C125.13 221.811 123.079 223.776 120.942 225.645L121.271 226.021C119.125 227.898 116.893 229.678 114.581 231.356L114.287 230.951C111.994 232.614 109.622 234.176 107.178 235.631L107.433 236.06C106.209 236.789 104.966 237.491 103.706 238.165L103.7 238.168C102.352 238.863 100.992 239.529 99.6205 240.168L99.4093 239.715C96.6713 240.991 93.8881 242.155 91.0664 243.207L91.241 243.675C88.4004 244.734 85.5211 245.678 82.6099 246.507L82.473 246.026C79.5725 246.852 76.6402 247.563 73.6833 248.157L73.7817 248.647C70.8142 249.243 67.8219 249.722 64.8118 250.081L64.7525 249.585C61.7626 249.942 58.7551 250.181 55.7368 250.301L55.7566 250.8C54.245 250.86 52.7307 250.89 51.2145 250.89C49.6984 250.89 48.1841 250.86 46.6725 250.8L46.6923 250.301C43.674 250.181 40.6665 249.942 37.6766 249.585L37.6173 250.081C34.6072 249.722 31.6149 249.243 28.6473 248.647L28.7458 248.157C25.7888 247.563 22.8566 246.852 19.9561 246.026L19.8192 246.507C16.908 245.678 14.0287 244.734 11.1881 243.675L11.3627 243.207C8.54102 242.155 5.75774 240.991 3.0198 239.715L2.80863 240.168C1.43734 239.529 0.0773517 238.863 -1.27046 238.168L-1.27795 238.164C-2.54365 237.485 -3.792 236.778 -5.02218 236.045L-4.76609 235.615C-7.22238 234.151 -9.60581 232.578 -11.9101 230.905L-12.204 231.309C-14.5278 229.621 -16.7715 227.831 -18.9288 225.944L-18.5996 225.568C-20.7479 223.689 -22.81 221.714 -24.7796 219.649L-25.1414 219.994C-27.1196 217.919 -29.0049 215.755 -30.7909 213.506L-30.3993 213.195C-32.1707 210.965 -33.8439 208.651 -35.4125 206.26L-35.8306 206.534C-36.6164 205.337 -37.376 204.12 -38.1088 202.884L-38.1101 202.882C-38.8625 201.598 -39.5846 200.3 -40.276 198.987L-39.8336 198.754C-41.2145 196.133 -42.4726 193.455 -43.6056 190.731L-44.0673 190.923C-45.2097 188.176 -46.2256 185.382 -47.1127 182.549L-46.6356 182.4C-47.5191 179.578 -48.2742 176.718 -48.8985 173.828L-49.3872 173.934C-50.0141 171.032 -50.5098 168.1 -50.8719 165.147L-50.3757 165.086Z" stroke="url(#paint0_linear_61_84)" strokeDasharray="9 9" />
                        <defs>
                            <linearGradient id="paint0_linear_61_84" x1="204.001" y1="0.25415" x2="-99.1903" y2="306.241" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00C6FF" />
                                <stop offset="1" stopColor="#0072FF" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none" className='absolute -top-24 left-32'>
                        <circle opacity="0.3" cx="23.4998" cy="23.5" r="23.5" fill="#00C6FF" />
                        <circle cx="23.4998" cy="23.5" r="14.5" fill="url(#paint0_linear_61_93)" />
                        <defs>
                            <linearGradient id="paint0_linear_61_93" x1="8.99976" y1="9" x2="37.9998" y2="38" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00C6FF" />
                                <stop offset="1" stopColor="#0072FF" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" className='absolute -right-80 bottom-32'>
                        <circle opacity="0.3" cx="14.4998" cy="14.5" r="14.5" fill="#00C6FF" />
                        <circle cx="14.4998" cy="14.5" r="8.94681" fill="url(#paint0_linear_61_97)" />
                        <defs>
                            <linearGradient id="paint0_linear_61_97" x1="5.55298" y1="5.55322" x2="23.4466" y2="23.4468" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00C6FF" />
                                <stop offset="1" stopColor="#0072FF" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none" className='absolute left-6 bottom-52'>
                        <circle opacity="0.3" cx="23.5" cy="23.5" r="23.5" fill="#00C6FF" />
                        <circle cx="23.5" cy="23.5" r="14.5" fill="url(#paint0_linear_61_94)" />
                        <defs>
                            <linearGradient id="paint0_linear_61_94" x1="9" y1="9" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00C6FF" />
                                <stop offset="1" stopColor="#0072FF" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="h-14 w-14 absolute -right-64 bottom-0" style={{
                        backgroundImage: `url(${Ellipse9})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        // backgroundBlendMode: 'multiply'
                    }}>

                    </div>

                    <div className="h-14 w-14 bg-green-400 rounded-full absolute left-14 top-40"
                        style={{
                            backgroundImage: `url(${Ellipse7})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            // backgroundBlendMode: 'multiply'
                        }}>

                    </div>

                    <div className="w-28 h-28  rounded-full absolute -right-72 top-28" style={{
                        backgroundImage: `url(${Ellipse3})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        // backgroundBlendMode: 'multiply'
                    }}>

                    </div>

                    <div className="h-10 w-10 rounded-full absolute bottom-60 -right-20"
                        style={{
                            backgroundImage: `url(${Ellipse8})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>

                    </div>
                </div>

                <div className="w-5/12 border border-dotted border-yellow-500 m-auto absolute top-16 right-96">
                    <div className="heading flex items-center gap-3 justify-center mb-56">
                        <div className="logo w-12 h-12 rounded-lg flex items-center justify-center" style={{
                            background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipRule="url(#clip0_56_94)">
                                    <path d="M-0.000244141 2.5C-0.000244141 1.83696 0.263148 1.20107 0.731989 0.732233C1.20083 0.263392 1.83671 0 2.49976 0L17.4998 0C18.1628 0 18.7987 0.263392 19.2675 0.732233C19.7364 1.20107 19.9998 1.83696 19.9998 2.5V12.5C19.9998 13.163 19.7364 13.7989 19.2675 14.2678C18.7987 14.7366 18.1628 15 17.4998 15H14.3748C14.1807 15 13.9893 15.0452 13.8157 15.132C13.6422 15.2188 13.4912 15.3448 13.3748 15.5L10.9998 18.6663C10.8833 18.8215 10.7323 18.9475 10.5588 19.0343C10.3852 19.1211 10.1938 19.1663 9.99976 19.1663C9.8057 19.1663 9.61431 19.1211 9.44074 19.0343C9.26717 18.9475 9.11619 18.8215 8.99976 18.6663L6.62476 15.5C6.50832 15.3448 6.35734 15.2188 6.18377 15.132C6.0102 15.0452 5.81881 15 5.62476 15H2.49976C1.83671 15 1.20083 14.7366 0.731989 14.2678C0.263148 13.7989 -0.000244141 13.163 -0.000244141 12.5V2.5ZM8.99226 5.9575C8.90986 5.83453 8.81475 5.72057 8.70851 5.6175C8.54145 5.44547 8.34227 5.30787 8.12226 5.2125L8.11226 5.2075C7.81622 5.07005 7.49364 4.99922 7.16726 5C5.96976 5 4.99976 5.9325 4.99976 7.08375C4.99976 8.23375 5.96976 9.16625 7.16726 9.16625C7.59601 9.16625 7.99476 9.0475 8.33101 8.84125C8.15976 9.3275 7.84351 9.84625 7.31851 10.3663C7.26905 10.4145 7.23001 10.4724 7.20377 10.5363C7.17753 10.6003 7.16466 10.6689 7.16595 10.738C7.16724 10.8071 7.18266 10.8752 7.21126 10.9381C7.23986 11.001 7.28104 11.0574 7.33226 11.1038C7.54851 11.3038 7.89101 11.2975 8.09976 11.0913C9.76726 9.43 9.81226 7.64375 9.27601 6.45875C9.19724 6.28359 9.10224 6.11619 8.99226 5.95875V5.9575ZM13.7498 8.84125C13.5798 9.3275 13.2623 9.84625 12.7373 10.3663C12.6879 10.4146 12.6489 10.4726 12.6228 10.5365C12.5967 10.6005 12.5839 10.6692 12.5853 10.7382C12.5867 10.8073 12.6023 10.8754 12.631 10.9383C12.6597 11.0011 12.701 11.0574 12.7523 11.1038C12.9673 11.3038 13.3098 11.2975 13.5185 11.0913C15.186 9.43 15.231 7.64375 14.696 6.45875C14.6168 6.28356 14.5214 6.11616 14.411 5.95875C14.3287 5.83533 14.2336 5.72095 14.1273 5.6175C13.9602 5.44544 13.761 5.30784 13.541 5.2125L13.531 5.2075C13.2354 5.07023 12.9132 4.9994 12.5873 5C11.391 5 10.4198 5.9325 10.4198 7.08375C10.4198 8.23375 11.391 9.16625 12.5873 9.16625C13.016 9.16625 13.4148 9.0475 13.751 8.84125H13.7498Z" fill="#F9F9F9" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_56_94">
                                        <rect width="20" height="20" fill="white" transform="translate(-0.000244141)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="txt font-semibold text-3xl font-workSans " style={{
                            background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                        }}>
                            Feedback
                        </div>
                    </div>

                    <div className="font-normal text-base leading-normal mb-10 pr-14 font-inter pl-10 text-textLight">
                        Learn smart classroom has provided us with a platform to continue our academics in an efficient manner by providing us
                        with thought provoking exercises such as games and interactive assessments that are not only informational but also very
                        entertaining. Not just in school, but also at home we can access the videos and games whenever we need to revise any
                        topic. I wholeheartedly thank Knowledge Platform for introducing us to this fun and interesting way of learning.
                    </div>

                    <div className="flex items-center justify-between font-workSans pl-10">
                        <div className="left">
                            <p className="font-semibold text-2xl text-primaryBlue">Faria Iqbal</p>
                            <p className="font-normal text-base text-textLight">Grade 10th Student <br /> IMSG F-7/2, Islamabad.</p>
                        </div>

                        <div className="right flex items-center justify-between gap-5">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.8432 29.1673C18.7182 29.2928 18.648 29.463 18.648 29.6406C18.648 29.8181 18.7182 29.9883 18.8432 30.1138L24.5001 35.7932C24.6251 35.9188 24.7947 35.9893 24.9715 35.9893C25.1483 35.9893 25.3179 35.9188 25.4429 35.7933C25.5679 35.6678 25.6381 35.4975 25.6381 35.32C25.6381 35.1425 25.5679 34.9722 25.4429 34.8467L20.924 30.3098L40.0559 30.3113C40.2329 30.3113 40.4027 30.2407 40.5279 30.115C40.6531 29.9893 40.7234 29.8189 40.7234 29.6411C40.7234 29.4634 40.653 29.2929 40.5279 29.1673C40.4027 29.0416 40.2329 28.971 40.0559 28.971L20.9239 28.9714L25.4426 24.4348C25.5676 24.3092 25.6378 24.139 25.6378 23.9615C25.6378 23.784 25.5676 23.6137 25.4426 23.4882C25.3175 23.3627 25.148 23.2922 24.9712 23.2922C24.7944 23.2922 24.6248 23.3627 24.4998 23.4882L18.8432 29.1673Z" fill="url(#paint0_linear_117_305)" stroke="url(#paint1_linear_117_305)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_117_305" x1="29.6855" y1="18.2817" x2="29.6849" y2="41" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#00C6FF" />
                                            <stop offset="1" stopColor="#0072FF" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_117_305" x1="29.6855" y1="18.2817" x2="29.6849" y2="41" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#00C6FF" />
                                            <stop offset="1" stopColor="#0072FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <rect width="60" height="60" rx="8" fill="url(#paint0_linear_117_308)" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M41.1568 30.8327C41.2818 30.7072 41.352 30.537 41.352 30.3594C41.352 30.1819 41.2818 30.0117 41.1568 29.8862L35.4999 24.2068C35.3749 24.0812 35.2053 24.0107 35.0285 24.0107C34.8517 24.0107 34.6821 24.0812 34.5571 24.2067C34.4321 24.3322 34.3619 24.5025 34.3619 24.68C34.3619 24.8575 34.4321 25.0278 34.5571 25.1533L39.076 29.6902L19.9441 29.6887C19.7671 29.6887 19.5973 29.7593 19.4721 29.885C19.3469 30.0107 19.2766 30.1811 19.2766 30.3589C19.2766 30.5366 19.347 30.7071 19.4721 30.8327C19.5973 30.9584 19.7671 31.029 19.9441 31.029L39.0761 31.0286L34.5574 35.5652C34.4324 35.6908 34.3622 35.861 34.3622 36.0385C34.3622 36.216 34.4324 36.3863 34.5574 36.5118C34.6825 36.6373 34.852 36.7078 35.0288 36.7078C35.2056 36.7078 35.3752 36.6373 35.5002 36.5118L41.1568 30.8327Z" fill="#F9F9F9" stroke="#F9F9F9" />
                                    <defs>
                                        <linearGradient id="paint0_linear_117_308" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#00C6FF" />
                                            <stop offset="1" stopColor="#0072FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <Partners />

            {/* FOoter */}

            <div className="main relative border-2 border-green-400">
                <div className="mb-40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1550" height="800" viewBox="0 0 1440 740" fill="none" className='absolute right-0' style={{ top: "-220px" }}>
                        <path opacity="0.3" d="M-23.813 740L1725 740L1725 -2.6269e-05L292.634 256.791C267.124 261.364 244.547 276.057 230.036 297.529L-43.6977 702.561C-54.4697 718.5 -43.0504 740 -23.813 740Z" fill="#C7C7C7" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="873" height="430" viewBox="0 0 873 430" fill="none" className='absolute right-0 z-0' style={{ top: "-280px" }}>
                        <path d="M64.4456 430L883 430L883 6.20823e-06L159.58 145.064C133.178 150.358 110.214 166.497 96.2886 189.544L9.66833 332.902C-16.104 375.556 14.6102 430 64.4456 430Z" fill="url(#paint0_linear_61_106)" />
                        <defs>
                            <linearGradient id="paint0_linear_61_106" x1="-49" y1="430" x2="278.144" y2="-279.065" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00C6FF" />
                                <stop offset="1" stopColor="#0072FF" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="286" height="441" viewBox="0 0 286 441" fill="none" className='absolute right-0 -top-96'>
                        <path opacity="0.1" d="M28.1634 334.129C9.47833 300.781 1.14295e-05 262.52 9.59519e-06 220.387C7.76085e-06 178.255 9.47832 139.448 28.1634 106.1C46.5349 73.0074 73.8625 45.8287 106.976 27.7159C140.274 9.32965 178.557 -7.83611e-06 220.79 -9.68952e-06C263.023 -1.15429e-05 301.38 9.32964 334.851 27.7159C368.042 45.7836 395.437 72.9693 413.837 106.1C432.522 139.448 442 177.883 442 220.387C442 262.892 432.522 301.228 413.837 334.402C395.333 367.447 367.964 394.598 334.851 412.761C301.356 431.346 262.974 440.75 220.765 440.75C178.557 440.75 140.249 431.321 106.903 412.736C73.8471 394.469 46.5635 367.231 28.1634 334.129ZM368.469 220.313C368.833 194.367 362.133 168.815 349.093 146.42C336.402 124.889 318.104 107.25 296.172 95.4053C272.832 83.3059 246.952 76.9927 220.691 76.9927C194.431 76.9927 168.551 83.3059 145.211 95.4053C123.38 107.159 105.177 124.71 92.5862 146.147C80.026 168.823 73.4336 194.347 73.4336 220.301C73.4336 246.254 80.026 271.778 92.5862 294.454C105.178 315.89 123.381 333.441 145.211 345.196C168.551 357.295 194.431 363.609 220.691 363.609C246.952 363.609 272.832 357.295 296.172 345.196C318.104 333.352 336.402 315.712 349.093 294.181C362.131 271.795 368.831 246.251 368.469 220.313Z" fill="#F9F9F9" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="246" height="361" viewBox="0 0 246 361" fill="none" className='absolute right-0 -top-80'>
                        <path opacity="0.1" d="M23.066 273.4C7.76279 246.129 9.3467e-06 214.84 7.84664e-06 180.385C6.34657e-06 145.931 7.76279 114.196 23.066 86.9245C38.1123 59.8627 60.4937 37.6369 87.6142 22.8249C114.885 7.78915 146.239 0.159662 180.828 0.15966C215.417 0.159659 246.832 7.78915 274.244 22.8249C301.428 37.6 323.865 59.8316 338.934 86.9245C354.237 114.196 362 145.627 362 180.385C362 215.144 354.237 246.494 338.934 273.623C323.779 300.646 301.364 322.85 274.244 337.703C246.812 352.901 215.377 360.591 180.808 360.591C146.239 360.591 114.865 352.88 87.5537 337.682C60.4811 322.744 38.1357 300.47 23.066 273.4ZM301.778 180.325C302.076 159.107 296.588 138.211 285.909 119.898C275.515 102.29 260.529 87.8649 242.567 78.1791C223.451 68.2845 202.255 63.1218 180.747 63.1218C159.24 63.1218 138.044 68.2845 118.928 78.1791C101.049 87.7907 86.1405 102.144 75.8285 119.674C65.5417 138.218 60.1425 159.09 60.1425 180.314C60.1425 201.539 65.5417 222.411 75.8285 240.954C86.1414 258.484 101.049 272.837 118.928 282.45C138.044 292.344 159.24 297.507 180.747 297.507C202.255 297.507 223.451 292.344 242.567 282.45C260.529 272.764 275.515 258.339 285.909 240.731C296.587 222.425 302.074 201.536 301.778 180.325Z" fill="#F9F9F9" />
                    </svg>
                </div>

                <div className="flex w-10/12 border-2 border-green-800 -bottom-96 m-auto absolute left-40">
                    <div className=" w-3/12">
                        <div className="mb-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="26" viewBox="0 0 86 26" fill="none">
                                <g clipPath="url(#clip0_61_114)">
                                    <path d="M9.84508 7.3115C8.81095 6.74434 7.64571 6.45494 6.46449 6.4719H1.77189C1.53778 6.46677 1.30505 6.50879 1.08774 6.59542C0.870424 6.68204 0.673026 6.81147 0.507446 6.97591C0.341867 7.14035 0.211536 7.33638 0.124313 7.5522C0.0370903 7.76802 -0.00521753 7.99914 -6.04191e-05 8.23164V24.0086C-0.0194346 24.2514 0.0119975 24.4956 0.0922579 24.7257C0.172518 24.9559 0.29987 25.1671 0.466303 25.346C0.632736 25.5249 0.834646 25.6676 1.05934 25.7653C1.28402 25.8629 1.52663 25.9133 1.77189 25.9133C2.01714 25.9133 2.25975 25.8629 2.48444 25.7653C2.70913 25.6676 2.91104 25.5249 3.07747 25.346C3.2439 25.1671 3.37126 24.9559 3.45152 24.7257C3.53178 24.4956 3.56321 24.2514 3.54383 24.0086V19.452H6.46449C7.64025 19.4696 8.80122 19.1902 9.83841 18.64C10.8222 18.1132 11.6366 17.3217 12.188 16.3562C12.7535 15.3478 13.0416 14.2093 13.0235 13.0552C13.041 11.8744 12.755 10.7086 12.1925 9.66811C11.649 8.6788 10.8353 7.86194 9.84508 7.3115ZM9.5729 13.0552C9.5729 13.9676 9.2885 14.6903 8.70414 15.2618C8.11979 15.8333 7.38546 16.1168 6.46449 16.1168H3.54383V9.80602H6.46449C7.3788 9.80602 8.10868 10.1006 8.69304 10.7085C9.27739 11.3164 9.5729 12.0909 9.5729 13.0552Z" fill="url(#paint0_linear_61_114)" />
                                    <path d="M30.5574 7.49811C29.0643 6.66292 27.3513 6.23926 25.4649 6.23926C23.5785 6.23926 21.841 6.66292 20.3479 7.49811C18.8663 8.31928 17.6494 9.54076 16.8385 11.0209C16.0152 12.5092 15.5975 14.2204 15.5975 16.1081C15.5975 17.9959 16.0152 19.7104 16.8385 21.2064C17.6474 22.69 18.8646 23.9145 20.3479 24.7369C21.841 25.5721 23.5619 25.9958 25.4649 25.9958C27.3679 25.9958 29.0843 25.5721 30.5697 24.7369C32.0491 23.9098 33.2648 22.6865 34.078 21.2064C34.9101 19.7093 35.3311 17.9936 35.3311 16.107C35.3311 14.2204 34.909 12.5081 34.0769 11.0176C33.259 9.54007 32.0395 8.32055 30.5574 7.49811ZM25.4616 22.7091C24.2999 22.7254 23.1558 22.4259 22.1532 21.843C21.1892 21.2758 20.3994 20.4579 19.8691 19.4776C19.3274 18.4343 19.0447 17.2775 19.0447 16.1037C19.0447 14.9299 19.3274 13.7731 19.8691 12.7299C20.3953 11.7541 21.1812 10.9405 22.141 10.3777C23.1562 9.81626 24.299 9.52159 25.461 9.52159C26.623 9.52159 27.7658 9.81626 28.781 10.3777C29.7408 10.9405 30.5266 11.7541 31.0529 12.7299C31.5946 13.7731 31.8773 14.9299 31.8773 16.1037C31.8773 17.2775 31.5946 18.4343 31.0529 19.4776C30.5226 20.4579 29.7329 21.2758 28.7688 21.843C27.7665 22.4258 26.6229 22.7253 25.4616 22.7091Z" fill="url(#paint1_linear_61_114)" />
                                    <path d="M53.1574 6.4718C52.9229 6.46624 52.6897 6.50791 52.4719 6.5943C52.2541 6.6807 52.0561 6.81002 51.89 6.97448C51.7239 7.13893 51.593 7.3351 51.5054 7.55115C51.4177 7.7672 51.375 7.99865 51.3799 8.23154V14.3713H41.6025V8.23154C41.6208 7.98926 41.5886 7.74583 41.5078 7.51649C41.4271 7.28714 41.2995 7.07683 41.1331 6.8987C40.9667 6.72058 40.7651 6.57848 40.5409 6.48131C40.3167 6.38414 40.0746 6.33398 39.83 6.33398C39.5853 6.33398 39.3433 6.38414 39.1191 6.48131C38.8949 6.57848 38.6932 6.72058 38.5269 6.8987C38.3605 7.07683 38.2329 7.28714 38.1521 7.51649C38.0714 7.74583 38.0392 7.98926 38.0575 8.23154V24.0085C38.0392 24.2508 38.0714 24.4942 38.1521 24.7236C38.2329 24.9529 38.3605 25.1632 38.5269 25.3413C38.6932 25.5195 38.8949 25.6616 39.1191 25.7587C39.3433 25.8559 39.5853 25.9061 39.83 25.9061C40.0746 25.9061 40.3167 25.8559 40.5409 25.7587C40.7651 25.6616 40.9667 25.5195 41.1331 25.3413C41.2995 25.1632 41.4271 24.9529 41.5078 24.7236C41.5886 24.4942 41.6208 24.2508 41.6025 24.0085V17.6095H51.3843V24.0085C51.3843 24.4723 51.5698 24.9171 51.9001 25.245C52.2303 25.573 52.6781 25.7572 53.1451 25.7572C53.6122 25.7572 54.06 25.573 54.3902 25.245C54.7205 24.9171 54.906 24.4723 54.906 24.0085V8.23154C54.9116 7.99866 54.87 7.76705 54.7837 7.55043C54.6975 7.33381 54.5683 7.1366 54.4038 6.97049C54.2403 6.80863 54.0457 6.68107 53.8316 6.59541C53.6175 6.50974 53.3882 6.4677 53.1574 6.4718Z" fill="url(#paint2_linear_61_114)" />
                                    <path d="M80.8052 15.3919C80.8197 15.2628 80.8386 15.1304 80.8597 14.9958C81.2585 14.9241 81.5707 14.7134 81.6807 14.3957C81.8195 13.993 81.5984 13.5307 81.1607 13.1975C81.3274 11.9276 81.2974 10.5617 80.3364 9.24001L86.0022 9.66918L73.1153 1.17389L57.6799 0L64.2811 4.35245L70.5713 8.4986L78.099 9.0701L78.5434 9.1043C76.4204 6.33395 71.8588 4.5676 71.8089 4.54774L71.8999 4.33701L72.0533 4.39879L71.9844 4.40651C71.9844 4.40651 80.9274 7.89731 79.8465 12.7595C79.3088 12.7595 78.8611 12.9923 78.7244 13.3873C78.6034 13.7348 78.7522 14.1276 79.0777 14.4431C79.0333 14.5071 78.9888 14.5711 78.9411 14.6351C78.9411 14.6351 77.6279 16.2117 78.9955 18.0552C78.9955 18.0552 79.3755 18.8331 80.8941 18.704L82.4128 18.5749C82.4128 18.5749 80.5975 17.1837 80.8052 15.3919Z" fill="#1E1E1E" />
                                    <path d="M77.1947 13.5396C76.6281 13.8706 75.8527 14.0306 74.825 14.0306C74.5273 14.0306 74.214 14.0174 73.8885 13.9909C74.0493 14.6032 74.1296 15.2336 74.1274 15.8665C74.1427 17.0059 73.868 18.1308 73.3286 19.1366C72.9355 19.8465 72.4029 20.4709 71.7624 20.9725C71.1218 21.4742 70.3863 21.8431 69.5995 22.0572C68.8127 22.2713 67.9906 22.3264 67.182 22.219C66.3734 22.1117 65.5947 21.8443 64.8921 21.4325C63.9637 20.876 63.2016 20.0834 62.6847 19.1366C62.1355 18.1332 61.8562 17.0061 61.8737 15.8643C61.8579 14.7169 62.137 13.5846 62.6847 12.5743C63.0918 11.827 63.6523 11.173 64.33 10.6545C63.3235 9.97051 62.5458 9.21366 62.2325 8.42922C62.2081 8.36854 62.1881 8.30896 62.1703 8.25049C61.177 8.99591 60.3492 9.93674 59.7385 11.0142C58.9112 12.4647 58.4972 14.0828 58.4965 15.8687C58.4957 17.6545 58.8808 19.2708 59.6518 20.7176C60.3775 22.1202 61.4754 23.2991 62.8269 24.1267C64.6022 25.2063 66.7114 25.6103 68.7636 25.2638C70.8159 24.9173 72.6721 23.8439 73.9885 22.2423V23.51C73.9885 23.7395 74.034 23.9668 74.1225 24.1788C74.2109 24.3908 74.3405 24.5835 74.5039 24.7458C74.6673 24.908 74.8613 25.0368 75.0748 25.1246C75.2883 25.2124 75.5171 25.2576 75.7482 25.2576C75.9793 25.2576 76.2082 25.2124 76.4217 25.1246C76.6352 25.0368 76.8291 24.908 76.9925 24.7458C77.156 24.5835 77.2856 24.3908 77.374 24.1788C77.4624 23.9668 77.508 23.7395 77.508 23.51V15.8687C77.5108 15.0766 77.4209 14.2869 77.2402 13.5154L77.1947 13.5396Z" fill="url(#paint3_linear_61_114)" />
                                    <path d="M70.5512 8.73562H70.4912L67.8039 6.96375L64.2011 4.58838L63.219 7.4183C63.1582 7.618 63.1724 7.83282 63.259 8.0229C63.7223 9.18356 66.193 10.7679 69.4047 11.8656C72.6165 12.9634 75.546 13.2216 76.6258 12.5883C76.8123 12.492 76.9566 12.331 77.0313 12.1359L78.0134 9.30161L73.7007 8.97062L70.5512 8.73562Z" fill="#1E1E1E" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_61_114" x1="-0.00561523" y1="6.47119" x2="17.9772" y2="18.5231" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#0072FF" />
                                        <stop offset="1" stopColor="#00C6FF" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_61_114" x1="15.5975" y1="6.23926" x2="35.354" y2="25.9729" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#0072FF" />
                                        <stop offset="1" stopColor="#00C6FF" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_61_114" x1="38.0525" y1="6.33398" x2="57.4078" y2="23.0013" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#0072FF" />
                                        <stop offset="1" stopColor="#00C6FF" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_61_114" x1="58.4965" y1="8.25049" x2="75.5385" y2="27.1598" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#0072FF" />
                                        <stop offset="1" stopColor="#00C6FF" />
                                    </linearGradient>
                                    <clipPath id="clip0_61_114">
                                        <rect width="86" height="26" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="mb-5 text-base font-semibold leading-normal">info@poha.gov.pk</div>


                        <div className="text-base font-semibold" style={{
                            background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                        }}>091-370-3242</div>
                    </div>

                    <div className="w-6/12">
                        <div className="pb-7 text-base font-semibold leading-normal ">Quick Links</div>
                        <div className="top flex justify-between items-center px-1 w-3/5 mb-5">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <g clipPath="url(#clip0_61_144)">
                                        <path d="M4.52499 0.2175C4.23499 -0.0725 3.76499 -0.0725 3.47499 0.2175L0.217988 3.475C-0.0720117 3.765 -0.0720117 4.2345 0.217988 4.524L3.47599 7.782C3.76599 8.072 4.23549 8.072 4.52499 7.782L7.78299 4.524C8.07299 4.234 8.07299 3.7645 7.78299 3.475L4.52499 0.2175ZM3.99999 0.4945C4.06349 0.4945 4.12649 0.519 4.17499 0.567L7.43299 3.825C7.4794 3.87141 7.50547 3.93436 7.50547 4C7.50547 4.06564 7.4794 4.12859 7.43299 4.175L4.17499 7.433C4.15204 7.45603 4.12476 7.47429 4.09473 7.48673C4.0647 7.49917 4.0325 7.50555 3.99999 7.5055V0.4945Z" fill="#8F8F8F" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_61_144">
                                            <rect width="8" height="8" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <ScrollLink to="home" smooth={true} duration={800} className="text-xs font-medium text-textLight cursor-pointer">
                                    Home
                                </ScrollLink>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <g clipPath="url(#clip0_61_144)">
                                        <path d="M4.52499 0.2175C4.23499 -0.0725 3.76499 -0.0725 3.47499 0.2175L0.217988 3.475C-0.0720117 3.765 -0.0720117 4.2345 0.217988 4.524L3.47599 7.782C3.76599 8.072 4.23549 8.072 4.52499 7.782L7.78299 4.524C8.07299 4.234 8.07299 3.7645 7.78299 3.475L4.52499 0.2175ZM3.99999 0.4945C4.06349 0.4945 4.12649 0.519 4.17499 0.567L7.43299 3.825C7.4794 3.87141 7.50547 3.93436 7.50547 4C7.50547 4.06564 7.4794 4.12859 7.43299 4.175L4.17499 7.433C4.15204 7.45603 4.12476 7.47429 4.09473 7.48673C4.0647 7.49917 4.0325 7.50555 3.99999 7.5055V0.4945Z" fill="#8F8F8F" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_61_144">
                                            <rect width="8" height="8" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <ScrollLink to="impact" smooth={true} duration={800} className="text-xs font-medium text-textLight cursor-pointer">
                                    Impact
                                </ScrollLink>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <g clipPath="url(#clip0_61_144)">
                                        <path d="M4.52499 0.2175C4.23499 -0.0725 3.76499 -0.0725 3.47499 0.2175L0.217988 3.475C-0.0720117 3.765 -0.0720117 4.2345 0.217988 4.524L3.47599 7.782C3.76599 8.072 4.23549 8.072 4.52499 7.782L7.78299 4.524C8.07299 4.234 8.07299 3.7645 7.78299 3.475L4.52499 0.2175ZM3.99999 0.4945C4.06349 0.4945 4.12649 0.519 4.17499 0.567L7.43299 3.825C7.4794 3.87141 7.50547 3.93436 7.50547 4C7.50547 4.06564 7.4794 4.12859 7.43299 4.175L4.17499 7.433C4.15204 7.45603 4.12476 7.47429 4.09473 7.48673C4.0647 7.49917 4.0325 7.50555 3.99999 7.5055V0.4945Z" fill="#8F8F8F" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_61_144">
                                            <rect width="8" height="8" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                {/* <p className="text-xs font-medium text-textLight">Home</p> */}
                                <ScrollLink to="partners" smooth={true} duration={800} className="text-xs font-medium text-textLight cursor-pointer">
                                    Partners
                                </ScrollLink>
                            </div>


                        </div>

                        <div className="bottom flex justify-between items-center px-1 w-3/5">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <g clipPath="url(#clip0_61_144)">
                                        <path d="M4.52499 0.2175C4.23499 -0.0725 3.76499 -0.0725 3.47499 0.2175L0.217988 3.475C-0.0720117 3.765 -0.0720117 4.2345 0.217988 4.524L3.47599 7.782C3.76599 8.072 4.23549 8.072 4.52499 7.782L7.78299 4.524C8.07299 4.234 8.07299 3.7645 7.78299 3.475L4.52499 0.2175ZM3.99999 0.4945C4.06349 0.4945 4.12649 0.519 4.17499 0.567L7.43299 3.825C7.4794 3.87141 7.50547 3.93436 7.50547 4C7.50547 4.06564 7.4794 4.12859 7.43299 4.175L4.17499 7.433C4.15204 7.45603 4.12476 7.47429 4.09473 7.48673C4.0647 7.49917 4.0325 7.50555 3.99999 7.5055V0.4945Z" fill="#8F8F8F" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_61_144">
                                            <rect width="8" height="8" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                {/* <p className="text-xs font-medium text-textLight">Home</p> */}
                                <ScrollLink to="overview" smooth={true} duration={800} className="text-xs font-medium text-textLight cursor-pointer">
                                    Overview
                                </ScrollLink>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <g clipPath="url(#clip0_61_144)">
                                        <path d="M4.52499 0.2175C4.23499 -0.0725 3.76499 -0.0725 3.47499 0.2175L0.217988 3.475C-0.0720117 3.765 -0.0720117 4.2345 0.217988 4.524L3.47599 7.782C3.76599 8.072 4.23549 8.072 4.52499 7.782L7.78299 4.524C8.07299 4.234 8.07299 3.7645 7.78299 3.475L4.52499 0.2175ZM3.99999 0.4945C4.06349 0.4945 4.12649 0.519 4.17499 0.567L7.43299 3.825C7.4794 3.87141 7.50547 3.93436 7.50547 4C7.50547 4.06564 7.4794 4.12859 7.43299 4.175L4.17499 7.433C4.15204 7.45603 4.12476 7.47429 4.09473 7.48673C4.0647 7.49917 4.0325 7.50555 3.99999 7.5055V0.4945Z" fill="#8F8F8F" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_61_144">
                                            <rect width="8" height="8" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                {/* <p className="text-xs font-medium text-textLight">Home</p> */}
                                <ScrollLink to="feedback" smooth={true} duration={800} className="text-xs font-medium text-textLight cursor-pointer">
                                    Feedback
                                </ScrollLink>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <g clipPath="url(#clip0_61_144)">
                                        <path d="M4.52499 0.2175C4.23499 -0.0725 3.76499 -0.0725 3.47499 0.2175L0.217988 3.475C-0.0720117 3.765 -0.0720117 4.2345 0.217988 4.524L3.47599 7.782C3.76599 8.072 4.23549 8.072 4.52499 7.782L7.78299 4.524C8.07299 4.234 8.07299 3.7645 7.78299 3.475L4.52499 0.2175ZM3.99999 0.4945C4.06349 0.4945 4.12649 0.519 4.17499 0.567L7.43299 3.825C7.4794 3.87141 7.50547 3.93436 7.50547 4C7.50547 4.06564 7.4794 4.12859 7.43299 4.175L4.17499 7.433C4.15204 7.45603 4.12476 7.47429 4.09473 7.48673C4.0647 7.49917 4.0325 7.50555 3.99999 7.5055V0.4945Z" fill="#8F8F8F" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_61_144">
                                            <rect width="8" height="8" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <ScrollLink to="home" smooth={true} duration={800} className="text-xs font-medium text-textLight cursor-pointer">
                                    Request a Demo
                                </ScrollLink>
                            </div>


                        </div>
                    </div>

                    <div className="w-3/12r">
                        <div className="mb-7 text-base font-semibold leading-normal">
                            Social Media
                        </div>
                        <div className="logos flex gap-3 mb-5">

                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" className='cursor-pointer hover:scale-110'>
                                <path d="M12.96 0C5.8023 0 0 5.8023 0 12.96C0 20.1177 5.8023 25.92 12.96 25.92C20.1177 25.92 25.92 20.1177 25.92 12.96C25.92 5.8023 20.1177 0 12.96 0ZM16.0299 8.9559H14.0819C13.851 8.9559 13.5945 9.25965 13.5945 9.6633V11.07H16.0312L15.6627 13.0761H13.5945V19.0985H11.2955V13.0761H9.2097V11.07H11.2955V9.8901C11.2955 8.1972 12.47 6.82155 14.0819 6.82155H16.0299V8.9559Z" fill="#8F8F8F" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none" className='cursor-pointer hover:scale-110'>
                                <path d="M16.044 12.7346L13.0119 11.3198C12.7473 11.1969 12.5299 11.3346 12.5299 11.6276V14.2925C12.5299 14.5854 12.7473 14.7231 13.0119 14.6003L16.0426 13.1855C16.3086 13.0613 16.3086 12.8588 16.044 12.7346ZM13.8799 0C6.72222 0 0.919922 5.8023 0.919922 12.96C0.919922 20.1177 6.72222 25.92 13.8799 25.92C21.0376 25.92 26.8399 20.1177 26.8399 12.96C26.8399 5.8023 21.0376 0 13.8799 0ZM13.8799 18.225C7.24602 18.225 7.12992 17.627 7.12992 12.96C7.12992 8.29305 7.24602 7.695 13.8799 7.695C20.5138 7.695 20.6299 8.29305 20.6299 12.96C20.6299 17.627 20.5138 18.225 13.8799 18.225Z" fill="#8F8F8F" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none" className='cursor-pointer hover:scale-110'>
                                <path d="M16.044 12.7346L13.0119 11.3198C12.7473 11.1969 12.5299 11.3346 12.5299 11.6276V14.2925C12.5299 14.5854 12.7473 14.7231 13.0119 14.6003L16.0426 13.1855C16.3086 13.0613 16.3086 12.8588 16.044 12.7346ZM13.8799 0C6.72222 0 0.919922 5.8023 0.919922 12.96C0.919922 20.1177 6.72222 25.92 13.8799 25.92C21.0376 25.92 26.8399 20.1177 26.8399 12.96C26.8399 5.8023 21.0376 0 13.8799 0ZM13.8799 18.225C7.24602 18.225 7.12992 17.627 7.12992 12.96C7.12992 8.29305 7.24602 7.695 13.8799 7.695C20.5138 7.695 20.6299 8.29305 20.6299 12.96C20.6299 17.627 20.5138 18.225 13.8799 18.225Z" fill="#8F8F8F" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none" className='cursor-pointer hover:scale-110'>
                                <path d="M17.77 12.96C17.77 14.0341 17.3433 15.0643 16.5838 15.8238C15.8243 16.5833 14.7941 17.01 13.72 17.01C12.6459 17.01 11.6157 16.5833 10.8562 15.8238C10.0967 15.0643 9.67001 14.0341 9.67001 12.96C9.67001 12.7292 9.69431 12.5037 9.73616 12.285H8.32001V17.681C8.32001 18.0562 8.62376 18.36 8.99906 18.36H18.4423C18.6222 18.3596 18.7945 18.2879 18.9216 18.1606C19.0487 18.0333 19.12 17.8608 19.12 17.681V12.285H17.7039C17.7457 12.5037 17.77 12.7292 17.77 12.96ZM13.72 15.66C14.0747 15.6599 14.4258 15.59 14.7535 15.4542C15.0811 15.3184 15.3788 15.1194 15.6295 14.8685C15.8802 14.6177 16.0791 14.3199 16.2147 13.9922C16.3503 13.6645 16.4201 13.3133 16.42 12.9587C16.4199 12.604 16.35 12.2528 16.2142 11.9252C16.0784 11.5976 15.8794 11.2999 15.6285 11.0492C15.3777 10.7985 15.0799 10.5996 14.7522 10.464C14.4245 10.3283 14.0733 10.2586 13.7187 10.2586C13.0024 10.2588 12.3155 10.5435 11.8092 11.0501C11.3028 11.5567 11.0185 12.2437 11.0187 12.96C11.0188 13.6763 11.3035 14.3631 11.8101 14.8695C12.3167 15.3758 13.0037 15.6602 13.72 15.66ZM16.96 10.125H18.5787C18.6862 10.125 18.7894 10.0824 18.8655 10.0065C18.9417 9.93055 18.9847 9.82754 18.985 9.72V8.10135C18.985 7.99358 18.9422 7.89022 18.866 7.81402C18.7898 7.73781 18.6864 7.695 18.5787 7.695H16.96C16.8522 7.695 16.7489 7.73781 16.6727 7.81402C16.5965 7.89022 16.5537 7.99358 16.5537 8.10135V9.72C16.555 9.94275 16.7373 10.125 16.96 10.125ZM13.72 0C10.2828 0 6.98638 1.36542 4.55591 3.7959C2.12543 6.22637 0.76001 9.52279 0.76001 12.96C0.76001 16.3972 2.12543 19.6936 4.55591 22.1241C6.98638 24.5546 10.2828 25.92 13.72 25.92C15.4219 25.92 17.1072 25.5848 18.6796 24.9335C20.252 24.2822 21.6807 23.3276 22.8841 22.1241C24.0876 20.9207 25.0422 19.492 25.6935 17.9196C26.3448 16.3472 26.68 14.6619 26.68 12.96C26.68 11.2581 26.3448 9.5728 25.6935 8.00042C25.0422 6.42804 24.0876 4.99934 22.8841 3.7959C21.6807 2.59245 20.252 1.63782 18.6796 0.986521C17.1072 0.33522 15.4219 0 13.72 0ZM20.47 18.2102C20.47 19.035 19.795 19.71 18.9702 19.71H8.46986C7.64501 19.71 6.97001 19.035 6.97001 18.2102V7.70985C6.97001 6.885 7.64501 6.21 8.46986 6.21H18.9702C19.795 6.21 20.47 6.885 20.47 7.70985V18.2102Z" fill="#8F8F8F" />
                            </svg>
                        </div>

                        <div className="text-xs font-medium text-textLight">
                            All rights reserved - 2022
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home