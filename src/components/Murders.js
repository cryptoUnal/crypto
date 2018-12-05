import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";



const getMurders = gql`
  {
    allMurders{
    	locality
      body_count
      description
    }
  }
`;


const Murder = () => (
  <Query
    query={getMurders}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :( </p>;
      console.log("murder", data.allMurders)
      const a = data.allMurders.map((mur,i) =>{
          return(
            <div className="col-md-3">
              <div className="card mt-5">
                <div className="card-header">
                  <h4>{mur.locality}</h4>
                </div>

                <div className="card-body">
                  <p> <mark>Asesinatos: </mark> {mur.body_count}</p>
                  <p> <mark>description: </mark> {mur.description}</p>
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
