import React from "react";
import Ranking from './Ranking';
import Categoria from "./Categoria";


function BoxRanking (){
    const propiedades = [
        {
            titulo: 'Mayor Stock',
            endpoint: 'mas-stock',
            detalle: ':'
            
        },
        {
            titulo: 'Menor Stock',
            endpoint: 'menos-stock',
            detalle: ':'
            
        },
        {
            titulo: 'Mas Ventas',
            endpoint: 'mas-stock',
            detalle: '--'
            
        }
    ];


    return(
       
             <div className="row complementos">
                {propiedades.map((propiedad, i) =>
                <Ranking className="data-ranking"
                    key={i}
                    titulo={propiedad.titulo}
                    endpoint={propiedad.endpoint}
                    detalle={propiedad.detalle}
                />)
                }
                <Categoria className="data-ranking" /> 
            </div>
        );
    
}
export default BoxRanking;