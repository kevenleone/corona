import React from 'react'
import Octicon, { Globe, Dashboard } from '@primer/octicons-react'

export default function index() {
    return (
        <div className='sidebar'>
            <div className='center'>
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/1200px-SARS-CoV-2_without_background.png" className='logo' /> */}
            </div>
            <hr />
            <div className='menu-itens'>
                <div className='item active'>
                    <Octicon icon={Globe} size="medium"></Octicon>
                </div>
                <div className='item'>
                    <Octicon icon={Dashboard} size="medium"></Octicon>
                </div>
            </div>
        </div>
    )
}
