import {Box,withStyles,IconButton,Button,TextField} from '@material-ui/core'
import React, { Component } from 'react'
import ChecklistContainer from './ChecklistContainer'


const styles = {
    popUpContainer:{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
        
    },
    popUp:{
        backgroundColor: '#FAFBFC',
        height:"80%",
        width:"50%"
    }

}

 class ChecklistPopUpContainer extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              showCreateChecklist:false,
              checklistName:''
         }
     }

     toggleCreateChecklist = ()=>{
         this.setState((prevState)=>{
            return {
                showCreateChecklist:!prevState.showCreateChecklist,
                checklistName:''
            }
         })
     }

     handleChangeChecklistNameInput=(event)=>{
         this.setState({
            checklistName:event.target.value
         })
     }
  render() {
        const {showCreateChecklist,checklistName} = this.state;
        return (
            <Box display="flex" justifyContent="center" alignItems="center" className={this.props.classes.popUpContainer}>
                 <Box overflow="auto" paddingBottom={10} border={3} className={this.props.classes.popUp} paddingLeft="30px" paddingRight="30px">
                    <Box display="flex" justifyContent="flex-end" alignItems="center" onClick={this.props.toggleChecklistPopUp}>
                        <IconButton color="info" aria-label="add to shopping cart">
                            <i class="fas fa-times"></i>
                        </IconButton>
                    </Box>
                    <Box fontSize="24px" fontWeight="bold" textAlign="center">
                        {this.props.card.name}
                    </Box>
                    <Box>
                    <Box display="flex" justifyContent="center" marginTop="30px">
                        {
                           showCreateChecklist ?
                            <Box display="flex" flexDirection="column">
                                <Box>
                                    <TextField id="outlined-basic" label="Checklist" variant="outlined" value={checklistName} onChange={this.handleChangeChecklistNameInput}/>
                                </Box>
                                <Box>
                                    <Button variant="contained" size="small" color="secondary">
                                        Add Checklist
                                    </Button>

                                    <IconButton color="primary" aria-label="add an alarm" onClick={this.toggleCreateChecklist}> 
                                        <i className="fas fa-times"></i>
                                    </IconButton>

                                </Box>
                            </Box>                            
                           :
                            <Button variant="contained" color="primary" size="large" textAlign="center" onClick={this.toggleCreateChecklist}>
                                Add Checklist
                            </Button>
                        }
                        
                    </Box>
                   
                    </Box>
                    <ChecklistContainer/>
                 </Box>
            </Box>
        )
    }
}

export default withStyles(styles)(ChecklistPopUpContainer)
