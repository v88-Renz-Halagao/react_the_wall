/* React */
import React, { Component } from "react";

/* CSS */
import "./message_content.component.scss";

class Content extends Component {
    render() { 
        let {content, showDeleteMessageModal} = this.props;
        return (
            <li className="message_item" id={content.id}>
                <p className="content content_message">{content.message}</p>
                <ul className="action_list">
                    <li>
                        <button className="comment_button" type="button">
                            <span className="action_icon"></span>
                            <span className="comment_count">0</span>
                            Comment
                        </button>
                    </li>
                    <li>
                        <button className="edit_button" type="button">
                            <span className="action_icon"></span>
                            Edit
                        </button>
                    </li>
                    <li> 
                        <button onClick={(event) => showDeleteMessageModal(event.target)} className="delete_button" id={content.id} type="button">
                            <span className="action_icon"></span> 
                            Delete
                        </button>
                    </li>
                    <li>
                        <span className="action_icon"></span>
                        <span className="user">You</span> - Few seconds ago
                    </li>
                </ul>
                <ul className="comment_container_list">
                     
                </ul>
            </li>
        );
    }
}
 
export default Content;