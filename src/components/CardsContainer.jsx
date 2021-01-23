import { Box } from '@material-ui/core'
import React from 'react'
import Card from './Card';

class CardsContainer extends React.Component {
    render(){
        const {cards} = this.props
        return (
            <Box>
                {
                    cards.map((card,index)=>{
                        return <Card card = {card} key ={index}/>               
                    })
                }
                
            </Box>
        )
    }
   
}

export default CardsContainer
