import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { deleteUser } from '../services/UserService';


function ModalConfirm(props) {
    // eslint-disable-next-line react/prop-types
    const { handleClose, handleDeleteUserFromModal, show, dataUserDelete } = props;

    const confirmDelete = async () => {
        // eslint-disable-next-line react/prop-types
        const res = await deleteUser(dataUserDelete.id);
        if (res && +res.statusCode === 204) {
            handleClose();
            toast.success('Delete user succeed!');
            handleDeleteUserFromModal(dataUserDelete);
        } else {
            toast.error('Error delete user');
        }
    };
    return (
        <Modal
            show={show}
            onHide={() => handleClose()}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Delete a user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    This action can't be undone!

                    Do want to delete this user?
                    <br />
                    <b>email = {
                        // eslint-disable-next-line react/prop-types
                        dataUserDelete.email
                    }</b>?
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>
                    Close
                </Button>
                <Button variant="primary" onClick={confirmDelete}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalConfirm;
