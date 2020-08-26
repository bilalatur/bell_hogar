import React from "react";

function Navbar(){
    return(
        <React.Fragment>
        <nav>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a href="#totals" className="nav-link active" id="totals-tab" data-toggle="tab" role="tab" aria-controls="totals" aria-selected="true">Totales</a>
                </li>
                <li className="nav-item">
                    <a href="#products" className="nav-link" id="products-tab" data-toggle="tab" role="tab" aria-controls="products" aria-selected="false">Lista de Productos</a>
                </li>
                <li className="nav-item">
                    <a href="#users" className="nav-link" id="users-tab" data-toggle="tab" role="tab" aria-controls="users" aria-selected="false">Lista de Usuarios</a>
                </li>
                <li className="nav-item">
                    <a href="#lastProduct" className="nav-link" id="lastProduct-tab" data-toggle="tab" role="tab" aria-controls="lastProduct" aria-selected="false">Ultimo producto cargado</a>
                </li>
            </ul>
      </nav>

      </React.Fragment>
    )
}
export default Navbar;