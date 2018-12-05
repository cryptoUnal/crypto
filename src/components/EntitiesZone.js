import { Query } from "react-apollo";
import gql from "graphql-tag";
import React, { Component } from 'react';


const getByZone= gql`
  query entityByZone($Zone: String!){
    entityByZone(Zone: $Zone){
        typeEntity
        description
        address
        coordinates
        zone
        name
    }
  }
`

class ZoneEntity extends Component {
  render() {
    const Zone = this.props.zone
    return(
      <Query query={getByZone} variables={{Zone}}>
        {({loading, error, data}) => {
          if(loading) return "Loading..."
          if(error) return <h2 className="mt-5">No hay datos para esta Zona</h2>
          const a = data.entityByZone.map((enti,i) =>{
              return(
                <div className="col-sm-4">
                <div className="card mt-5">
                  <div className="card-header">
                  <span className="badge badge-pill badge-info ml-2">Tipo {enti.typeEntity}</span>
                    <h4>{enti.name}</h4>  
                    <p><mark>{enti.zone}</mark></p>
                  </div>
                  <div className="card-body">
                    <p>Direccion: {enti.address}</p>
                    <p>Descripcion: {enti.description}</p>
                  </div>
                </div>
              </div>
              )
            })
          return(
            <div className="row mt-4">
                {a}
            </div>

          )
        }}
      </Query>
    )
  }
}

export default ZoneEntity
