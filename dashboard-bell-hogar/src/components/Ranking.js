import React, {Component} from "react";

class Ranking extends Component{
    constructor(props){
        super(props);
        this.state={
            ranking:[],
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
        this.apiCall('http://localhost:3001/api/products/'+ this.props.endpoint, this.listarranking)
    }

    listarranking = (informacion)=>{
        console.log("respuesta de la api " + informacion.data)
        this.setState({
            ranking:informacion.data,
            isLoaded: true,
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
                   
                        <div className="container ">
                            <h4 className="col-12"> 5 productos con {this.props.titulo}</h4>
                            <ul className="lista-ranking">
                                { this.state.ranking.map((item , i) => <li key = {i}> {item.name} {this.props.detalle} {item.stock} </li>) }
                            </ul>
                         </div>
                    
                </div>

                );
            }
        }
    }
export default Ranking;