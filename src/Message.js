import React from 'react';
import './Message.css';
import { Avatar } from '@mui/material';

var Sentiment = require('sentiment');

var sentiment = new Sentiment();

var docx = sentiment.analyze('text')

function Message() {
  return (
    <div className='message'>
        <Avatar src = ""/>
        <div className="message__info">
            <h4>
                LordZerror
                <span className='message__timestamp'>timestamp</span>
            </h4>
            <p>This is text</p>
        </div>
    </div>
  )
}

export default Message