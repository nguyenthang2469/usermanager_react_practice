import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import './App.css';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import Button from 'react-bootstrap/Button';
import ModalAddNew from './components/ModalAddNew';

function App() {
	const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

	const handleClose = () => {
		setIsShowModalAddNew(false);
	};

	return (
		<div className="app-container">
			<Header />
			<Container>
				<div className="my-3 d-flex justify-content-between align-items-center">
					<span><b>List Users:</b></span>
					<Button variant='success' onClick={() => setIsShowModalAddNew(true)}>Add new user</Button>
				</div>
				<TableUsers />
			</Container>

			<ModalAddNew
				show={isShowModalAddNew}
				handleClose={handleClose}
			/>
		</div>
	);
}

export default App;
