import { useEffect, useState } from "react"
import axios from "axios"
import CardInstrumento from "./cardInstrumento"
import { ToastContainer, toast } from "react-toastify"
import './Cards.css'
import { Link } from "react-router-dom"
function Cards(){
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
        <div className="cardsContainer">
              <ToastContainer></ToastContainer>
              <h1>Lista de Instrumentos</h1>
              <div className="btn">
                   <Link to = '/cards'> <button>Cards</button> </Link> 
                    <Link to = '/tabelas'><button>Tabelas</button> </Link>
              </div>
              <div className="cards">
                      {
                equipamentos.map((item)=>{
                    return(
                        <CardInstrumento
                        key = {item.id}
                        nome= {item.nome}
                        tipo= {item.tipo}
                        marca={item.marca}
                        ano={item.ano}
                        preco={item.preco}
                        ativo={item.ativo}
                        voltagem={item.voltagem}
                        peso_kg= {item.peso_kg}
                    >
                    </CardInstrumento>

                    )
                    
                }) 
                 }
              </div>
          
        </div>
          
            

    
    )
}
export default Cards