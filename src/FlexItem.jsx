import React from 'react'

export default function FlexItem(props) {
    return (
        <div className='flex-box-item'>
            <h3>{props.h3}</h3>
            <textarea type="text" name="" cols="100" rows="12" placeholder={props.placer} id="" />
        </div>
    )
}

