import { Jumbotron, Container, Form, Button, Table } from 'react-bootstrap';
import { useState } from 'react';
import Comentarios from '../Components/Contato'
import Menu from '../Components/Menu'
import Rodape from '../Components/Rodape'

export default function Contato({ comentarios }) {

    const [dadosForm, setDadosForm] = useState({
        nome: '',
        mensagem: ''
    });

    function handleChange(evento){
        dadosForm[evento.target.name] = evento.target.value;
        console.log(dadosForm);
    }

    const enviaMensagem = async (evento) => {
        //evento.preventDefault();
        console.log(dadosForm);

        const url = "http://localhost:3500/inserir/comentarios";
        await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosForm)
        }); 
    }
    
    return(
        <>
        <Menu />
        <Container>
            <Jumbotron className="bg-white pb-2">
                <h1>Contato</h1>
                <hr className="my-4"/>
                <div className="row text-center my-5">
                    <div className="col col-12 col-sm-6 mt-2">
                        <img src="/imagens/whatsapp.png" alt="Email" width="70"/>
                        <p>contato@fullstackeletro.com</p>
                    </div>
                    <div className="col col-12 col-sm-6">
                        <img src="imagens/email.png" alt="WhatsApp" width="70"/>
                        <p>(11) 2222-3333</p>
                    </div>
                </div>
            </Jumbotron>
            <Form onSubmit={enviaMensagem} className="col-12 col-md-10 mx-auto mb-5">
                <h3>Entre em contato conosco!!!</h3>
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control id="nome" name="nome" className="mb-3" type="text" placeholder="Digite seu nome" onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control id="mensagem" name="mensagem" className="mb-3" as="textarea" rows={3} placeholder="Digite uma mensagem" onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <Button type="submit" variant="success">Enviar</Button>
                    {'  '}
                    <Button type="reset" variant="warning">Limpar</Button>
                </Form.Group>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Comentario</th>
                    </tr>
                </thead>
                <tbody>
                    {comentarios && comentarios.map(item => <Comentarios key={item._id} id={item._id} nome={item.nome} comentario={item.mensagem} />)}
                </tbody>
            </Table>
        </Container>
        <Rodape />
        </>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3500/mostrar/comentarios`)
    const comentarios = await res.json()
  
    // Pass data to the page via props
    return { props: { comentarios } }
  }