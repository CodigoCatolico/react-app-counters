import React from 'react'

export default function AddCounterComponent({addcounter}) {
    return (
        <div>
            <button onClick={addcounter}>Add Counter</button>
        </div>
    )
}
