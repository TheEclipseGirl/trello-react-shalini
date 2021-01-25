import React, { Component } from 'react'
import { Box ,Button,ThemeProvider} from '@material-ui/core';
import CheckboxContainer from './CheckboxContainer';
import axios from 'axios';
import constants from '../constants';
import apis from "../apis/apis";
import { NotificationManager} from "react-notifications";

 class Checklist extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              checkboxes:[]
         }
     }
     

    componentDidMount(){
        this.getAllCheckbox();
    }

    getAllCheckbox =()=>{
        const {id} = this.props.checklist;
        axios.get(apis.getCheckboxesOnChecklist.replace("{id}",id),{
            params:{
                key:constants.key,
                token:constants.token,
                id:id
            }
        })
        .then((response)=>{
            this.setState({
                checkboxes:response.data
            })
        })
        .catch((error)=>{
            console.log("Error",error);
        })
    }

    handleChecklistDeleteBtn=()=>{
        const {id} = this.props.checklist;
        axios.delete(apis.deleteAChecklist.replace("{id}",id),{
            params:{
                key:constants.key,
                token:constants.token,
                id:id
            }
        })
        .then((response)=>{
           this.props.getAllChecklistsOnACard();
           NotificationManager.success('','checklist deleted',2000)

        })
        .catch((error)=>{
            console.log('Error',error);
        })
    }

    render() {
        const {name,id} = this.props.checklist;
        const {checkboxes}= this.state;

        return (
            <Box>
                <hr/>
                <Box display="flex" justifyContent="space-between">
                    <Box display="flex" alignItems="center">
                        <Box>
                            <i className="fas fa-check-double"></i>
                        </Box>
                        <Box fontSize={20} marginLeft={2} fontWeight="bold">
                            {name}
                        </Box>
                    </Box>
                    <Box>
                        <Button variant="contained" color="primary" size='small' onClick={this.handleChecklistDeleteBtn}>
                            Delete
                        </Button>
                    </Box>
                </Box>
                <CheckboxContainer getAllCheckbox={this.getAllCheckbox} checklistId={id} checkboxes = {checkboxes}/>
            </Box>
        )
    }
}

export default Checklist
