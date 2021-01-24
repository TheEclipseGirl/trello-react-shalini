import { Box , Button,TextField,IconButton} from '@material-ui/core'
import React, { Component } from 'react'
import { NotificationManager } from 'react-notifications'
import axios from "axios";
import apis from "../apis/apis";
import constants from "../constants";

 class AddNewList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              showBtn:true,
              addNewListInput:''
         }
     }

     toggleShowBtn=()=>{
        this.setState((prevState) => {
            return {
                showBtn: !prevState.showBtn,
                addNewListInput:''
            }
        });
     }

     handleInputChange=(event)=>{
       this.setState({
        addNewListInput:event.target.value
       })
     }

     handleKeyPressEnter = (event) => {
         if(event.key === 'Enter'){
             this.handleClickAddlist();
         }
     }

     handleClickAddlist = ()=>{
         if(this.state.addNewListInput===''){
            NotificationManager.error('','Add list name',2000) 
            return; 
         }
         axios.post(apis.createNewlist ,{},{
            params:{
                key:constants.key,
                token:constants.token,
                idBoard:this.props.boardId,
                name:this.state.addNewListInput                
            }
         })
         .then((response)=>{
             if(response.status === 200){
                this.props.handleGetAllLists();
                NotificationManager.success('','New list added',2000)
                this.setState({
                    addNewListInput:'',
                    showBtn:true
                })
             }
         })
         .catch((error) =>{
            console.log('Error',error)
         })
     }

    render() {
        const {showBtn,addNewListInput} = this.state;
        if(showBtn){
            return (
                <Box width={200}>
                    
                    <Button
                        variant="contained"
                        color="default"
                        endIcon={<i className="fas fa-plus"></i>} onClick={this.toggleShowBtn}>
                        Add another list
                    </Button>
                </Box>
            )
        }else{
            return (
                <Box width={200}> 
                    <Box>
                        <TextField id="filled-basic" label="Enter list title..." variant="filled" onKeyPress={this.handleKeyPressEnter} value={addNewListInput} onChange={this.handleInputChange} />
                    </Box>

                    <Box>
                        <Button variant="contained" size="small" color="primary" onClick={this.handleClickAddlist}>
                            Add list
                        </Button>

                        <IconButton color="secondary" aria-label="add an alarm" onClick={this.toggleShowBtn}> 
                            <i className="fas fa-times"></i>
                        </IconButton>

                    </Box>
                </Box>
              
            )
        }
    }
}

export default AddNewList
