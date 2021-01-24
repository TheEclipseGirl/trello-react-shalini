import React from 'react'
import {Link} from 'react-router-dom';
function Board(props) {

    const {board} = props;
    return (
        <div>
            <div className="board d-flex mt-3 rounded col-11">
                <p className="board-text text-light text-bold p-0 m-0">{board.name}</p>
                <Link to={`/boards/${board.id}`}>
                    <div className="bg-primary">
                        <img  className="pointer" src={board.prefs.backgroundImage} alt=""/>
                    </div>
                </Link>
            </div>
        </div>
       
    )
}

export default Board;
