import { Box, Button } from '@material-ui/core'
import React, { Component } from 'react'

 class AddAnotherCard extends Component {
    render() {
        return (
            <Box fontSize={10}>
                <Button 
                    variant="contained"
                    startIcon={<i style={{fontSize: 12, color: 'gray'}} className="fas fa-plus"></i>}
                    style={{fontSize: 12, color: 'gray', backgroundColor: 'transparent', border:'none'}}
                >
                    Add another card
                </Button>
            </Box>
            
        )
    }
}

export default AddAnotherCard
