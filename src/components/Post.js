import React from 'react'

export default function Post(props) {
    const Arr = props.arr
    return (
        <div className='' style={{ height: '90%', width: '100%', overflowY: 'scroll' }}>
            {Arr.map(e =>
                <div>
                    <p>{e.userId}</p>
                    <p>{e.title}</p>
                </div>
            )}
        </div>
    )
}
