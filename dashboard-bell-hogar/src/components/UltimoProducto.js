import React, { Component } from "react";

class UltimoProducto extends Component{
    constructor(){
        super();
        this.state={
            producto:null,
            error:null,
            isLoaded: false,
        }
    }

    apiCall(url, consecuencia){
        fetch(url)
        .then(response => response.json())
        .then(informacion => consecuencia(informacion))
        .catch(error => this.setState({error:error}))
    }

    componentDidMount(){
        console.log("montaje ok");
        this.apiCall('http://localhost:3001/api/products/last-product', this.listar)
    }

    listar = (informacion)=>{
        console.log("respuesta de la api " + informacion.data)
        this.setState({
            producto:informacion.data,
            isLoaded: true,
        })
    }

    render(){
        if(this.state.error){
            return <div>Error: {this.state.error.message}</div>;
        }else if(!this.state.isLoaded){
            return <div>Cargando...</div>;
        }else{
            return(
                <div className=" ">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Categoría</th>
                            <th scope="col">Subcategoría</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Stock</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{this.state.producto.id}</th>
                                <td><a href={"http://localhost:3000/products/"+this.state.producto.id} >{this.state.producto.name}</a></td>
                                <td>{this.state.producto.category}</td>
                                <td>{this.state.producto.subcategory}</td>
                                <td>{this.state.producto.brand}</td>
                                <td>{this.state.producto.description}</td>
                                <td>${this.state.producto.price}</td>
                                <td>{this.state.producto.stock}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default UltimoProducto;