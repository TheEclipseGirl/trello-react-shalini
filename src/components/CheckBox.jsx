import { Box, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core'
import React, { Component } from 'react'

 class CheckBox extends Component {

    constructor(props) {
        super(props)
    
        let checked;
        this.props.checkbox.state === 'complete' ? checked = true : checked=false

        this.state = {
             checked: checked,             
        }
    }
    
    handleChange = (event) => {
        this.setState({
            checked: event.target.checked
        });
    }

    render() {
        const {checked} = this.state;
        const {checkbox} = this.props;
        let textDecoration;
        checked ? textDecoration = 'line-through' : textDecoration = 'auto';
        return (
            <Box>
                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox checked={checked} onChange={this.handleChange}/>}
                        label={checkbox.name}
                        style={{textDecoration: textDecoration}}
                    />
                </FormGroup>
            </Box>
        )
    }
}

export default CheckBox
