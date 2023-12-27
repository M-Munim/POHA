import React from 'react'
import { motion } from "framer-motion"

const Categories = ({ icon, category }) => {
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    }

    return (
        <motion.div
            variants={item}
            whileHover={{scale :1.1}}
            className='flex items-center flex-col gap-4 bg-white p-4 text-center rounded-lg'>
            <div className="text-4xl text-Teal"><img src={icon} alt="" /></div>
            <div className='text-base font-normal'>{category}</div>

        </motion.div>
    )
}

export default Categories