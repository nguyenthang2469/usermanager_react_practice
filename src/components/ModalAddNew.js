import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { postCreateUser } from '../services/UserService';


function ModalAddNew(props) {
    // eslint-disable-next-line react/prop-types
    const { handleClose, handleUpdateTable, show } = props;
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const handleSaveUser = async () => {
        const res = await postCreateUser(name, job);
        if (res && res.id) {
            handleClose();
            setName('');
            setJob('');
            toast.success('A user is created succedd!');
            handleUpdateTable({ first_name: name, id: res.id });
        } else {
            toast.error('An error...');
        }
    };
    return (
        <Modal show={show} onHide={() => {
            setName('');
            setJob('');
            handleClose();
        }}>
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
                                type="text"
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
                    setName('');
                    setJob('');
                }}>
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
