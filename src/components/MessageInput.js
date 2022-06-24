import React from 'react'

import { BiSend } from 'react-icons/bi';
export default function MessageInput() {
    const sendMsg = () => {
        console.log('Message Sent')
      }
    return (
        <>
            <input className='w-100' type="text" style={{ height: '9%', position: 'relative' }} placeholder='Enter your message' />
            <BiSend onClick={sendMsg} size='28px' color='green' style={{ position: 'absolute', right: '0', bottom: '20px' }} />
        </>
    )
}
