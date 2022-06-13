import React from "react";

const Chatbox = () => {
    return (
        <div id="chat-container">
            <div id="search-container">
                <input type="text" placeholder="Search"/>
            </div>
            <div id="conversation-list">
                <div class="conversation active">
                    <img src ={require("../../image/logo365.PNG")} alt="Huy"/>
                    <div className="title-text"> Huy</div>
                    <div className="created-date">Apr 16</div>
                    <div className="conversation-message">
                        This is a message
                    </div>
                </div>
                <div className="conversation">
                    <img src ={require("../../image/logo365.PNG")} alt="Nhi"/>
                    <div className="title-text">Nhi</div>
                    <div className="created-date">2 days ago</div>
                    <div className="conversation-message">
                        Very funny
                    </div>
                </div>
                <div className="conversation">
                    <img src ={require("../../image/logo365.PNG")} alt="Huy"/>
                    <div className="title-text">Huy</div>
                    <div className="created-date">1 days ago</div>
                    <div className="conversation-message">
                        Yes. I love you
                    </div>
                </div>
                <div className="conversation">
                    <img src ={require("../../image/logo365.PNG")} alt="Huy"/>
                    <div className="title-text">Huy</div>
                    <div className="created-date">3 hours ago</div>
                    <div className="conversation-message">
                        Can you answer question of me?
                    </div>
                </div>
                <div className="conversation">
                    <img src ={require("../../image/logo365.PNG")} alt="Nhi"/>
                    <div className="title-text">Nhi</div>
                    <div className="created-date">2 hours ago</div>
                    <div className="conversation-message">
                        Yes. I love you very much!
                    </div>
                </div>
            </div>
            <div id="new-message-container">
                <span>+</span>
            </div>
            <div id ="chat-title">
                <span>Huy</span>
                <img src ={require("../../image/logo365.PNG")} alt="Delete Conversation"/>
            </div>
            <div id="chat-message-list">
                <div className="message-row you-message">
                    <div className="message-content">
                        <div claasName="message-text">Ok then</div>
                        <div className="message-time">Apr 16</div>
                    </div>
                </div>
                <div className="message-row other-message">
                    <div className="message-content">
                    <img src ={require("../../image/logo365.PNG")} alt="Delete Conversation"/>
                        <div claasName="message-text">Ok then</div>
                        <div className="message-time">Apr 16</div>
                    </div>
                </div>
            </div>
            <div id="chat-form">
            <img src ={require("../../image/logo365.PNG")} alt="Delete Conversation"/>
            <input type="text" placeholder="type a message"/>
            </div>
        </div>
    )
}
export default Chatbox;