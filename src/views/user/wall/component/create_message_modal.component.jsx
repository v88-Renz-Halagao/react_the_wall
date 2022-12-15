/* React */
import React, { Component } from "react";

import Button from      "react-bootstrap/Button";
import Modal from       "react-bootstrap/Modal";

/* CSS */
import "./create_message_modal.component.scss"

class CreateMessageModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message_textarea: "" 
        }
    }

    handleTextareaChange = (textarea) => {
        this.setState({ message_textarea: textarea.value})
    }

    render() { 
        let {is_show, closeModal} = this.props;
        let {message_textarea} = this.state;
        console.log("🚀 ~ file: create_message_modal.component.jsx:26 ~ CreateMessageModal ~ render ~ message_textarea", message_textarea)
        return (
            <Modal 
                show={is_show} 
                onHide={closeModal}
                size="lg" 
                id="create_post_modal"
                centered
            >
                <Modal.Header className="border-bottom-0" closeButton>
                </Modal.Header>
                <form method="post" id="create_message_form">
                <h5>Create a Message</h5>
                <Modal.Body>
                    <textarea 
                        id="create_post_textarea"
                        placeholder="Type your message here."
                        onChange={(event) => this.handleTextareaChange(event.target)}></textarea>
                </Modal.Body>
                <Modal.Footer className="border-top-0">
                    <Button type="button" id="cancel_post_message_btn"> Cancel</Button>
                    <Button
                        className={`${ (message_textarea === "") ? "disabled disable_button" : "" }`} 
                        type="submit">Post message</Button> 
                </Modal.Footer>
                </form>
            </Modal>
        );
    }
}
 
export default CreateMessageModal;
