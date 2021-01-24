import React from 'react'
import CardsContainer from "./CardsContainer";
import AddAnotherCard from './AddAnotherCard'
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import axios from 'axios';
import apis from '../apis/apis';
import constants from '../constants';
import IconButton from '@material-ui/core/IconButton';
import NotificationManager from 'react-notifications/lib/NotificationManager';


class List extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cards:[]
        }
    }
  handleClickDeleteList=()=>{
        const {id} = this.props.list;
        axios.put(apis.archievelist.replace("{id}",id) ,{},{
            params:{
                key:constants.key,
                token:constants.token,
                value:true
            }
        })
        .then((response)=>{
            if(response.status === 200){
                NotificationManager.success('','List deleted', 2000)
                this.props.handleGetAllLists();
            }
        })
        .catch((error)=>{
            console.log("Error" , error);
        })
    }

   componentDidMount(){
        axios.get(apis.getAllCards.replace("{id}", this.props.list.id) ,{
            params:{
                key:constants.key,
                token:constants.token
            }
        })
        .then((response)=>{
            this.setState({
                cards:response.data
            })
        })
        .catch((error)=>{
            console.log("Error",error)
        })
    }
    
    render(){
       const {list} = this.props
       const {cards} = this.state
        return (
            <Box marginRight={1}>    
                <Box height={588} width={272}>
                    <Paper elevation={3}>
                        <Box padding={1}>
                            <Box fontWeight="fontWeightBold" fontSize={14} display='flex' justifyContent='space-between'>
                                {list.name} 
                               <Box>
                                    <IconButton size="small" aria-label="delete" onClick={this.handleClickDeleteList}>
                                        <i className="fas fa-trash"></i>
                                    </IconButton>
                               </Box>
                            </Box>
                            <CardsContainer cards ={cards}/>
                            <AddAnotherCard/>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        )
    }
}
export default List
