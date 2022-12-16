/* React */
import React, { Component } from "react";

/* Components */
import Header from "./component/header.component";
import CreateMessageModal from "./component/create_message_modal.component";
import MessageContent from "./component/message_content.component";

/* Prototype Data */
import { wallContent } from './wall_content_prototype_data';

/* CSS */
import "./wall.scss";

/* Images */
import empty_message from "../../../assets/images/empty_post.png";
import DeleteMessageModal from "./component/delete_message_modal.component";

class Wall extends Component {
    constructor(props){
        super(props);

        this.state = {
          total_messages: 0,
          wall_content: wallContent,
          message_id: 0,
          is_show_create_modal: false,
          is_show_delete_message_modal: false  
        }
    }

    handleAddContent = (content) => {
        this.setState({ total_messages: this.state.total_messages+1 })
        this.setState(prevState => ({
            wall_content: [...prevState.wall_content, content]
        }));
        this.closeCreateMessageModal();
    }

    handleDeleteMessage = (message_id) => {
        const updated_content = this.state.wall_content.filter(message => message.id !== parseInt(message_id))
        this.setState({
            wall_content: updated_content 
        });
        this.setState({ total_messages: this.state.total_messages-1 })
        this.closeDeleteMessageModal();
    }

    showDeleteMessageModal = (content) => {
        this.setState({ 
            is_show_delete_message_modal: true,
            message_id: content.id
        })
    }

    closeCreateMessageModal = () => { 
        this.setState({ 
            is_show_create_modal: false 
        });
    }

    closeDeleteMessageModal = () => {
        this.setState({ 
            is_show_delete_message_modal: false 
        });
    }
    
    render() {
        let { total_messages, wall_content, message_id, is_show_create_modal, is_show_delete_message_modal } = this.state;
        return (
            <React.Fragment>
                <Header></Header>
                <section id="content_container">
                    <h4><span id="total_messages">{total_messages} </span> messages arranged by latest posted</h4>
                    <button onClick={() => this.setState({ is_show_create_modal: true })} id="create_message_modal_button">Create Message</button>
                    { (total_messages === 0 ) 
                        ? 
                        <div id="empty_container">
                            <img src={empty_message} alt="Empty Post"/> 
                            <p>No Posted Message Yet.</p> 
                        </div>
                        : 
                        <ul id="message_container_list">
                            {wall_content.map((content) => (
                                <MessageContent content={content} showDeleteMessageModal={this.showDeleteMessageModal}></MessageContent>
                            ))}
                        </ul>
                    }
                    <CreateMessageModal 
                        is_show={is_show_create_modal} 
                        closeCreateMessageModal={this.closeCreateMessageModal} 
                        handleAddContent={this.handleAddContent}
                        message_id = {total_messages}>    
                    </CreateMessageModal> 
                    <DeleteMessageModal 
                        is_show={is_show_delete_message_modal}
                        closeDeleteMessageModal={this.closeDeleteMessageModal}  
                        message_id={message_id} 
                        handleDeleteMessage={this.handleDeleteMessage}>
                    </DeleteMessageModal>
                </section>
            </React.Fragment>
        );
    }
}
 
export default Wall;

