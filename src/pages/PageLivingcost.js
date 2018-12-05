import React, { Component } from 'react';
import Cost from '../components/Costs';
import CostLocal from '../components/CostLocality';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";



const client = new ApolloClient({

 uri: 'http://35.240.15.185/graphql'
});


class Livingcost extends Component {

    constructor(props) {
      super(props);
      this.state = { value: 'all'};
    }
    onChange(e) {
      this.setState({ value: e.target.value });
      const value = this.state.value;

    }


    render() {

      return (
        <div className="App">
                <header className="masthead bg-info text-black text-center" style={{ "paddingTop": "calc(6rem + 50px)" }}>
                    <ApolloProvider client={client}>
                      <div className="container" >
                        <nav className="navbar navbar-white " >
                          <h2 className="text-center text-uppercase text-secondary mb-0 m-auto col-md-8" >COSTO DE VIDA POR ZONAS</h2>
                          <div className=" float-right col-md-3">
                            <div className="form-group container">
                              <label htmlFor="select1" className = "text-black" > Filtrar por Localidad </label>
                              <select value={this.state.value}  onChange={this.onChange.bind(this)} className="form-control">
                                <option value="all">Todas</option>
                                <option value="Usaquen">Usaquen</option>
                                <option value="Chapinero">Chapinero</option>
                                <option value="Santa Fe">Santa Fe</option>
                                <option value="San Cristobal">San Cristobal</option>
                                <option value="Usme">Usme</option>
                                <option value="Tunjuelito">Tunjuelito</option>
                                <option value="Bosa">Bosa</option>
                                <option value="Kennedy">Kennedy</option>
                                <option value="Fontibon">Fontibon</option>
                                <option value="Engativa">Engativa</option>
                                <option value="Suba">Suba</option>
                                <option value="Barrios Unidos">Barrios Unidos</option>
                                <option value="Teusaquillo">Teusaquillo</option>
                                <option value="Los Martires">Los Martires</option>
                                <option value="Antonio Nariño">Antonio Nariño</option>
                                <option value="Puente Aranda">Puente Aranda</option>
                                <option value="La Candelaria">La Candelaria</option>
                                <option value="Rafael Uribe Uribe">Rafael Uribe Uribe</option>
                                <option value="Ciudad Bolivar">Ciudad Bolivar</option>
                                <option value="Sumapaz">	Sumapaz</option>
                              </select>
                            </div>
                          </div>
                        </nav>
                        {this.state.value==="all" &&   <Cost /> }
                        {this.state.value!=="all" &&  <CostLocal local={this.state.value}/>  }

                      </div>
                    </ApolloProvider>

                </header>
            </div>
      );
  }
}

export default Livingcost;
