import React from 'react';

import Counts from './Counts';
import BoxRanking from './BoxRanking';
import ListaUsuarios from './ListaUsuarios';
import ListaProductos from './ListaProductos';
import UltimoProducto from './UltimoProducto';

function Contenedor() {
  return (
    <div className="tab-content" id="myTabContent">
          {/* totales */}
          <div className="tab-pane fade  show active" id="totals" role="tabpanel" aria-labelledby="totals-tab">
            <div className="container contenedor col-12">
                <Counts className="row col-12 counts" />
                < BoxRanking className="container" />
            </div>
          </div>
          {/* productos*/}
          <div className="tab-pane fade" id="products" role="tabpanel" aria-labelledby="products-tab">
                <div className="container col-12">
                  <div className="row col-12">
                        <ListaProductos />
                  </div>
                </div>
          </div>
          {/* usuarios*/}
          <div className="tab-pane fade" id="users" role="tabpanel" aria-labelledby="users-tab">
                <div className="container col-12">
                  <div className="row col-12">
                        <ListaUsuarios />
                  </div>
                </div>
          </div>
           {/* ultimo producto*/}
           <div className="tab-pane fade" id="lastProduct" role="tabpanel" aria-labelledby="lastProduct-tab">
                <div className="container col-12">
                  <div className="row col-12">
                        <UltimoProducto />
                  </div>
                </div>
          </div>
      </div>
    )
}
export default Contenedor;