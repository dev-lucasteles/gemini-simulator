import React from "react";
import './ChatMessage.css';
import Avatar from "../../assets/avatar";

// Example of expected prop structure:
// const sampleMessage = {
//     user: 'gemini',
//     message: 'crie o nome do artigo'
// }

export const ChatMessage = ({ message }) => {
    return (
        <div className={`chat-message ${message.user === 'gemini' ? 'gemini' : ''}`}>
            <div className="chat-message-center">
                
                <div className={`avatar ${message.user === 'gemini' ? 'gemini' : ''}`}>
                    {message.user === 'gemini' && <Avatar />}
                </div>

                <div className="message">
                    {message.message}
                </div>
                
            </div>
        </div>
    );
};