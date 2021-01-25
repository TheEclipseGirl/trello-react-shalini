import React, { Component } from 'react'
import { Box ,Button,ThemeProvider} from '@material-ui/core';
import CheckboxContainer from './CheckboxContainer';

 class Checklist extends Component {
    render() {
        return (
            <Box>
                <hr/>
                <Box display="flex" justifyContent="space-between">
                    <Box display="flex" alignItems="center">
                        <Box>
                            <i class="fas fa-check-double"></i>
                        </Box>
                        <Box fontSize={20} marginLeft={2} fontWeight="bold">
                            Checklist
                        </Box>
                    </Box>
                    <Box>
                        <Button variant="contained" color="primary" size='small'>
                            Delete
                        </Button>
                    </Box>
                </Box>
                <CheckboxContainer/>
            </Box>
        )
    }
}

export default Checklist
