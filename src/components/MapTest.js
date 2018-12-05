import React, { Component } from 'react'
import GoogleMap from 'google-map-react'
import Marker from './Marker'
import Coords from './Entities'

import { Query } from "react-apollo";
import gql from "graphql-tag";

import {coordenadas} from './coordenadas.json';

const getEntities = gql`
 {
  allEntities {
    typeEntity
    description
    address
    coordinates
    zone
    name
  }
}
`

class MapTest extends Component {
    constructor(){
        super();
        this.state = {
          value: "all",
          center: {
            lat: 4.6385,
            lng: -74.085
          },
          zoom: 30,
          location: false,
          coordenadas
        }
      }
  render() {
    return(
  <Query
    query={getEntities}>
      {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :( </p>;
      const allentities = data.allEntities.map((enti,i) =>{
          var coord = enti.coordinates;
          var separador = ",";
          var arregloCoord = coord.split(separador);
          if(enti.coordinates == "34434 535353"){
            arregloCoord[0]= "4.563805";
            arregloCoord[1]= "-74.097612";
          }

          console.log(arregloCoord);
          return(
            <Marker
            lat={arregloCoord[1]}
            lng={arregloCoord[0]}
            name={enti.name}
            id={coord.id}
            image={'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00D900'}
            modal={0}
          />
          )
        })
      return (
      <div className="col-xl  m-auto">
        <div style={{height: '95vh', width: '100%'} }>
          <GoogleMap
            bootstrapURLKeys={{
                  key:'AIzaSyCtnm2uMp478jFPra_83mK0oliKLWfIzJc',
                  language: 'es',
              }}
            zoom={this.props.zoom}
            center={this.props.center}
          >
          {allentities}
          </GoogleMap>
        </div>
      </div>
      );
    }}
  </Query>

    )
  }
}


export default MapTest
