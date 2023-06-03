import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { postCreateUser } from '../services/UserService';
import { useEffect } from 'react';


function ModalEditUser(props) {
    // eslint-disable-next-line react/prop-types
    const { handleClose, show, dataUserEdit } = props;
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const handleEditUser = () => {

    };

    useEffect(() => {
        if (show) {
            // eslint-disable-next-line react/prop-types
            setName(dataUserEdit.first_name);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataUserEdit]);

    return (
        <Modal show={show} onHide={() => {
            setJob('');
            handleClose();
        }}>
            <Modal.Header closeButton>
                <Modal.Title>Edit an user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="email"
                                className="form-control"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Job</label>
                            <input
                                type="password"
                                className="form-control"
                                value={job}
                                onChange={e => setJob(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    handleClose();
                    setJob('');
                }}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleEditUser}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalEditUser;
