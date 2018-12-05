import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";



const getIntrafamilies = gql`
  {
    allIntrafamilies{
    locality
      victim
     aggressor
    	criminal_complaint
    }
  }
`;


const Murder = () => (
  <Query
    query={getIntrafamilies}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :( </p>;
      console.log("murder", data.allIntrafamilies)
      const a = data.allIntrafamilies.map((intra,i) =>{
          return(
            <div className="col-md-3">
              <div className="card mt-5">
                <div className="card-header">
                  <h4>{intra.locality}</h4>
                </div>

                <div className="card-body">
                  <p> <mark>Victima: </mark> {intra.victim}</p>
                  <p> <mark>Agresor: </mark> {intra.aggressor}</p>
                  <p>{intra.criminal_complaint}</p>
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
