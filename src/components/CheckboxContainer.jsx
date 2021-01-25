import { Box,Button,IconButton,TextField } from '@material-ui/core'
import axios from 'axios';
import React, { Component } from 'react'
import { NotificationManager } from 'react-notifications';
import apis from '../apis/apis';
import constants from '../constants';
import CheckBox from "./CheckBox";

 class CheckboxContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             showAddCheckbox:false,
             checkboxName:'',

        }
    }
    toggleShowbtn=()=>{
        this.setState((prevState) => {
            return {
                showAddCheckbox: !prevState.showAddCheckbox,
                checkboxName:''
            }
        });
    }
    handleInputChange =(event)=>{
        this.setState({
            checkboxName:event.target.value
        })
    }

    handleAddCheckbox=()=>{
        const {checklistId} = this.props;
        const {checkboxName} = this.state;
        if(checkboxName === ''){
            NotificationManager.error('','Add checkbox name',2000);
            return;
        }
        axios.post(apis.createCheckbox.replace("{id}",checklistId),{
            id:checklistId,
            key:constants.key,
            token:constants.token,
            name:checkboxName
        })
        .then((response)=>{
            if(response.status === 200){
                NotificationManager.success('','checkbox Added' ,2000)
                this.props.getAllCheckbox();
                this.toggleShowbtn();
             }
        })
        .catch((error)=>{
            console.log('Error',error);
        })
    }

    render() {
        const {showAddCheckbox, checkboxName} = this.state;
        const {checkboxes} = this.props;
        return (
            <Box>
                {
                    checkboxes.map((checkbox)=>{
                        return <CheckBox checkbox = {checkbox} key={checkbox.id}/>
                    })
                }
              
                {
                     showAddCheckbox ?
                     <Box display="flex" flexDirection="column">
                         <Box>
                             <TextField id="outlined-basic" label="Checkbox" variant="outlined" size="small" value={checkboxName} onChange={this.handleInputChange}/>
                         </Box>
                         <Box>
                             <Button variant="contained" size="small" color="secondary" onClick={this.handleAddCheckbox}>
                                 Add Checkbox
                             </Button>
     
                             <IconButton color="primary" aria-label="add an alarm" onClick={this.toggleShowbtn}> 
                                 <i className="fas fa-times"></i>
                             </IconButton>
     
                         </Box>
                     </Box> 
                     :
                     <Button variant="contained" onClick={this.toggleShowbtn}>Add an item</Button>

                }
               
            </Box>
        )
    }
}

export default CheckboxContainer
