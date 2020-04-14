import React from 'react'
import Sidebar from './Sidebar'

export default function index({children}) {
    return (
        <div className='layout'>
            <Sidebar />
            <div className="content">
                {children}
            </div>
        </div>
    )
}
