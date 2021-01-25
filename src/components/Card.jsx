import React from 'react'
import {Box, Paper, withStyles,IconButton} from '@material-ui/core'
import axios from 'axios'
import apis from '../apis/apis'
import constants from '../constants'
import NotificationManager from 'react-notifications/lib/NotificationManager'


const styles = {
    paper: {
        '&:hover': {
            background: "#EBECF0",
        },
        '&:hover $deleteBtn': {
            visibility: 'visible'
        },
        cursor: 'pointer'
    },
    deleteBtn: {
        visibility: 'hidden'
    }
}


class Card extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    handleClickDeleteCard =()=>{
      axios.delete(apis.deleteCard.replace("{id}",this.props.card.id),{
          params:{  
              key:constants.key,
              token:constants.token,
              id:this.props.card.id
          }
      })
      .then((response)=>{
        if(response.status===200){
            this.props.handleGetAllCards();
            NotificationManager.success('','Card deleted',2000)  
        }
      })
      .catch((error)=>{
          console.log("Error", error);
      })
    }
    
    render(){
    const {card} = this.props;
        return (
            <Box padding={0.5}>
            <Paper className={this.props.classes.paper} elevation={3} variant="outlined">
                    <Box padding={0.5} fontSize={14} display="flex" justifyContent="space-between" alignItems="center">
                        <Box>
                            {card.name} 
                        </Box>
                        <Box>
                            <IconButton className={this.props.classes.deleteBtn} aria-label="delete" size="small" onClick={this.handleClickDeleteCard}>
                                <i className="far fa-times-circle"></i>
                            </IconButton>
                        </Box>

                    </Box>
            </Paper>
            </Box>
        )
    }
    
}

export default withStyles(styles)(Card);




