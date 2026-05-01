import Container from 'react-bootstrap/Container';

function Footer() {
	return (
		<footer style={{
			backgroundColor: '#f8f9fa',
			borderTop: '1px solid #dee2e6',
			marginTop: '3rem',
			padding: '2rem 0',
			textAlign: 'center',
			color: '#6c757d'
		}}>
			<Container>
				<p style={{ marginBottom: 0 }}>
					&copy; {new Date().getFullYear()} Minha Aplicação. Todos os direitos reservados.
				</p>
				<small>
					Desenvolvido com React e Bootstrap
				</small>
			</Container>
		</footer>
	);
}

export default Footer;
