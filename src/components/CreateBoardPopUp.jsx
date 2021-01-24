import React, { Component } from 'react'
import {Box, withStyles, TextField,Button} from '@material-ui/core'
import axios from 'axios'
import apis from '../apis/apis'
import { constants } from "../constants";
import { NotificationManager } from "react-notifications";

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
        backgroundColor: '#FAFBFC'
    }

}
 class CreateBoardPopUp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             boardTitle:''
        }
    }

    handleCLickOnSubmit=()=>{
        
        if(this.state.boardTitle===''){
            NotificationManager.error('', 'Add board title', 3000)
            return;
        }

        axios.post(apis.createNewBoard,{}, {
            params:{
                key:constants.key,
                token:constants.token,
                name: this.state.boardTitle
            }
        })
        .then((response)=>{
            if(response.status === 200){
                this.props.getAllBoards()
                this.props.handleClickCreateBoardBtn('hide')
                NotificationManager.success('', 'New board added');
            }
            
        })
        .catch((error)=>{
            console.log("Error", error);
        })
    }

    handleBoardTitleOnchange=(event)=>{
        this.setState({
            boardTitle:event.target.value
        })
    } 
    render() {
        const {handleClickCreateBoardBtn} = this.props;
        const {boardTitle} = this.state; 
        return (
            <Box display="flex" justifyContent="center" alignItems="center" className={this.props.classes.popUpContainer}>
              
                    <Box boxShadow={10} className={this.props.classes.popUp} paddingLeft={8} paddingRight={8} paddingBottom={5} paddingTop={3}>
                        <Box fontSize={28} fontWeight="bold" textAlign="center" padding={1}>
                            Create a Board
                        </Box>
                        <Box display="flex" justifyContent="center" marginTop="30px">
                            <TextField value={boardTitle} onChange={this.handleBoardTitleOnchange} id="outlined-basic" label="Add board title" variant="outlined" />
                        </Box>
                        <Box display="flex" justifyContent="space-evenly" marginTop="50px">
                            <Button variant="contained" color="primary" onClick={this.handleCLickOnSubmit}>
                                Create Board
                            </Button>
                            <Button variant="contained" color="secondary" onClick={()=>handleClickCreateBoardBtn('hide')}>
                                Cancel
                            </Button>
                        </Box>
                    </Box>
              
            </Box>
        )
    }
}

export default withStyles(styles)(CreateBoardPopUp)
