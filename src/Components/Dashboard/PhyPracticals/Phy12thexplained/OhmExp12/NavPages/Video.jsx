import React from 'react'
import viddeoImg from '../../../../../../assets/viddeoImg.png'
import rectangle8 from '../../../../../../assets/Rectangle8.png'

const Video = () => {
    return (
        <div className="relative mr-auto pb-32 mt-5 pt-24 overflow-hidden">
            {/* Top Right SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="131" height="130" viewBox="0 0 131 130" fill="none" className="absolute top-9 left-20 z-0">
                <path d="M122.266 98.1722C127.787 88.3739 130.587 77.1322 130.587 64.7531C130.587 52.3741 127.787 40.9719 122.266 31.1736C116.838 21.4506 108.765 13.4652 98.9812 8.14336C89.1436 2.7412 77.8329 5.31425e-06 65.3554 4.76667e-06C52.878 4.21909e-06 41.5454 2.74119 31.6567 8.14336C21.8504 13.4519 13.7568 21.4395 8.3207 31.1736C2.80028 40.9719 -3.27931e-05 52.2647 -3.33368e-05 64.7531C-3.38805e-05 77.2415 2.80027 88.5051 8.3207 98.2524C13.7875 107.961 21.8736 115.939 31.6567 121.275C41.5527 126.736 52.8925 129.499 65.3627 129.499C77.8329 129.499 89.1509 126.729 99.003 121.268C108.769 115.901 116.83 107.898 122.266 98.1722ZM21.7243 64.7312C21.6168 57.1079 23.5964 49.6003 27.4489 43.0205C31.1983 36.6942 36.6045 31.5115 43.0841 28.0315C49.9798 24.4765 57.626 22.6216 65.3846 22.6216C73.1432 22.6216 80.7894 24.4765 87.6851 28.0315C94.1349 31.4848 99.5128 36.6418 103.233 42.9403C106.944 49.6027 108.891 57.102 108.891 64.7276C108.891 72.3532 106.944 79.8525 103.233 86.5149C99.5125 92.8132 94.1347 97.97 87.6851 101.424C80.7894 104.979 73.1432 106.834 65.3846 106.834C57.6259 106.834 49.9798 104.979 43.0841 101.424C36.6044 97.9437 31.1983 92.7609 27.4489 86.4347C23.597 79.8573 21.6174 72.3522 21.7243 64.7312Z" fill="url(#paint0_linear_73_9939)" />
                <defs>
                    <linearGradient id="paint0_linear_73_9939" x1="130.587" y1="7.62939e-06" x2="1.09254" y2="130.582" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0072FF" />
                        <stop offset="1" stop-color="#00C6FF" />
                    </linearGradient>
                </defs>
            </svg>

            <div
                className="w-widthhh h-96 m-auto bg-blue-100 relative z-10 flex items-center justify-center rounded-lg"
                style={{
                    backgroundImage: `url(${viddeoImg}), url(${rectangle8})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                    borderRadius: "16px",
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <circle opacity="0.5" cx="50" cy="50" r="50" fill="#00C6FF" />
                    <circle cx="50" cy="50" r="40" fill="#F9F9F9" />
                    <path d="M61.9891 51.3332L46.0823 60.8046C44.7324 61.6076 43 60.6353 43 59.0165V40.0737C43 38.4575 44.7299 37.4827 46.0823 38.2882L61.9891 47.7596C62.2961 47.9395 62.5514 48.1995 62.7289 48.5133C62.9065 48.8271 63 49.1835 63 49.5464C63 49.9093 62.9065 50.2657 62.7289 50.5795C62.5514 50.8933 62.2961 51.1533 61.9891 51.3332Z" fill="#397FC0" />
                </svg>
            </div>

            {/* Bottom Left SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="666" height="309" viewBox="0 0 666 309" fill="none" className="absolute top-72 right-0 z-0">
                <path d="M24.0448 309L658 309C662.418 309 666 305.418 666 301L666 5.98846e-05L144.997 102.147C118.761 107.291 95.8578 123.142 81.8027 145.886L3.62879 272.383C-6.25232 288.372 5.24883 309 24.0448 309Z" fill="url(#paint0_linear_73_10093)" />
                <defs>
                    <linearGradient id="paint0_linear_73_10093" x1="-19" y1="309" x2="212.641" y2="-204.508" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00C6FF" />
                        <stop offset="1" stop-color="#0072FF" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export default Video