import React from 'react'

interface Props {
    modalContent: string
}

const Modals = ({modalContent}: Props) => {
    return (
        <div>
            <p>{modalContent}</p>
        </div>
    )
}

export default Modals
