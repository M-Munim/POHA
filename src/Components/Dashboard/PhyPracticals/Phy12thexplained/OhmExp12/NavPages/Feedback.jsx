import React, { useState } from 'react'

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle the form submission here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    };

    return (
        <div className='w-1/2 m-auto'>
            <h2 className='font-semibold text-xl text-center py-7'>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)}
                        required
                        className='h-10 w-width404 mb-3 rounded-md p-3 block m-auto border border-dark50'
                    />
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        placeholder='Email Address'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='h-10 w-width404 mb-3 rounded-md p-3 block m-auto border border-dark50'
                    />
                </div>
                <div>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        placeholder='Message'
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className='w-width404 mb-3 rounded-md p-3 block m-auto min-h-48 border border-dark50'
                    ></textarea>
                </div>
                <div>
                    <button className='w-width404 m-auto block h-14 rounded-lg text-white leading-normal font-semibold text-base' style={{
                        background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                    }}>Send Feedback</button>
                </div>
            </form>
        </div>
    )
}

export default Feedback