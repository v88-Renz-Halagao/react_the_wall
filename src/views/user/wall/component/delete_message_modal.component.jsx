/* React */
import React, { Component } from "react";

/* Plugins */
import Button from      "react-bootstrap/Button";
import Modal from       "react-bootstrap/Modal";

/* CSS */
import "./delete_message_modal.component.scss"

class DeleteMessageModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message_id: props.message_id
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.message_id !== prevProps.message_id) {
            this.setState({ 
                message_id: this.props.message_id
            });
        }
    }

    handleOnFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleDeleteMessage(this.state.message_id);
    }

    render() { 
        let {is_show, closeDeleteMessageModal} = this.props;
        let {message_id} = this.state; 
        return (
            <Modal 
                show={is_show} 
                onHide={closeDeleteMessageModal} 
                id="delete_message_modal"
                centered
            >
                <Modal.Header className="border-bottom-0" closeButton>
                </Modal.Header>
                <form method="post" id="delete_message_form" onSubmit={this.handleOnFormSubmit}>
                <h5>Confirm Delete Message</h5>
                <Modal.Body>
                    <p id="modal_body_description">Are you sure you want to remove this message? This action cannot be undone.</p>
                    <input type="hidden" id="delete_message_input" name="message_item" value={message_id}/>
                </Modal.Body> 
                <Modal.Footer className="border-top-0">
                    <Button onClick={closeDeleteMessageModal} type="button" className="cancel_remove_btn">Cancel</Button>
                    <Button className="remove_btn" type="submit">Yes, Remove it.</Button> 
                </Modal.Footer>
                </form>
            </Modal>
        );
    }
}
 
export default DeleteMessageModal;
