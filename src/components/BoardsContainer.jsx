import React, { Component } from 'react'
import Board from './Board'
import axios from 'axios';
import {constants} from '../constants';
import apis from '../apis/apis'

 class BoardsContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             boards:[]
        }
    }
    
     componentDidMount(){
        axios.get(apis.getAllBoards + `key=${constants.key}&token=${constants.token}`)
        .then((response)=>{

            this.setState({
                boards:response.data
            })
            console.log("axios response",response.data);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
     }

    render() {
        // console.log("boards" ,this.state.boards[0].prefs)
        const {boards} = this.state;
        return (
            <div className="d-flex flex-wrap col-11 mx-auto mt-5">
                {
                    boards.map((board)=>{
                        return(
                            <Board 
                            board= {board} 
                            />
                        )
                    })
                }
                 <div>
                    <div className="board board-create-size pointer bg-warning d-flex mt-3 rounded col-11 mx-auto">
                        <p className="board-create">Create new Board</p>

                    </div>
                </div>
            </div>
        )
    }
}

export default BoardsContainer
