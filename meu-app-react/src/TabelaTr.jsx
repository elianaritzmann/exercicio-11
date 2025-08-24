import './Tabelas.css'
function TabelaTr(props){
    return(
        
              <tr>
                    <th>{props.nome}</th>
                    <th> {props.tipo} </th>
                    <th>{props.marca}</th>
                    <th>{props.ano}</th>
                    <th>{props.preco}</th>
                    <th>{props.ativo}</th>
                    <th>{props.voltagem}</th>
                    <th>{props.peso_kg}</th>
              </tr>  
        
    )
}
export default TabelaTr