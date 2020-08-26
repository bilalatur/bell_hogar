import React from "react";
import Total from "./Total";

function Counts(){
    const totales = [
        {
            titulo: 'Productos',
            endpoint: 'products/count',
            icono: 'fas fa-chair fa-2x text-gray-200'
        },
        {
            titulo: 'Usuarios',
            endpoint: 'users/count',
            icono: 'fas fa-user-circle fa-2x text-gray-200'
        },
        {
            titulo: 'Categorias',
            endpoint: 'products/category',
            icono: 'fas fa-list-alt fa-2x text-gray-200'
        }
    ];
    return(
        <div className="complementos">
             {totales.map((total, i) =>
                <Total className="col-3"
                    key={i}
                    titulo={total.titulo}
                    endpoint={total.endpoint}
                    icono={total.icono}
                />)
            }
        </div>
    );
}

export default Counts;