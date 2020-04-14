import React from 'react'
import Octicon, { Home } from '@primer/octicons-react'

export default function index() {
    return (
        <div className='sidebar'>
            <Octicon icon={Home} size="medium"></Octicon>
        </div>
    )
}
