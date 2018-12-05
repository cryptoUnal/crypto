import React, { Component } from 'react'
import Map from '../components/Map'
import Entity from '../components/CreateEntity';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Entities from '../components/Entities';
import EntitiesZone from '../components/EntitiesZone';
import EntitiesType from '../components/EntitiesType';

import MapT from '../components/MapTest'


import Marker from '../components/Marker'


const client = new ApolloClient({

    uri: 'http://35.240.15.185/graphql'
});


class entities extends Component {

    state = {

        query: '',
        id: 0,
        points: [],
        modalVisible: false,
        typeModal: 0,
        center: {
            lat: 4.64,
            lng: -74.1
        },
        zoom: 11.7,
        location: false,
        combo: "all",
        value: "close",
        map: "allM",
        comboTipo: "all"

    }

    onChange(e) {
        this.setState({ combo: e.target.value });
        const value = this.state.value;

    }
    onChangeCreate(e) {
        this.setState({ value: e.target.value });
        //const value = this.state.value;

    }

    onChangeType(e) {
        this.setState({ comboTipo: e.target.value });
        //const value = this.state.value;

    }

    render() {
        return (


            <header className="masthead bg-info text-black text-center" style={{ "paddingTop": "calc(4rem + 60px)" }}>

            <ApolloProvider client={client}>

                <div className="container mb-5 mt-4" >
                    <nav className="navbar navbar-white " >
                        <h2 className="text-center text-uppercase text-secondary mb-0 m-auto">Mapa de Entidades</h2>
                    </nav>
                </div>
                <div className="row">

                    <div className="col-sm-4">
                        <div className="float-center col-sm">
                            <label htmlFor="select1" className="text-black" > Filtrar por Zona </label>
                            <select value={this.state.combo} onChange={this.onChange.bind(this)} className="form-control">
                                <option value="all">Todas</option>
                                <option value="Zona Norte">Zona Norte</option>
                                <option value="Zona Sur">Zona Sur</option>
                                <option value="Zona Occidente">Zona Occidente</option>
                                <option value="Zona Oriente">Zona Oriente</option>
                            </select>

                        </div>

                        <div className="float-center col-sm">
                            <label htmlFor="select2" className="text-black" > Filtrar por Tipo </label>
                            <select value={this.state.comboTipo} onChange={this.onChangeType.bind(this)} className="form-control">
                                <option value="all">Todos</option>
                                <option value="Hospital">Hospital</option>
                                <option value="Colegio">Colegio</option>
                                <option value="Estacion Policia">Estacion Policia</option>
                                <option value="Fiscalia">Fiscalia</option>
                            </select>

                        </div>
                        <br></br>
                        <div className="container mb-4">
                            <div className=" btn-group-vertical">
                                <button onClick={this.onChangeCreate.bind(this)} type="button" className="btn btn-primary btn-sm" value="show">Crear Entidad</button>
                            </div>

                        </div>


                    <div className="container col-md-4 mx-auto">

                      {this.state.value==="show" &&
                          <div className="row  ">
                            <div className=" btn-group-vertical mx-auto mb-5">
                                <button onClick={this.onChangeCreate.bind(this)} type="button" className="btn btn-primary btn-sm" value="close">Cerrar</button>
                            </div>

                            <div className="mx-auto">
                               <Entity/>
                            </div>

                          </div> }

                        {this.state.value==="close" &&
                        <div className="  mx-auto">
                          </div> }
                    </div>

                    {this.state.combo==="all" &&   <Entities /> }
                    {this.state.combo!=="all" &&  <EntitiesZone zone={this.state.combo}/>  }
                    {this.state.comboTipo==="all" &&   <Entities /> }
                    {this.state.comboTipo!=="all" &&   <EntitiesType type={this.state.comboTipo} /> }



                    </div>





                    <div className="col-xl">
                        {/* <MapT
                            zoom={this.state.zoom}
                             center={this.state.center}
                             points={this.state.points}

                        /> */}
                    {this.state.map==="allM" &&   <MapT zoom={this.state.zoom}
                             center={this.state.center}
                             points={this.state.points}/> }


                    </div>
                </div>
                </ApolloProvider>

            </header>

        )
    }
}


export default entities;
