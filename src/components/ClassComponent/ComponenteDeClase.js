import { Component } from "react";

class ComponenteDeClase extends Component{
    render(){
        return(
            <div>
                <h1>Esto es {this.props.nombre}</h1> 
                <h2>Subtitulo de class component</h2>
            </div>
        )
    }
}

export default ComponenteDeClase;