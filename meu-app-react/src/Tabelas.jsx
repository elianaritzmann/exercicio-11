import { useEffect, useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import { Link } from "react-router-dom"
import TabelaTr from "./TabelaTr"
import './Tabelas.css'
function Tabelas(){
     const[equipamentos, setEquipamentos]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/equipamentos')
        .then((response)=>{
            setEquipamentos(response.data)

        }).catch(()=>{
            toast.error('algo deu errado')
        })
    },[])
    return(
        <div className="tabelaContainer">
            <ToastContainer></ToastContainer>
              <h1>Lista de Instrumentos</h1>
              <div className="btnTabela">
                   <Link to = '/cards'> <button>Cards</button> </Link> 
                    <Link to = '/tabelas'><button>Tabelas</button> </Link>
              </div>
            <table >
                <tr>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Marca</th>
                    <th>Ano</th>
                    <th>Preço</th>
                    <th>Ativo</th>
                    <th>Voltagem</th>
                    <th>Peso</th>
                </tr>
 {   
                    equipamentos.map((item)=>{
                         let ativo = ""
                        if(equipamentos.ativo === 'false'){
                           ativo = "não"
                        }else{ativo = "sim" }
                        return(
                        <TabelaTr
                        key = {item.id}
                        nome= {item.nome}
                        tipo= {item.tipo}
                        marca={item.marca}
                        ano={item.ano}
                        preco={item.preco}
                        ativo={ativo}
                        voltagem={item.voltagem}
                        peso_kg= {item.peso_kg}
                        ></TabelaTr>
                        )
                        
                    })
                }
                
            </table>

        </div>
    )
}
export default Tabelas