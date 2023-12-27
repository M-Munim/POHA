import React from 'react'
import Bio from './Subjects/Bio'
import Physics from './Subjects/Physics'
import Chem from './Subjects/Chem'
import image2 from "../../assets/image 2.png"
import Rectangle62 from "../../assets/Rectangle62.png"

const Dashmain = () => {
    return (
        <div className=' w-full bg-dashmain mb-3 px-10 py-8'>
            <div className="bg-overviewWhite h-96 flex justify-between items-center p-12 rounded-lg">
                <div className="text uppercase">
                    <p className="text-dark50 font-semibold text-2xl mb-2">A new way</p>
                    <p className='text-5xl font-bold' style={{
                        background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}>To sharpen your knowledge</p>
                </div>

                <div className="img">
                    <img src={image2} alt="" />
                </div>
            </div>

            <div className="font-semibold text-xl text-dark50 my-5">Subjects</div>
            <div className=" flex w-11/12 m-auto items-center justify-between gap-4 z-10 relative">
                <Physics />
                <Bio />
                <Chem />

            </div>
            <div className="mt-10 flex items-center justify-center relative gap-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="498" height="662" viewBox="0 0 498 662" fill="none" className='absolute -left-80 z-0 -top-60'>
                    <path opacity="0.5" d="M455.627 501.857C483.74 451.769 498 394.301 498 331.019C498 267.737 483.74 209.449 455.627 159.36C427.987 109.656 386.872 68.834 337.051 41.6289C286.954 14.013 229.356 -1.17896e-05 165.816 -1.45781e-05C102.275 -1.73666e-05 44.5655 14.013 -5.79135 41.6289C-55.729 68.7662 -96.9448 109.599 -124.628 159.36C-152.74 209.449 -167 267.178 -167 331.019C-167 394.86 -152.74 452.439 -124.628 502.267C-96.7883 551.899 -55.6109 592.681 -5.79138 619.961C44.6026 647.875 102.35 662 165.853 662C229.356 662 286.991 647.838 337.162 619.924C386.895 592.487 427.944 551.576 455.627 501.857ZM-56.371 330.907C-56.9187 291.936 -46.8379 253.557 -27.2191 219.921C-8.12577 187.581 19.4044 161.087 52.4012 143.297C87.5169 125.124 126.454 115.642 165.964 115.642C205.474 115.642 244.411 125.124 279.527 143.297C312.372 160.951 339.758 187.313 358.702 219.511C377.599 253.569 387.517 291.906 387.517 330.888C387.517 369.87 377.599 408.207 358.702 442.265C339.757 474.462 312.371 500.824 279.527 518.479C244.411 536.652 205.474 546.134 165.964 546.134C126.454 546.134 87.5169 536.652 52.4012 518.479C19.4044 500.689 -8.12578 474.195 -27.2191 441.855C-46.8349 408.232 -56.9156 369.865 -56.371 330.907Z" fill="#C7C7C7" />
                </svg>
                <div className=" w-3/4 z-10" >
                    <p className="text-dark text-xl font-semibold mb-2">Poha E-Lab</p>
                    <p className="text-dark50 text-base font-normal">The Poha E-lab  is based on the idea that lab experiments can be taught using the Internet, more efficiently and less expensively. The labs can also be made available to students with no access to physical labs or where equipment is not available owing to being scarce or costly. This helps them compete with students in better equipped schools and bridges the digital divide and geographical distances. The experiments can be accessed anytime and anywhere, overcoming the constraints on time felt when having access to the physical lab for only a short period of time.</p>

                    <p className="text-dark text-xl font-semibold mb-2">The Features Include:</p>

                    <p className="text-dark50 text-base font-normal">
                        ●  Content aligned to NCERT/CBSE and State Board Syllabus.<br />
                        ●  Physics, Chemistry, Biology Labs from Class 9 to Class 12. English and Maths lessons
                        for Class 9 and 10.<br />
                        ●  Interactive simulations, animations and lab videos.<br />
                        ●  The concepts and understanding of the experiment.<br />
                        ●  The ability to perform, record and learn experiments - anywhere, anytime, and
                        individualised practice in all areas of experimentation.<br /></p>

                    <p className="text-dark50 text-base font-normal ">The 'learning-enabled assessment' through Poha E-lab facilitates in the assessment of; the procedural and manipulative skills of the experiment, the concepts and understanding of the experiment and a student's reporting and interpreting skills.<br /><br />

                        The development of Poha E-lab includes the study and use of mathematical techniques to demonstrate the various complex functions in diverse areas of science. The labs make use of cutting edge simulation technology to create real world lab environments. Thorough study and research is done by research personnel for better understanding of the experimental procedures. Real lab scenarios are captured through live demonstration of the experiment so as to assimilate information on the procedures and lab equipment. Visualisation and development of the graphical symbols are done based on realistic situations and compared with the respective real equipment. Simulations are made interactive using various authoring tools, thus recreating and simulating a real lab environment.</p>
                </div>
                <div className="w-dashCards -mt-36" >
                    <div className="m-auto z-20 flex items-center justify-center rounded-lg h-rect62 relative"
                        style={{
                            backgroundImage: `url(${Rectangle62})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: "16px"
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <circle opacity="0.5" cx="50" cy="50" r="50" fill="#00C6FF" />
                            <circle cx="50" cy="50" r="40" fill="#F9F9F9" />
                            <path d="M61.9891 51.3332L46.0823 60.8046C44.7324 61.6076 43 60.6353 43 59.0165V40.0737C43 38.4575 44.7299 37.4827 46.0823 38.2882L61.9891 47.7596C62.2961 47.9395 62.5514 48.1995 62.7289 48.5133C62.9065 48.8271 63 49.1835 63 49.5464C63 49.9093 62.9065 50.2657 62.7289 50.5795C62.5514 50.8933 62.2961 51.1533 61.9891 51.3332Z" fill="#397FC0" />
                        </svg>
                    </div>

                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="222" height="414" viewBox="0 0 222 414" fill="none" className='absolute -right-10 top-64'>
                    <path d="M389.493 313.85C407.079 282.526 416 246.587 416 207.012C416 167.437 407.079 130.985 389.493 99.6602C372.202 68.5764 346.482 43.0473 315.316 26.0338C283.977 8.76341 247.946 -7.37516e-06 208.198 -9.11955e-06C168.449 -1.08639e-05 132.348 8.7634 100.846 26.0338C69.6072 43.0049 43.8241 68.5406 26.5067 99.6602C8.92074 130.985 2.3243e-05 167.087 2.15047e-05 207.012C1.97665e-05 246.936 8.92073 282.945 26.5067 314.107C43.922 345.145 69.6811 370.649 100.846 387.71C132.371 405.167 168.495 414 208.221 414C247.946 414 284.001 405.143 315.386 387.687C346.497 370.528 372.176 344.943 389.493 313.85ZM69.2056 206.942C68.863 182.57 75.1691 158.569 87.4419 137.534C99.386 117.309 116.608 100.74 137.25 89.615C159.217 78.2498 183.574 72.3199 208.29 72.3199C233.006 72.3199 257.364 78.2498 279.331 89.615C299.878 100.655 317.01 117.141 328.86 137.277C340.681 158.577 346.886 182.552 346.886 206.93C346.886 231.309 340.681 255.283 328.86 276.583C317.009 296.718 299.877 313.204 279.331 324.245C257.364 335.61 233.006 341.54 208.29 341.54C183.574 341.54 159.217 335.61 137.249 324.245C116.608 313.12 99.386 296.551 87.4419 276.326C75.171 255.299 68.8649 231.306 69.2056 206.942Z" fill="url(#paint0_linear_70_1895)" />
                    <defs>
                        <linearGradient id="paint0_linear_70_1895" x1="416" y1="0" x2="2.00476" y2="415.995" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#0072FF" />
                            <stop offset="1" stop-color="#00C6FF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div >
    )
}

export default Dashmain