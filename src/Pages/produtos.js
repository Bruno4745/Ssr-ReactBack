import Menu from '../Components/Menu'
import Rodape from '../Components/Rodape'
import Produto from '../Components/Produto'
import { Row, Col, ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Produtos({ produtos }) {

    const MudarCategoria = (evento) => {
        const categoria = evento.target.id;
        let elementos = document.getElementsByClassName('boxProduto');
        for (var i = 0; i < elementos.length; i++) {
            if (categoria === elementos[i].id || categoria === "todos"){
                elementos[i].style = "display: inline-block";
            }
            else{
                elementos[i].style = "display: none";
            }
        }
    }

    return (
      <>
        <Menu />
            <Row>
                <Col className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
                    <h3>Categorias</h3>
                    <ListGroup className="px-0">  
                        <ListGroup.Item action onClick={MudarCategoria} id="todos">Mostrar todos (12)</ListGroup.Item>
                        <ListGroup.Item action onClick={MudarCategoria} id="geladeira">Geladeiras (3)</ListGroup.Item>
                        <ListGroup.Item action onClick={MudarCategoria} id="fogao">Fogão (2)</ListGroup.Item>
                        <ListGroup.Item action onClick={MudarCategoria} id="microondas">Micro-ondas (3)</ListGroup.Item>
                        <ListGroup.Item action onClick={MudarCategoria} id="lavadouraroupa">Lavadoura de Roupas (2)</ListGroup.Item>
                        <ListGroup.Item action onClick={MudarCategoria} id="lavalouca">Lava Louças (2)</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col className="col-12 col-sm-6 col-md-8 col-lg-9 mt-3">
                    {produtos && produtos.map(item => <Produto key={item.idproduto} id={item.idproduto} categoria={item.categoria} descricao={item.descricao} preco={item.preco} precofinal={item.precofinal} imagem={item.imagem}/>)}
                </Col>
            </Row>
        <Rodape />
      </>
    )
  }

  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3500/produtos`)
    const produtos = await res.json()
  
    // Pass data to the page via props
    return { props: { produtos } }
  }
  
  export default Produtos