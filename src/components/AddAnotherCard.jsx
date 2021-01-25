import { Box, Button,TextField,IconButton } from '@material-ui/core'
import { NotificationManager } from 'react-notifications'
import axios from 'axios'
import React, { Component } from 'react'
import apis from '../apis/apis'
import constants from '../constants'

 class AddAnotherCard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             showAddAnotherCardBtn: true,
             addNewCardInput: ''
        }
    }

    
    toggleShowBtnAnotherCard=()=>{
        this.setState((prevState) => {
            return {
                showAddAnotherCardBtn: !prevState.showAddAnotherCardBtn,
                addNewCardInput:''
            }
        });
     }

     handleInputChange=(event)=>{
        this.setState({
            addNewCardInput:event.target.value
        })
     }

     handleClickAddCard=()=>{
        if(this.state.addNewCardInput===''){
            NotificationManager.error('','Add list name',2000) 
            return; 
         }
         axios.post(apis.createNewCard,{},{
             params:{
                 key:constants.key,
                 token:constants.token,
                 name:this.state.addNewCardInput,
                 idList : this.props.id
             }
         })
         .then((response)=>{
            if(response.status === 200){
                this.props.handleGetAllCards();
                NotificationManager.success('','New card added',2000)

                this.setState({
                    addNewCardInput:'',
                    showAddAnotherCardBtn:true
                })
             }
         })
         .catch((error)=>{
             console.log("Error",error)
         })
     }

     handleKeyPressEnter = (event) => {
        if(event.key === 'Enter'){
            this.handleClickAddCard();
        }
    }

    render() {
       const {showAddAnotherCardBtn,addNewCardInput} = this.state;
       if(showAddAnotherCardBtn){
        return (
            <Box fontSize={10}>
                <Button 
                    variant="contained"
                    startIcon={<i style={{fontSize: 12, color: 'gray'}} className="fas fa-plus"></i>}
                    style={{fontSize: 12, color: 'gray', backgroundColor: 'transparent', border:'none'}} 
                    onClick={this.toggleShowBtnAnotherCard}
                >
                    Add another card
                </Button>
            </Box>

        )
       }else{
        return (
            <Box width={200}> 
                <Box>
                    <TextField id="outlined-basic" label="Add a card" variant="outlined" onKeyPress={this.handleKeyPressEnter} value={addNewCardInput} onChange={this.handleInputChange} />
                </Box>

                <Box>
                    <Button variant="contained" size="small" color="default" onClick={this.handleClickAddCard}>
                        Add Card
                    </Button>

                    <IconButton color="primary" aria-label="add an alarm" onClick={this.toggleShowBtnAnotherCard}> 
                        <i className="fas fa-times"></i>
                    </IconButton>

                </Box>
            </Box>
          
        )
       }
        
            
        
    }
}

export default AddAnotherCard
