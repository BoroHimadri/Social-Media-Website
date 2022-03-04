import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import {Avatar,IconButton} from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import { useStateValue } from './StateProvider';
import Tooltip from '@material-ui/core/Tooltip';

function Header() {
    const handlePageChange = ()=> {
        window.location.href="http://localhost:3000/"
        }
    const [ {user}, dispatch ] = useStateValue();
    return (
         <div className="header">
             <div className="header__left">
            <img src="https://freepikpsd.com/media/2020/01/Letter-W-PNG-Image-Transparent.png"
          alt=""
             />
             <div className="header__input">
                 <SearchIcon />
                 <input placeholder="Search Here" 
                 type ="text" /> 
        </div>
        </div>

        <div className="header__right"></div>
        <div className="header__info">
            <Avatar src= {user.photoURL}/>
            <h4>{user.displayName}</h4>
        </div>
        <Tooltip title ="Notification"> 
        <IconButton aria-label="Notification">
            <NotificationsActiveIcon />
        </IconButton>
        </Tooltip>
        <Tooltip title ="Logout">
        <IconButton aria-label="Logout">
            <ExitToAppSharpIcon onClick={handlePageChange}/>
        </IconButton>
        </Tooltip>
        </div>
    );
}

export default Header;
