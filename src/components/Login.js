import React from 'react'
import background from '../assets/bg.jpg'
export default function Login() {
    return (
        <div className='vh-100 vw-100 text-center' style={{ backgroundImage: `url(${background})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, }}>
            <h1>Tit For Tat Chatting Area</h1>
            <div className="h-50 w-25 bg-light mt-4 rounded m-auto" >
                <h3 className='p-4'>LOGIN FORM</h3>
                <input className='border-danger w-75 mt-4 rounded  ' type="text" placeholder='Enter email' />
                <input className='border-danger w-75 mt-4 rounded  ' type="text" placeholder='Enter Password' />
                <button className='btn btn-primary mt-4 w-50 fw-bold'>Login</button>
            </div>

        </div>

    )
}
