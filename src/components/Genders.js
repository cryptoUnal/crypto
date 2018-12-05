import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";



const getGenders= gql`
{
    allGenders{
   locality
    gtype
    criminal_complaint
    body_count
    }
}
`;


const Murder = () => (
  <Query
    query={getGenders}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :( </p>;
      console.log("murder", data.allGenders)
      const a = data.allGenders.map((gen,i) =>{
          return(
            <div className="col-md-3">
              <div className="card mt-5">
                <div className="card-header">
                  <h4>{gen.locality}</h4>
                </div>

                <div className="card-body">
                  <p> <mark>Tipo de genero: </mark> {gen.gtype}</p>
                  <p> <mark>Asesinatos: </mark>  { gen.body_count}</p>
                  <p>{gen.criminal_complaint}</p>
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
export default Murder;
