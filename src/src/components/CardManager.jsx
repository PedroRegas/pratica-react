import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CardItem from './CardItem';
import { CardsContext } from '../App';

function CardManager() {
	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");
	const { cards, setCards } = useContext(CardsContext);

	const handleSave = (e) => {
		e.preventDefault();
		
		if (title.trim() === "" || details.trim() === "") {
			alert("Por favor, preencha todos os campos");
			return;
		}

		const newCard = {
			id: Date.now(),
			title: title,
			details: details
		};

		setCards([...cards, newCard]);
		setTitle("");
		setDetails("");
	};

	const handleDelete = (id) => {
		setCards(cards.filter(card => card.id !== id));
	};

	return (
		<div style={{ padding: '0 2rem 2rem 2rem' }}>
			{/* Input Form */}
			<div style={{ maxWidth: 600, margin: '0 auto 3rem' }}>
				<Form onSubmit={handleSave} style={{ 
					padding: '2rem', 
					border: '1px solid #ddd', 
					borderRadius: '8px',
					backgroundColor: '#f8f9fa'
				}}>
					<Form.Group className="mb-3">
						<Form.Label><strong>Título</strong></Form.Label>
						<Form.Control
							type="text"
							placeholder="Digite o título"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label><strong>Detalhes</strong></Form.Label>
						<Form.Control
							as="textarea"
							rows={4}
							placeholder="Digite os detalhes"
							value={details}
							onChange={(e) => setDetails(e.target.value)}
						/>
					</Form.Group>

					<Button variant="primary" type="submit" className="w-100">
						Salvar
					</Button>
				</Form>
			</div>

			{/* Cards Display */}
			<div>
				{cards.length > 0 ? (
					<>
						<h3 style={{ marginBottom: '2rem' }}>Cartões Salvos ({cards.length})</h3>
						<div style={{ 
							display: 'grid', 
							gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
							gap: '1.5rem'
						}}>
							{cards.map((card) => (
								<CardItem 
									key={card.id}
									card={card}
									onDelete={handleDelete}
								/>
							))}
						</div>
					</>
				) : (
					<div style={{ textAlign: 'center', marginTop: '3rem' }}>
						<p style={{ color: '#999', fontSize: '1.1rem' }}>
							Nenhum cartão salvo ainda. Crie um novo!
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default CardManager;
