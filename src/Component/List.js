import React from 'react';
import {NavLink} from 'react-router-dom';
import '../Css/ListStyle.css';

const List=()=>{
return(
    <>
    <header>
        <div className="container container-flex">

       
        <nav>
            <div className="list">
               <NavLink exact to="/" className="listItem" activeClassName="activeItem">Home</NavLink>
               <NavLink to="/about" className="listItem" activeClassName="activeItem">About</NavLink>
               <NavLink to="/my_projects" className="listItem" activeClassName="activeItem">My Projects</NavLink>
            </div>
        </nav>

        </div>
    </header>
    </>
)
}
export default List;