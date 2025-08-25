import { useEffect, useState } from "react"
import axios from "axios"
import CardInstrumento from "./cardInstrumento"
import { ToastContainer, toast } from "react-toastify"
import './Cards.css'
import { Link } from "react-router-dom"
import useGetInstruments from "./UseGetInstruments"
function Cards(){
   const { data: equipamentos, loading, error } = useGetInstruments();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

    
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
                     let ativo = ""
                        if(equipamentos.ativo === 'false'){
                           ativo = "não"
                        }else{ativo = "sim" }
                    return(
                        <CardInstrumento
                        key = {item.id}
                        nome= {item.nome}
                        tipo= {item.tipo}
                        marca={item.marca}
                        ano={item.ano}
                        preco={item.preco}
                        ativo={ativo}
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