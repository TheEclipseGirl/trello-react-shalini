import {Box,withStyles,IconButton,Button,TextField} from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'
import constants from '../constants'
import ChecklistContainer from './ChecklistContainer'
import apis from '../apis/apis'
import {NotificationManager} from "react-notifications";


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
        width:"80%"
    }

}

 class ChecklistPopUpContainer extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              showCreateChecklist:false,
              checklistName:'',
              checklists:[]
         }
     }
     

     componentDidMount(){
       this.getAllChecklistsOnACard();
     }

    getAllChecklistsOnACard=()=>{
        const {id}=this.props.card;
         axios.get(apis.getChecklistsOnACard.replace("{id}",id),{
             params:{
                 key:constants.key,
                 token:constants.token,
                 id:id
             }
         })
         .then((response)=>{
            this.setState({
                checklists:response.data
            })

         })
         .catch((error)=>{
            console.log("Error",error);
         })
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

     
     handleAddChecklist=()=>{
        const {id}=this.props.card;
        if(this.state.checklistName === ''){
            NotificationManager.error('','Add checklist name' , 2000);
            return;
        }
         axios.post(apis.createChecklist,{},{
             params:{
                 key:constants.key,
                 token:constants.token,
                 idCard:id,
                 name:this.state.checklistName
             }
         })
         .then((response)=>{
             if(response.status === 200){
                this.toggleCreateChecklist();
                NotificationManager.success('','checklist Added' ,2000)
                this.getAllChecklistsOnACard();
             }
           
         })
         .catch((error)=>{
            console.log("Error", error);
         })
     }

  render() {
        const {showCreateChecklist,checklistName , checklists} = this.state;
        return (
            <Box display="flex" zIndex={2} justifyContent="center" alignItems="center" className={this.props.classes.popUpContainer}>
                 <Box overflow="auto" paddingBottom={10} border={3} className={`popup ${this.props.classes.popUp}`} paddingLeft="30px" paddingRight="30px">
                    <Box display="flex" justifyContent="flex-end" alignItems="center" onClick={this.props.toggleChecklistPopUp}>
                        <IconButton color="info" aria-label="add to shopping cart">
                            <i className="fas fa-times"></i>
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
                                    <Button variant="contained" size="big" color="secondary" onClick={this.handleAddChecklist}>
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
                    <ChecklistContainer getAllChecklistsOnACard={this.getAllChecklistsOnACard}  checklists={checklists}/>
                 </Box>
            </Box>
        )
    }
}

export default withStyles(styles)(ChecklistPopUpContainer)
