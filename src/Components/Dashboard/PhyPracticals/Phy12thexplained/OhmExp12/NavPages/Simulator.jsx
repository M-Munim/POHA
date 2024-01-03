import React from 'react'
import ohmSimulator from "../../../../../../assets/ohmSimulator.png"

const Simulator = () => {
    return (
        <div>
            <div className="relative  w-11/12 mr-auto mt-5 overflow-hidden">
                {/* Top Right SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="69" height="68" viewBox="0 0 69 68" fill="none" className="absolute top-7 right-12 z-0">
                    <path d="M64.6034 51.5503C67.5204 46.4052 69 40.5022 69 34.0019C69 27.5017 67.5204 21.5144 64.6034 16.3693C61.7355 11.2638 57.4694 7.07056 52.3001 4.27608C47.102 1.4394 41.1257 -1.22328e-06 34.5328 -1.51262e-06C27.9399 -1.80195e-06 21.9519 1.4394 16.7269 4.27608C11.5454 7.0636 7.26889 11.2579 4.39654 16.3693C1.47964 21.5144 -1.19486e-06 27.4442 -1.48037e-06 34.0019C-1.76588e-06 40.5596 1.47964 46.4741 4.39654 51.5924C7.28513 56.6906 11.5577 60.8796 16.7269 63.6818C21.9558 66.5491 27.9476 68 34.5366 68C41.1257 68 47.1059 66.5453 52.3116 63.678C57.4718 60.8597 61.731 56.6574 64.6034 51.5503ZM11.4788 33.9904C11.422 29.9874 12.468 26.0451 14.5036 22.5901C16.4847 19.2682 19.3412 16.5467 22.7649 14.7194C26.4085 12.8526 30.4486 11.8786 34.5482 11.8786C38.6477 11.8786 42.6878 12.8526 46.3314 14.7194C49.7393 16.5327 52.5809 19.2406 54.5465 22.548C56.5072 26.0464 57.5364 29.9843 57.5364 33.9885C57.5364 37.9927 56.5072 41.9306 54.5465 45.429C52.5808 48.7363 49.7392 51.4441 46.3314 53.2577C42.6878 55.1244 38.6477 56.0984 34.5482 56.0984C30.4486 56.0984 26.4085 55.1244 22.7649 53.2577C19.3412 51.4303 16.4847 48.7089 14.5036 45.3869C12.4683 41.9331 11.4223 37.9922 11.4788 33.9904Z" fill="url(#paint0_linear_73_9989)" />
                    <defs>
                        <linearGradient id="paint0_linear_73_9989" x1="69" y1="0" x2="1.00724" y2="68.9926" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#0072FF" />
                            <stop offset="1" stop-color="#00C6FF" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="w-10/12 m-auto py-16 relative z-10 flex items-center justify-center">
                    <img className='rounded-lg' src={ohmSimulator} alt="" />
                </div>


                {/* Bottom Left SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="189" viewBox="0 0 400 189" fill="none" className="absolute top-80 left-0 z-0">
                    <path d="M375.954 189L8.00003 189C3.58176 189 3.02045e-05 185.418 2.98182e-05 181L1.39947e-05 6.11256e-06L302.708 59.3455C328.944 64.489 351.846 80.3403 365.902 103.083L396.37 152.383C406.251 168.372 394.75 189 375.954 189Z" fill="url(#paint0_linear_73_9990)" />
                    <defs>
                        <linearGradient id="paint0_linear_73_9990" x1="419" y1="189" x2="277.321" y2="-125.092" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00C6FF" />
                            <stop offset="1" stop-color="#0072FF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default Simulator