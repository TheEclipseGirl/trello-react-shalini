import { Box } from '@material-ui/core'
import React from 'react'
import Card from './Card';

class CardsContainer extends React.Component {
    render(){
        const {cards} = this.props
        return (
            <Box maxHeight={500} overflow="auto">
                {
                    cards.map((card)=>{
                        return <Card card = {card} key={card.id}/>               
                    })
                }
                
            </Box>
        )
    }
   
}

export default CardsContainer
