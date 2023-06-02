import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalAddNew(props) {
    // eslint-disable-next-line react/prop-types
    const { handleClose, show } = props;
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const handleSaveUser = () => {

    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new user</Modal.Title>
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
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveUser}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalAddNew;
