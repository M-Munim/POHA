import React from 'react'
import { Link } from 'react-router-dom'

const Resources = () => {
    return (
        <div className='w-4/5'>
            <div className="my-5">
                <p className="text-dark font-semibold text-xl mb-3">Books</p>
                <ul className="text-dark50 font-normal text-base pl-1"><li >●  Laboratory Manual Physics for class XII - Published by NCERT</li></ul>
            </div>

            <div className="mb-20">
                <p className="text-dark font-semibold text-xl mb-3">Books</p>
                <p className="text-dark50 font-normal text-base pl-1">
                    <ul>
                        <li>
                            <Link to="#">
                                ●  http://epathshala.nic.in/wp-content/doc/book/flipbook/Class%20XII/12089-Physics%20Part-1/Chapter-3/index.html
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                ●  https://www.youtube.com/embed/4-GxinG7AVw?rel=0&vq=hd1080
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                ●  https://www.youtube.com/embed/Ls5_PcXZRc8?rel=0&vq=hd1080
                            </Link>
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    )
}

export default Resources