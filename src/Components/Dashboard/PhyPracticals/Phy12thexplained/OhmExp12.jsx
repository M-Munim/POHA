import React from 'react'
import ohmImage from "../../../../assets/ohm1.png"

const OhmExp12 = () => {
    return (
        <div className="bg-dashmain py-5" >
            <div className="w-11/12 m-auto">
                <div className="top h-60 uppercase flex items-center justify-between bg-overviewWhite">
                    <div className="left">
                        <p className="text-dark50 font-medium text-2xl">Physics</p>
                        <div className="font-bold text-5xl w-2/3" style={{
                            background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                        }}>Ohm's law and
                            resistance</div>
                    </div>

                    <div className="right p-5">
                        <img src={ohmImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OhmExp12