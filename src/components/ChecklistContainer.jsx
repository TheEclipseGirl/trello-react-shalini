import { Box } from '@material-ui/core'
import React, { Component } from 'react'
import Checklist from './Checklist'

 class ChecklistContainer extends Component {
    render() {
        return (
            <Box marginTop={5}>
                <Checklist/>
            </Box>
        )
    }
}

export default ChecklistContainer
