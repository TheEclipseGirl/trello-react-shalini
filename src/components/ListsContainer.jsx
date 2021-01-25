import React, { Component } from 'react'
import List from "./List";
import Box from '@material-ui/core/Box';
import axios from 'axios';
import apis from "../apis/apis";
import { constants } from "../constants";
import AddNewList from "./AddNewList";
import ChecklistPopUpContainer from './ChecklistPopUpContainer'


 class ListsContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             boardId: this.props.match.params.id,
             lists:[],
             showChecklistPopUp:false,
             card:{}
        }
    }

    componentDidMount(){
        this.handleGetAllLists();
    }

    toggleChecklistPopUp = ()=>{
        this.setState((prevState)=>{
            return {
                showChecklistPopUp:!prevState.showChecklistPopUp
            }
        })
    }

    setCard = (card)=>{
        this.setState({
            card
        })
    }

    handleGetAllLists=()=>{
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
        const {lists,boardId,showChecklistPopUp,card} = this.state;
        document.body.style.overflowX = "auto";
        return (
            <Box marginTop={5} padding={1} paddingTop={3} position="absolute" display="flex">
                {
                    lists.map((list)=>{
                        return <List list={list} key={list.id} handleGetAllLists={this.handleGetAllLists} toggleChecklistPopUp={this.toggleChecklistPopUp} setCard={this.setCard}/>
                    })
                }
                <AddNewList boardId={boardId} handleGetAllLists={this.handleGetAllLists}/>
                {
                    showChecklistPopUp && <ChecklistPopUpContainer card={card} toggleChecklistPopUp={this.toggleChecklistPopUp}/>
                }
            </Box>
            
        )
    }
}

export default ListsContainer
