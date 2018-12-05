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
`;
// const Entity = () => (
//   <Query
//     query={getEntities}>
//       {({ loading, error, data }) => {
//       if (loading) return <p>Loading...</p>;
//       if (error) return <p>Error :( </p>;
//         console.log("holaaaa", data.allEntities)
//       const allentities = data.allEntities.map((enti,i) =>{
//           var coord = enti.coordinates;
//           var separador = ",";
//           var arregloCoord = coord.split(separador);
//           console.log(arregloCoord);
//           return(
//             <Marker
//             lat={arregloCoord[0]}
//             lng={arregloCoord[1]}
//             name={enti.name}
//             id={coord.id}
//             image={'http://i.stack.imgur.com/orZ4x.png'}
//             modal={0}
//           />
//           )
//         })
//       return (
//             {allentities}

//       );
//     }}
//   </Query>



// );
class Map extends Component {
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
    console.log(this.props.points);
    const coords = this.state.coordenadas.map((coord, i)=>{
        return(
          <Marker
          lat={coord.latitude}
          lng={coord.longitude}
          name={'hello'}
          id={coord.id}
          image={'http://i.stack.imgur.com/orZ4x.png'}
          handleOpenModal={this.props.handleOpenModal}
          modal={0}
        />
        )

    })

    return(
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
          {coords}
          </GoogleMap>
        </div>
      </div>
    )
  }

}

export default Map
