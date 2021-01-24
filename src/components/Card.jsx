import React from 'react'
import {Box, Paper, withStyles} from '@material-ui/core'

const styles = {
    paper: {
        '&:hover': {
            background: "#EBECF0",
        },
        cursor: 'pointer'
    }
}


function Card(props) {
    const {card} = props;
    return (
        <Box padding={0.5}>
           <Paper className={props.classes.paper} elevation={3} variant="outlined">
                <Box padding={0.5} fontSize={14}>
                    {card.name}
                </Box>
           </Paper>
        </Box>
    )
}

export default withStyles(styles)(Card);
