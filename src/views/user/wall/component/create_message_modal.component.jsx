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
            message_content: {
                id: null,
                message: "",
                comments: []
            }
        }
    }

    handleTextareaChange = (textarea) => {
        this.setState({
			message_content: {
				...this.state.message_content,
				id: this.props.message_id + 1,
                message: textarea.value
			},
		})
    } 

    handleOnFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddContent(this.state.message_content);
    }

    render() { 
        let {is_show, closeModal} = this.props;
        let {message_content} = this.state;
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
                <form method="post" id="create_message_form" onSubmit={this.handleOnFormSubmit}>
                <h5>Create a Message</h5>
                <Modal.Body>
                    <textarea 
                        id="create_post_textarea"
                        placeholder="Type your message here."
                        onChange={(event) => this.handleTextareaChange(event.target)}></textarea>
                </Modal.Body>
                <Modal.Footer className="border-top-0">
                    <Button onClick={() => closeModal()} type="button" id="cancel_post_message_btn"> Cancel</Button>
                    <Button
                        className={`${ (message_content.message === "") ? "disabled disable_button" : "" }`} 
                        type="submit">Post message</Button> 
                </Modal.Footer>
                </form>
            </Modal>
        );
    }
}
 
export default CreateMessageModal;
