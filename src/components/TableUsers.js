
function TableUsers() {
    return (
        <div>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='odd:bg-gray-200'>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>
                    </tr>
                    <tr className='odd:bg-gray-200'>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>
                    </tr>
                    <tr className='odd:bg-gray-200'>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>
                    </tr>
                    <tr className='odd:bg-gray-200'>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TableUsers;