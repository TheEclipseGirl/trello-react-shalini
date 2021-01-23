import React, { Component } from 'react'
import axios from 'axios';
import apis from "../apis/apis";
import { constants } from "../constants";
// import CardsContainer from 'CardsContainer';
import List from "./List";
import AddAnotherCard from './AddAnotherCard';
import Box from '@material-ui/core/Box';

 class ListsContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             boardId: this.props.match.params.id,
             lists:[]
        }
    }
  componentDidMount(){
        const {boardId} = this.state;
        axios.get(apis.getAllLists.replace("{id}",boardId),{
            params:{
                key: constants.key,
                token:constants.token
            }
        })
        .then((response)=>{
            this.setState({
             lists:response.data
            })
        })
        .catch((error)=>{
            console.log("Error" , error)
        })
    }


    render() {
        const {lists} = this.state;
        document.body.style.overflowX = "auto";
        return (
            <Box marginTop={5} padding={1} paddingTop={3} position="absolute" display="flex">
                {
                    lists.map((list,index)=>{
                        return <List list={list} key={index}/>
                    })
                }
                
                {/* <AddAnotherCard/> */}
            </Box>
        )
    }
}

export default ListsContainer
