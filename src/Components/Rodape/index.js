import styles from './Rodape.module.css';

function Rodape(){
    return(
        <div className="text-center mt-5">
            <h5 className="text-danger">Formas de Pagamento</h5>
            <img className={styles.imgRodape} src='imagens/Forma_pagamento.png' alt="Formas de Pagamento"/>
            <p>&copy; Recode Pro</p>
        </div>
    )
}

export default Rodape;