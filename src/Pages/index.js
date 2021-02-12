import Menu from '../Components/Menu'
import Rodape from '../Components/Rodape'
import { Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function HomePage() {
    return (
      <>
        <Menu />
        
        <Jumbotron className="bg-white container">
            <h1>Seja bem vindo(a)!</h1>
            <p>Aqui em nossa loja, <i>programadores tem desconto </i>nos produtos para sua casa!</p>
            <hr className="my-4"></hr>
            <p>Conheca todos os nossos produtos clicando abaixo!</p>
            <Button variant="success btn-lg" href="/produtos">Nossos Produtos!</Button>
        </Jumbotron>
        <Rodape />
      </>
    )
  }
  
  export default HomePage