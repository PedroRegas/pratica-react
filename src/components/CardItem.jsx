import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardItem({ card, onDelete }) {
	return (
		<Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
			<Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
				<Card.Title>{card.title}</Card.Title>
				<Card.Text style={{ flex: 1 }}>
					{card.details.substring(0, 100)}
					{card.details.length > 100 ? '...' : ''}
				</Card.Text>
				<div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
					<Link to={`/detalhes/${card.id}`} style={{ flex: 1 }}>
						<Button 
							variant="info" 
							size="sm"
							className="w-100"
						>
							Ver Mais
						</Button>
					</Link>
					<Button 
						variant="danger" 
						size="sm"
						onClick={() => onDelete(card.id)}
					>
						Deletar
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
}

export default CardItem;
