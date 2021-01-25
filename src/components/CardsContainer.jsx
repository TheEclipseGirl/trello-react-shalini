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
                        return <Card handleGetAllCards={this.props.handleGetAllCards} card = {card} key={card.id} toggleChecklistPopUp={this.props.toggleChecklistPopUp} setCard={this.props.setCard}/>               
                    })
                }
                
            </Box>
        )
    }
   
}

export default CardsContainer
