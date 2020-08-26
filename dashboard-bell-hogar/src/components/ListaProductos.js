import React, { Component } from "react";

class ListaProductos extends Component{
    constructor(){
        super();
        this.state={
            productos:[],
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
        this.apiCall('http://localhost:3001/api/products', this.listarTotal)
    }

    listarTotal = (informacion)=>{
        console.log("respuesta de la api " + informacion.data)
        this.setState({
            productos:informacion.data,
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
                            <th scope="col">Marca</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.productos.map((producto , i) => (
                            <tr key = {i}>
                                <th scope="row">{producto.id}</th>
                                <td><a href={"http://localhost:3000/products/"+producto.id} > {producto.name}</a></td>
                                <td>{producto.category}</td>
                                <td>{producto.brand}</td>
                                <td>${producto.price}</td>
                                <td>{producto.stock}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default ListaProductos;