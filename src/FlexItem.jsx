import React from 'react'

export default function FlexItem(props) {


    return (
        <div className='flex-box-item'>
            <h3>{props.h3}</h3>
            <textarea type="text" onChange={(e) => {
                props.set(e.target.value)
                props.translate()
            }} className={props.id} name="" placeholder={props.placehold} cols="100" rows="12" value={props.val} id="" />
        </div>
    )
}

