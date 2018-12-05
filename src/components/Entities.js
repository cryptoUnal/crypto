//import React from 'react';
import React, { Component } from 'react'

import { Query } from "react-apollo";
import gql from "graphql-tag";





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


const Entity = () => (
    <Query
      query={getEntities}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :( </p>;
        const a = data.allEntities.map((enti,i) =>{
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
        return (
  
          <div className="row mt-4">
              {a}
          </div>
  
        );
      }}
    </Query>
  );
  export default Entity;
  