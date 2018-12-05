import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const MAKE_CRIME = gql`
  mutation createCrime (
    $date: String!,
    $state: String!,
    $day: String!,
    $city: String!,
    $hour: String,
    $zone: String!,
    $neighbourhood: String!,
    $site_class: String!,
    $weapon_used: String!,
    $mobility_agresor: String!,
    $mobility_victim: String!,
    $age: String!,
    $gender: String!,
     $marital_status:  String!,
     $country_origin:  String!,
     $kind_employee:  String!,
     $occupation:  String!,
     $scholarship:  String!,

  ){
    createCrime(crime:{
      date: $date
      state: $state
      day: $day
      city: $city
      hour: $hour
      zone: $zone
      neighbourhood: $neighbourhood
      site_class: $site_class
      weapon_used: $weapon_used
      mobility_agresor: $mobility_agresor
      mobility_victim: $mobility_victim
      age: $age,
      gender: $gender,
      marital_status:  $marital_status,
      country_origin:  $country_origin,
      kind_employee:  $kind_employee,
      occupation:  $occupation,
      scholarship:  $scholarship,


    }){
      date
      state
      day
      city
      hour
      zone
      neighbourhood
      site_class
      weapon_used
      mobility_agresor
      mobility_victim
      age
      gender
      marital_status
      country_origin
      kind_employee
      occupation
      scholarship
    }
  }
`
class DenounceMutation extends Component {
  render() {
    let i_date, i_zone, i_hour, i_ni, i_name, i_lastname, i_neighbourhood, i_age, i_gender, i_maritalstatus,
        i_siteclass, i_weapon_used, i_mobility_agresor, i_mobility_victim, i_description
    return(
      <Mutation mutation={MAKE_CRIME}>
        {
          createCrime => (
            <div>
              <form 
                onSubmit={e => {
                  e.preventDefault()
                  createCrime({
                    variables:{

                      date: i_date.value,
                      state: "en investigacion",
                      day: "",
                      city: "Bogotá",
                      hour: i_hour.value,
                      zone: i_zone.value,
                      neighbourhood: i_neighbourhood.value,
                      site_class: i_siteclass.value,
                      weapon_used: i_weapon_used.value,
                      mobility_agresor: i_mobility_agresor.value,
                      mobility_victim: i_mobility_victim.value,
                      age: i_age.value,
                      gender: i_gender.value,
                      marital_status:  i_maritalstatus.value,
                      country_origin:  "",
                      kind_employee:  "",
                      occupation:  "",
                      scholarship:  ""
                    }
                  })





                  i_name.value=""
                  i_lastname.value=""
                  i_ni.value=""
                  i_description.value=""

                  i_date.value=""
                  i_hour.value=""
                  i_zone.value=""
                  i_neighbourhood.value=""
                  i_siteclass.value=""
                  i_weapon_used.value=""
                  i_mobility_victim.value=""
                  i_mobility_agresor.value=""
                  i_age.value=""
                  i_gender.value=""
                  i_maritalstatus.value=""



                }}
              >

                <input
                className="form-control-campaign"
                placeholder="identificacion"
                ref={  ni => {i_ni = ni}} required />

              <input
                className="form-control-campaign"
                placeholder="nombre"
                ref={  name => {i_name = name}} required/>


                <input
                className="form-control-campaign"
                placeholder="apellidos"
                ref={  lastname => {i_lastname = lastname}}  required/>

                <input
                className="form-control-campaign"
                placeholder="edad"
                ref={  age => {i_age = age}}  />

                <input
                className="form-control-campaign"
                placeholder="genero"
                ref={  gender => {i_gender = gender}}  />

                <input
                className="form-control-campaign"
                placeholder="estado civil"
                ref={  marital_status => {i_maritalstatus = marital_status}}  />

                <input
                className="form-control-campaign"
                placeholder="fecha del hurto dia/mes/año"
                ref={  date => {i_date = date}} required />

                <input
                className="form-control-campaign"
                placeholder="hora del hurto 00:00"
                ref={  hour => {i_hour = hour}}required  />

                <input
                className="form-control-campaign"
                placeholder="localidad del hurto"
                ref={  neighbourhood => {i_neighbourhood = neighbourhood}} required />


                <input  className="form-control-campaign"
                placeholder="zona del hurto"  ref={  zone => {i_zone = zone}}  />

                <input  className="form-control-campaign"
                placeholder="clase de sitio"  ref={  site_class => {i_siteclass = site_class}}  />

                <input  className="form-control-campaign"
                placeholder="arma usada"
                ref={  weapon_used => {i_weapon_used = weapon_used}} required />


                <input  className="form-control-campaign"
                placeholder="movilidad del agresor"
                ref={  mobility_agresor => {i_mobility_agresor = mobility_agresor}} required />

                <input  className="form-control-campaign"
                placeholder="movilidad de la victima"
                ref={  mobility_victim => {i_mobility_victim = mobility_victim}}  />

                <input  className="form-control-campaign"
                  maxlength="400"
                placeholder="descripcion del hecho"
                ref={  description => {i_description= description}} required />

              <br/>
              <div>
                <button type="submit"> Denunciar  </button>
              </div>
              </form>
            </div>
          )
        }
      </Mutation>
    )
  }
}

export default DenounceMutation


// class Formulario extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: '',
//       hour: '',
//       identification: '',
//       name: '',
//       lastname: '',
//       zone: '',
//       site_class: '',
//       neighbourhood: '',
//       dateError: '',
//       hourError: '',
//
//     }
//   }
//
//
//   handleSubmit(event) {
//     event.preventDefault();
//     const date = this.state.date;
//     const hour = this.state.hour;
//     const name = this.state.name;
//     const lastname = this.state.lastname;
//     const zone = this.state.zone;
//     const neighbourhood = this.state.neighbourhood;
//     const identification = this.state.identification;
//
//     console.log(this.state.date)
//     console.log(this.state.hour)
//
//     if (!date || date.length < 7) {
//       this.setState({ dateError: 'Escriba fecha valida' })
//       return;
//     }
//
//     if (!hour || hour.length < 4) {
//       this.setState({ hourError: 'Hora invalida' })
//       return;
//     }
//
//     if (!name || name.length < 4) {
//       this.setState({ hourError: 'nombre invalido' })
//       return;
//     }
//
//   }
//
//   handleDateChange(event) {
//     this.setState({ date: event.target.value });
//   }
//
//   handleHourChange(event) {
//     this.setState({ hour: event.target.value });
//   }
//
//   handleIdentiChange(event) {
//     this.setState({ identification: event.target.value });
//   }
//
//   handleNameChange(event) {
//     this.setState({ name: event.target.value });
//   }
//   handleLastnameChange(event) {
//     this.setState({ lastname: event.target.value });
//   }
//
//   handleZoneChange(event) {
//     this.setState({ zone: event.target.value });
//   }
//
//   handleSiteclassChange(event) {
//     this.setState({ site_class: event.target.value });
//   }
//
//   handleNeighbourhoodChange(event) {
//     this.setState({ neighbourhood: event.target.value });
//   }
//
//
//     var make_crime = ` mutation{
//         createCrime( crime::{
//           date: "${date}",
//           hour: "${hour}",
//           state: "impune",
//           zone: "${zone}",
//           neighbourhood: "${neighbourhood}",
//           site_class: "${site_class}",
//           state: "${state}",
//           mobility_agresor: "bicicleta",
//           mobility_victim: "a pie"
//
//         }){
//           date
//         }
//       }
//
//     }
//     `
//
//     GlReuqest(
//     make_crime,
//     (data) => {
//       if (data && data.auth) {
//         this.props.onSubmit(data.auth.token);
//       }
//     },
//     (error) => {
//       if(Array.isArray(error)){
//         let errors = []
//         error.forEach((e) => {
//           errors.push(`${e.message}`)
//         })
//         this.setState({ passError: errors })
//       }
//     }
//   );
//
//
//
//
//   render() {
//
//     return (
//       <form name="sentMessage" id="contactForm" noValidate="novalidate" onSubmit={this.handleSubmit.bind(this)} >
//         <div className="control-group">
//           <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
//             <label>Fecha</label>
//             <input className="form-control text-center" type="text" value={this.state.date} placeholder="Fecha dia/mes/año" onChange={this.handleDateChange.bind(this)} />
//             <p className="help-block text-danger">{this.state.dateError}</p>
//           </div>
//         </div>
//
//         <div className="control-group">
//           <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
//             <label>Hora</label>
//             <input className="form-control text-center" type="text" value={this.state.hour} placeholder="hora 00:00" onChange={this.handleHourChange.bind(this)} />
//             <p className="help-block text-danger">{this.state.hourError}</p>
//           </div>
//         </div>
//
//         <div className="control-group">
//           <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
//             <label>Identificacion</label>
//             <input className="form-control text-center" type="text" value={this.state.identification} placeholder="identificacion" onChange={this.handleIdentiChange.bind(this)} />
//           </div>
//         </div>
//
//         <div className="control-group">
//           <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
//             <label>Nombre</label>
//             <input className="form-control text-center" type="text" value={this.state.name} placeholder="nombre" onChange={this.handleNameChange.bind(this)} />
//           </div>
//         </div>
//
//         <div className="control-group">
//           <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
//             <label>Apellido</label>
//             <input className="form-control text-center" type="text" value={this.state.lastname} placeholder="apellido" onChange={this.handleLastnameChange.bind(this)} />
//           </div>
//         </div>
//
//
//         <div className="control-group">
//           <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
//             <label>Zona</label>
//             <input className="form-control text-center" type="text" value={this.state.zone} placeholder="zona" onChange={this.handleZoneChange.bind(this)} />
//           </div>
//         </div>
//
//         <div className="control-group">
//           <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
//             <label>Clase de sitio</label>
//             <input className="form-control text-center" type="text" value={this.state.site_class} placeholder="clase de sitio" onChange={this.handleSiteclassChange.bind(this)} />
//           </div>
//         </div>
//
//         <div className="control-group">
//           <div className="form-group floating-label-form-group controls mb-0 pb-2 text-center">
//             <label>Barrio</label>
//             <input className="form-control text-center" type="text" value={this.state.neighbourhood} placeholder="Barrio" onChange={this.handleNeighbourhoodChange.bind(this)} />
//           </div>
//         </div>
//
//
//         <br />
//
//
//
//         <div id="success"></div>
//         <div className="form-group text-center">
//           <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Enviar</button>
//         </div>
//       </form>
//     );
//   }
// }
