import React from 'react'
import {Box, Paper} from '@material-ui/core'

function Card(props) {
const {card} = props;
console.log(card.name);
    return (
        <Box padding={0.5}>
           <Paper elevation={3} variant="outlined">
                <Box padding={0.5}>
                    {card.name}
                </Box>
           </Paper>
        </Box>
    )
}

export default Card
