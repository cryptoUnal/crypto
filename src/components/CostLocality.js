import { Query } from "react-apollo";
import gql from "graphql-tag";
import React, { Component } from 'react';


const getByLocality= gql`
  query livingcostByLocality($locality: String!){
    livingcostByLocality(locality: $locality){
      zone
      stratification
      costm2
      costbasketgoods
    }
  }
`

class CostLocality extends Component {
  render() {
    const locality = this.props.local
    return(
      <Query query={getByLocality} variables={{locality}}>
        {({loading, error, data}) => {
          if(loading) return "Loading..."
          if(error) return <h2 className="mt-5">No hay datos para esta localidad</h2>
          console.log("locality", data.livingcostByLocality)
          const a = data.livingcostByLocality.map((liv,i) =>{
              return(
                <div className="col-md-3">
                  <div className="card mt-5">
                    <div className="card-header">
                      <h4>{liv.zone}</h4>
                      <span className="badge badge-pill badge-danger ml-2">Estrato {liv.stratification}</span>

                      <p><mark>{liv.locality}</mark></p>
                    </div>
                    <div className="card-body">
                      <p>Costo por metro cuadrado: ${liv.costm2}</p>
                      <p>Costo canasta familiar: ${liv.costbasketgoods}</p>
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

export default CostLocality
