import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserService';

function TableUsers() {
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        getUser();

    }, []);

    const getUser = async () => {
        const res = await fetchAllUser();
        console.log(res);
        if (res && res.data) setListUsers(res.data);
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
        </div>
    );
}

export default TableUsers;