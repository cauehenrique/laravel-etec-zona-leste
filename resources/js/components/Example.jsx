import React from 'react'
import drawComponent from '../reactHelper'

function Example({ value }) {
    return (
        <div>
            <h1 className='font-bold'>This is my Example component {value}</h1>
        </div>
    );
}

export default Example

drawComponent('example', <Example />)