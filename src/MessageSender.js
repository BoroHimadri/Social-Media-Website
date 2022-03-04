import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./MessageSender.css";
import VideocamTwoToneIcon from '@material-ui/icons/VideocamTwoTone';
import AddToPhotosTwoToneIcon from '@material-ui/icons/AddToPhotosTwoTone';
import SentimentVerySatisfiedTwoToneIcon from '@material-ui/icons/SentimentVerySatisfiedTwoTone';
import { useStateValue } from './StateProvider';
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
    const [ {user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          profilePic: user.photoURL,
          username: user.displayName,
          image: imageUrl,
        });

        setInput('');
        setImageUrl('');
    };
    
    return (
        <div className = "messageSender">

        <div className ="messageSender__top" >
        <Avatar src = {user.photoURL}/>
        <form >
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender_input" 
        placeholder = {"What's on your mind ? "} 
        />
        
        <input 
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}

        placeholder = {"image URL"} />
        <button onClick={handleSubmit} type="submit">
            Hidden Button

        </button>
        </form>
        </div>      
        <div className ="messageSender__bottom" >
        <div className="messageSender__option">
          <VideocamTwoToneIcon style={{ color: 'pink' }}/>
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <AddToPhotosTwoToneIcon style={{ color: 'yellow' }}/>
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <SentimentVerySatisfiedTwoToneIcon style={{ color: 'blue' }}/>
          <h3>Feeling/Activity</h3>
        </div>
        </div>

        </div>
    );
}

export default MessageSender;
