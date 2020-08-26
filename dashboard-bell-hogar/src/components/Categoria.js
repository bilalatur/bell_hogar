import React, {Component} from "react";
import RankingCategoria from "./RankingCategoria";

class Categoria extends Component{
    constructor(){
        super();
        this.state={
            categoria:[],
            error:null,
            isLoaded: false,
            categorySelected: false
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
        this.apiCall('http://localhost:3001/api/products/category', this.listarcategoria)
    }

    listarcategoria = (informacion)=>{
     //   console.log("respuesta de la api " + informacion.data);
        this.setState({
            categoria:informacion.data,
            isLoaded: true,
        })
    }

    seleccionCategoria (event){
        console.log("event " + event.target);
        let categorySelected = event.target.value;

        if (categorySelected === "Select category") {
            categorySelected = false;
        }

        this.setState({
            categorySelected: categorySelected,
        })
    }

    render(){
        if(this.state.error){
            return <div>Error: {this.state.error.message} </div>;
        }else if(!this.state.isLoaded){
            return <div>Cargando...</div>;
        }else{
            return(
            <div className="div-ranking row col-5">
                <h4 className="col-12"> Destacados por categoría </h4>
                <div className="data-ranking col-12">
                    <select onChange= {(event) => this.seleccionCategoria(event)}>Seleccione la categoria:
                    <option> Select category </option>
                    { this.state.categoria.map((item , i) => <option key = {i} > {item.category} </option>) }
                    </select>
                </div>
                <div className="data-ranking row">
                    { this.state.categorySelected ? <RankingCategoria category={this.state.categorySelected} /> : "" }
                </div>
            </div>
            );
        }
    }
}
export default Categoria;