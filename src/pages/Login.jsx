(imports)
import { useContext, useState } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
	const { setUsername } = useContext(UserContext);
	const [input, setInput] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setUsername(input);
		navigate('/perfil');
	};

	return (
		<Form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '2rem auto' }}>
			<Form.Group className="mb-3" controlId="formBasicName">
				<Form.Label>Nome</Form.Label>
				<Form.Control
					type="text"
					placeholder="Digite seu nome"
					value={input}
					onChange={e => setInput(e.target.value)}
					required
				/>
			</Form.Group>
			<Button variant="primary" type="submit">
				Entrar
			</Button>
		</Form>
	);
}

export default Login;
