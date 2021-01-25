import { Box,Button,IconButton,TextField } from '@material-ui/core'
import React, { Component } from 'react'
import CheckBox from "./CheckBox";

 class CheckboxContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             showAddCheckbox:false,
             checkboxName:''
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

    render() {
        const {showAddCheckbox, checkboxName} = this.state;
        return (
            <Box>
                <CheckBox/>
                {
                     showAddCheckbox ?
                     <Box display="flex" flexDirection="column">
                         <Box>
                             <TextField id="outlined-basic" label="Checkbox" variant="outlined" size="small" value={checkboxName} onChange={this.handleInputChange}/>
                         </Box>
                         <Box>
                             <Button variant="contained" size="small" color="secondary">
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
