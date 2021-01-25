import { Box } from '@material-ui/core'
import React, { Component } from 'react'
import Checklist from './Checklist'

 class ChecklistContainer extends Component {
    render() {
        const {checklists}= this.props;
        return (
            <Box marginTop={5}>
                {
                    checklists.map((checklist)=>{
                       return <Checklist getAllChecklistsOnACard={this.props.getAllChecklistsOnACard} checklist={checklist} key={checklist.id}/>
                    })
                }
            </Box>
        )
    }
}

export default ChecklistContainer
