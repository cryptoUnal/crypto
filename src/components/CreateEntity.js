import React, { Component } from 'react'
import gql from 'graphql-tag'

import { Mutation } from 'react-apollo'

const MAKE_ENTITY = gql`
  mutation createEntity (
    $typeEntity: String!,
    $description: String!,
    $address: String!,
    $coordinates: String!,
    $zone: String!,
    $name: String!,
  ){
    createEntity(entity:{
      typeEntity: $typeEntity
      description: $description
      address: $address
      coordinates: $coordinates
      zone: $zone
      name: $name


    }){
      typeEntity
      description
      address
      coordinates
      zone
      name

    }
  }
`
class createEntity extends Component {
  render() {
    let i_typeEntity, i_description, i_address, i_coordinates, i_zone, i_name
    return (
      <Mutation mutation={MAKE_ENTITY}>
        {
          createEntity => (
            <div>
              <form
                onSubmit={e => {
                  e.preventDefault()
                  createEntity({
                    variables: {

                      typeEntity: i_typeEntity.value,
                      description: i_description.value,
                      zone: i_zone.value,
                      address: i_address.value,
                      coordinates: i_coordinates.value,
                      name: i_name.value
                    }
                  })

                  i_typeEntity.value = ""
                  i_description.value = ""
                  i_address.value = ""
                  i_coordinates.value = ""
                  i_zone.value = ""
                  i_name.value = ""
                }}
              >



                <div className="form-group">

                  <input
                    className="form-control"
                    placeholder="Tipo de Entidad"
                    ref={typeEntity => { i_typeEntity = typeEntity }} required />
                </div>

                <div className="form-group">

                  <input
                    className="form-control"
                    placeholder="Zona"
                    ref={zone => { i_zone = zone }} required />
                </div>

                <div className="form-group">

                  <input
                    className="form-control"
                    placeholder="Nombre"
                    ref={name => { i_name = name }} required />
                </div>


                <div className="form-group">

                  <input
                    className="form-control"
                    placeholder="Direccion"
                    ref={address => { i_address = address }} required />
                </div>

                <div className="form-group">

                  <input
                    className="form-control"
                    placeholder="Descripcion"
                    ref={description => { i_description = description }} required />
                </div>

                <div className="form-group">

                  <input
                    className="form-control"
                    placeholder="Coordenadas"
                    ref={coordinates => { i_coordinates = coordinates }} required />
                </div>



                <br />
                <div className="mx-auto">
                  <button type="submit"> Crear  </button>
                </div>
              </form>
            </div>
          )
        }
      </Mutation>
    )
  }
}

export default createEntity
