import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';
import Button from 'react-bootstrap/Button';
import { fetchAllUser } from '../services/UserService';
import ModalAddNew from './ModalAddNew';
import ModalEditUser from './ModalEditUser';

function TableUsers() {
    const [listUsers, setListUsers] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
    const [isShowModalEditUser, setIsShowModalEditUser] = useState(false);
    const [dataUserEdit, setDataUserEdit] = useState({});

    const handleClose = () => {
        setIsShowModalAddNew(false);
        setIsShowModalEditUser(false);
    };

    const handleUpdateTable = (user) => {
        setListUsers([user, ...listUsers]);
    };

    useEffect(() => {
        getUsers(1);

    }, []);

    const getUsers = async (page) => {
        const res = await fetchAllUser(page);
        if (res && res.data) {
            setTotalUsers(res.total);
            setListUsers(res.data);
            setTotalPages(res.total_pages);
        }
    };

    const handlePageClick = (event) => {
        getUsers(+event.selected + 1);
    };

    const handleEditUser = (user) => {
        setIsShowModalEditUser(true);
        setDataUserEdit(user);
    };

    return (
        <>
            <div className="my-3 d-flex justify-content-between align-items-center">
                <span><b>List Users:</b></span>
                <Button variant='success' onClick={() => setIsShowModalAddNew(true)}>Add new user</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((user, index) => (
                            <tr key={`users-${index}`}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.first_name}</td>
                                <td>@{user.last_name}</td>
                                <td>
                                    <button
                                        className='btn btn-warning mx-3'
                                        onClick={() => handleEditUser(user)}
                                    >Edit</button>
                                    <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={totalPages}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
            <ModalAddNew
                show={isShowModalAddNew}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable}
            />
            <ModalEditUser
                show={isShowModalEditUser}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable}
                dataUserEdit={dataUserEdit}
            />
        </>
    );
}

export default TableUsers;