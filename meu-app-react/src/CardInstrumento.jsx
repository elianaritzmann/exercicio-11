import './cardInstrumento.css'
function CardInstrumento(props){
    
    return(
        <div className='cardsIns'>
            <h2>{props.nome} </h2>
            <span><strong>Tipo: </strong>{props.tipo} </span>
            <span><strong>Marca: </strong>{props.marca} </span>
            <span><strong>Ano: </strong>{props.ano} </span>
            <span><strong>Preço: </strong>{props.preco} </span>
            <span><strong>Ativo: </strong>{props.ativo} </span>
            <span><strong>Voltagem: </strong>{props.voltagem} </span>
            <span><strong>Peso: </strong>{props.peso_kg} </span>
        </div>
    )
}
export default CardInstrumento