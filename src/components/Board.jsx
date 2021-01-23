import React from 'react'
import {Link} from 'react-router-dom';
function Board(props) {

    const {board} = props;
    console.log("board", board.prefs.voting)

    return (
        <div>
            <div className="board d-flex mt-3 rounded col-11 mx-auto">
                <p className="board-text text-light text-bold">{board.name}</p>
                <Link to={`/boards/${board.id}`}>
                    <img  className="pointer" src={board.prefs.backgroundImage} alt=""/>
                </Link>
            </div>
        </div>
       
    )
}

export default Board;
