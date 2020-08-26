import React, { Component } from "react";

class ListaUsuarios extends Component{
    constructor(){
        super();
        this.state={
            usuarios:[],
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
        this.apiCall('http://localhost:3001/api/users/email', this.listarTotal)
    }

    listarTotal = (informacion)=>{
        console.log("respuesta de la api " + informacion.data)
        this.setState({
            usuarios:informacion.data,
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
                        <th scope="col">Email</th>
                        <th scope="col">Url perfil</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.usuarios.map((usuario , i) => (
                        <tr key = {i}>
                            <th scope="row">{usuario.id}</th>
                            <td>{usuario.first_name}  {usuario.last_name}</td>
                            <td>{usuario.email}</td>
                            <td>{"http://localhost:3001/api/users/" + usuario.id}</td>
                            
                        </tr>
                    ))}    
                    </tbody>
                </table>
            </div>
        );
    }
    }
}

export default ListaUsuarios;