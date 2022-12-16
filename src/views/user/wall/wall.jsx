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

class Wall extends Component {
    constructor(props){
        super(props);

        this.state = {
          total_messages: 0,
          wallContent: wallContent,
          is_show_create_modal: false 
        }
    }

    handleAddContent = (content) => {
        this.setState({ total_messages: this.state.total_messages+1 })
        this.setState(prevState => ({
            wallContent: [...prevState.wallContent, content]
        }));
        this.closeModal();
    }

    closeModal = () => this.setState({ is_show_create_modal: false });
    
    render() {
        let { total_messages, wallContent, is_show_create_modal } = this.state;
        console.log(wallContent);
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
                            {wallContent.map((content) => (
                                <MessageContent content={content} ></MessageContent>
                            ))}
                        </ul>
                    }
                    <CreateMessageModal 
                        is_show={is_show_create_modal} 
                        closeModal={this.closeModal} 
                        handleAddContent={this.handleAddContent}
                        message_id = {total_messages}>    
                    </CreateMessageModal>
                </section>
            </React.Fragment>
        );
    }
}
 
export default Wall;

