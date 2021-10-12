import React from 'react'

export default function RemoveCounter({deleteCounter}) {
    return (
        <div>
            <button onClick={deleteCounter}>Remover Counter</button>

        </div>
    )
}
