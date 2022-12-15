/* React */
import React, { Component } from "react";

/* Components */
import Header from "./component/header.component";
import CreateMessageModal from "./component/create_message_modal.component";

/* CSS */
import "./wall.scss";

/* Images */
import empty_message from "../../../assets/images/empty_post.png";

class Wall extends Component {
    constructor(props){
        super(props);

        this.state = {
          total_messages: 0,
          is_show_create_modal: false 
        }
    }

    closeModal = () => this.setState({ is_show_create_modal: false });
    
    render() {
        let { total_messages, is_show_create_modal } = this.state;
        return (
            <React.Fragment>
                <Header></Header>
                <section>
                    <h4><span id="total_messages">0 </span> messages arranged by latest posted</h4>
                    <button onClick={() => this.setState({ is_show_create_modal: true })} id="create_message_modal_button">Create Message</button>
                    { (total_messages === 0 ) 
                        ? 
                        <div id="empty_container">
                            <img src={empty_message} alt="Empty Post"/> 
                            <p>No Posted Message Yet.</p>
                        </div>
                        : 
                        <h1>Content</h1>
                    }
                    <CreateMessageModal is_show={is_show_create_modal} closeModal={this.closeModal}></CreateMessageModal>
                </section>
            </React.Fragment>
        );
    }
}
 
export default Wall;

