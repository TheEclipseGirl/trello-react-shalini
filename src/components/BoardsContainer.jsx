import React, { Component } from 'react'
import Board from './Board'
import axios from 'axios';
import {constants} from '../constants';
import apis from '../apis/apis'
import CreateBoardPopUp from './CreateBoardPopUp';

 class BoardsContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             boards:[],
             showCreateBoardPopUp:false
        }
    }
    
     componentDidMount(){
        this.getAllBoards();
     }

     getAllBoards = () =>{
        axios.get(apis.getAllBoards + `key=${constants.key}&token=${constants.token}`)
        .then((response)=>{
            this.setState({
                boards:response.data
            })
        })
        .catch((error)=>{
            console.log("Error", error);
        })
     }

     handleClickCreateBoardBtn=(toggle)=>{
         if(toggle === 'show'){
            this.setState({
                showCreateBoardPopUp:true
             })
         }
         else{
             this.setState({
                 showCreateBoardPopUp:false
             })
         }
         
     }

    render() {
        const {boards,showCreateBoardPopUp} = this.state;
        return (
            <div className="d-flex flex-wrap col-11 mx-auto mt-5">
                {
                    boards.map((board)=>{
                        return(
                            <Board 
                                board= {board}
                                key={board.id} 
                            />
                        )
                    })
                }
                 <div>
                    <div onClick={() => this.handleClickCreateBoardBtn('show')} className="d-flex justify-content-center align-items-center board-create-size pointer bg-secondary mt-3 rounded col-11 mx-auto">
                        <p className="text-light p-0 m-0">Create new Board</p>

                    </div>
                </div>

                {showCreateBoardPopUp && <CreateBoardPopUp getAllBoards={this.getAllBoards} handleClickCreateBoardBtn={this.handleClickCreateBoardBtn}/> }
                

            </div>
        )
    }
}

export default BoardsContainer
