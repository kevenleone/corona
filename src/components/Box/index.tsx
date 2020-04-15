import React from 'react'

interface BoxProps {
    children?: any;
    className?: string;
    col?: string;
}

function Box({children, col = 'col', className}: BoxProps) {
    return (
        <div className={`box ${col} ${className}`}>
           {children}
        </div>
    )
}

Box.Header = ({children}) => (
    <div className="box-header">
        {children}
    </div>
)

Box.Body = ({children}) => (
    <div className='box-body'>
        {children}
    </div>
)

export default Box;

