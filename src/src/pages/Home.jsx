import { useContext } from 'react';
import { UserContext } from '../App';
import CardManager from '../components/CardManager';

function Home() {
	const { username } = useContext(UserContext);

	return (
		<div>
			<div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f8f9fa', marginBottom: '2rem' }}>
				<h1>Bem-vindo, {username}!</h1>
				<p>Gerencie seus cartões abaixo</p>
			</div>
			<CardManager />
		</div>
	);
}

export default Home;
