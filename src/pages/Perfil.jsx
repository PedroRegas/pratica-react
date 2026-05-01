import { useContext } from 'react';
import { UserContext } from '../App';
import Card from 'react-bootstrap/Card';

function Perfil() {
	const { username } = useContext(UserContext);
	return (
		<Card style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'center' }}>
			<Card.Body>
				<Card.Title>Perfil</Card.Title>
				<Card.Text>
					{username ? (
						<>Bem-vindo, <b>{username}</b>!</>
					) : (
						<>Nenhum nome informado.</>
					)}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Perfil;
