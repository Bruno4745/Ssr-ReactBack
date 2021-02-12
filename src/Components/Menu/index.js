import { Container, Navbar, Nav } from 'react-bootstrap'

export default function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/"><img src='imagens/logo.png'></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/produtos">Produtos</Nav.Link>
                <Nav.Link href="/pedidos" disabled>Pedidos</Nav.Link>
                <Nav.Link href="/lojas">Nossas Lojas</Nav.Link>
                <Nav.Link href="/contato">Contato</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}