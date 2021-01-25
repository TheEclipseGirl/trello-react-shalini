import { Box, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core'
import React, { Component } from 'react'

 class CheckBox extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             checked: false,             
        }
    }
    
    handleChange = (event) => {
        this.setState({
            checked: event.target.checked
        });
    }

    render() {
        const {checked} = this.state;
        let textDecoration;
        checked ? textDecoration = 'line-through' : textDecoration = 'auto';
        return (
            <Box>
                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox checked={checked} onChange={this.handleChange}/>}
                        label="Secondary"
                        style={{textDecoration: textDecoration}}
                    />
                </FormGroup>
            </Box>
        )
    }
}

export default CheckBox
