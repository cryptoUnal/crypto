import { Query } from "react-apollo";
import gql from "graphql-tag";
import React, { Component } from 'react';


const getByType= gql`
  query entityByType($TypeEntity: String!){
    entityByType(TypeEntity: $TypeEntity){
        typeEntity
        description
        address
        coordinates
        zone
        name
    }
  }
`

class TypeEntity extends Component {
  render() {
    const TypeEntity = this.props.type
    console.log(TypeEntity)
    return(
      <Query query={getByType} variables={{TypeEntity}}>
        {({loading, error, data}) => {
          if(loading) return "Loading..."
          if(error) return <h2 className="mt-5">No hay datos para este Tipo</h2>
          console.log("zone", data.entityByType)
          const a = data.entityByType.map((enti,i) =>{
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

export default TypeEntity
