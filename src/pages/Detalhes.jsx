import { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CardsContext } from '../App';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Detalhes() {
	const { id } = useParams();
	const { cards, setCards } = useContext(CardsContext);
	const navigate = useNavigate();

	const cardId = parseInt(id);
	const card = cards.find(c => c.id === cardId);

	if (!card) {
		return (
			<div style={{ padding: '2rem', textAlign: 'center' }}>
				<h2>Cartão não encontrado</h2>
				<p>O cartão que você procura não existe.</p>
				<Link to="/home">
					<Button variant="primary">Voltar para Home</Button>
				</Link>
			</div>
		);
	}

	const handleDelete = () => {
		setCards(cards.filter(c => c.id !== cardId));
		navigate('/home');
	};

	return (
		<div style={{ padding: '2rem' }}>
			<div style={{ maxWidth: 700, margin: '0 auto' }}>
				<Card>
					<Card.Body>
						<Card.Title style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
							{card.title}
						</Card.Title>
						<div style={{ 
							backgroundColor: '#f8f9fa', 
							padding: '1.5rem', 
							borderRadius: '8px',
							marginBottom: '2rem',
							lineHeight: '1.8'
						}}>
							<p>{card.details}</p>
						</div>
						<div style={{ display: 'flex', gap: '1rem' }}>
							<Link to="/home" style={{ flex: 1 }}>
								<Button variant="secondary" className="w-100">
									Voltar
								</Button>
							</Link>
							<Button 
								variant="danger"
								onClick={handleDelete}
							>
								Deletar
							</Button>
						</div>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}

export default Detalhes;
