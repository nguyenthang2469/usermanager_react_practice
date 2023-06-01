import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';
import { fetchAllUser } from '../services/UserService';

function TableUsers() {
    const [listUsers, setListUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

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

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
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
        </div>
    );
}

export default TableUsers;