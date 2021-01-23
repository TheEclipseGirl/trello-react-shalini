import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
function Nav() {
    return (
        <div className="shadow border bg-blue fixed-top"> 
            <div className="col-11 mx-auto d-flex">
                <div className="col-1">
                    <Link to ={'/boards'}>
                        <IconButton>
                            <i className="opacity-50 fas fa-home text-light"></i>
                        </IconButton>
                    </Link>
                    
                </div>
                <div className="col-10 d-flex justify-content-center align-items-center">
                    <Link to = {'/boards'}>
                        <IconButton>
                        <i className="fab fa-trello opacity-50 text-light"></i>
                        </IconButton>
                    </Link>
                   
                    <p className="opacity-50 font-x-large font-italic font-family-cursive text-bold p-0 m-0 text-light">Trello</p>
                </div>
           
            </div>
        </div>
    )
}

export default Nav
