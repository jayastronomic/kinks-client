import React from 'react'
import KinkCard from '../components/cards/KinkCard.js'

const KinksContainer = (props) => {
    return(
        <div>
            {props.kinks.map(kink => {
                return <KinkCard {...kink} />
            }) }
        </div>
    )

}

export default KinksContainer; 