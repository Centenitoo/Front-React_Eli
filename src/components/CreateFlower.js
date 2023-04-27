import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import "../styles/GuardarInfo.css"

const CREATE_FLORES_MUTATION = gql`
mutation PostMutation(
  $nombreflor: String!
  $tipo: String!
  $color: String!
  $cantidad: Float!
  $fecha: String!
  $ocasion: String!
  $precio: Float!
  $formadepago: String!
  $existencias: Float!
  $direccion: String!
  ) {
    createFlower(nombreflor: $nombreflor, tipo: $tipo, color: $color, cantidad: $cantidad, fecha: $fecha, ocasion: $ocasion, precio: $precio, formadepago: $formadepago, existencias: $existencias, direccion: $direccion) {
      id
      nombreflor
      tipo
      color
      cantidad
      fecha
      ocasion
      precio
      formadepago
      existencias
      direccion
  }
  }
`;


const CreateFlores = () => {
  const [formState, setFormState] = useState({
    id: 0,
    nombreflor: '',
    tipo: '',
    color: '',
    cantidad: 0,
    fecha: '',
    ocasion: '',
    precio: 0,
    formadepago: '',
    existencias: 0,
    direccion: '',
  });

  const [CreateFlores] = useMutation(CREATE_FLORES_MUTATION, {
    variables: {
      nombreflor: formState.nombreflor,
      tipo: formState.tipo,
      color: formState.color,
      cantidad: formState.cantidad,
      fecha: formState.fecha,
      ocasion: formState.ocasion,
      precio: formState.precio,
      formadepago: formState.formadepago,
      existencias: formState.existencias,
      direccion: formState.direccion,
    }
  });

  return (
    <div class="About-us sombra" id="Caja">

      <section class="About-us-Titulo H1 Espacio" id="Titulo">
        Por favor llena los siguientes recuadros
      </section>

      <div id="Formulario-Info">
        <p class="Espacio Espacio2" >Nombre de flor: </p>
        <p class="Espacio Espacio2">Tipo de flor: </p>
        <p class="Espacio Espacio2">Color de flor: </p>
        <p class="Espacio Espacio2">Cantidad flor: </p>
        <p class="Espacio Espacio2" >Fecha entrega: </p>
        <p class="Espacio Espacio2">Ocasion arreglo: </p>
        <p class="Espacio Espacio2">Precio arreglo: </p>
        <p class="Espacio Espacio2">Forma de pago: </p>
        <p class="Espacio Espacio2">Existencias: </p>
        <p class="Espacio Espacio2">Direccion: </p>
      </div>

      <div id="Formulario-Rellenar" >

        <form onSubmit={(e) => { e.preventDefault(); CreateFlores(); }} >

          <div className="Espacio" >
            <input className="Respuesta" value={formState.nombreflor} onChange={(e) =>
              setFormState({ ...formState, nombreflor: e.target.value })}
              type="text" placeholder="Nombre de la flor" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.tipo} onChange={(e) =>
              setFormState({ ...formState, tipo: e.target.value })}
              type="text" placeholder="Tipo de la flor" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.color} onChange={(e) =>
              setFormState({ ...formState, color: e.target.value })}
              type="text" placeholder="Color de la flor" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.cantidad} onChange={(e) =>
              setFormState({ ...formState, cantidad: e.target.value })}
              type="number" placeholder="Cantidad de las flores" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.fecha} onChange={(e) =>
              setFormState({ ...formState, fecha: e.target.value })}
              type="text" placeholder="Fecha del pedido" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.ocasion} onChange={(e) =>
              setFormState({ ...formState, ocasion: e.target.value })}
              type="text" placeholder="Ocasion" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.precio} onChange={(e) =>
              setFormState({ ...formState, precio: e.target.value })}
              type="number" placeholder="Precio del pedido" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.formadepago} onChange={(e) =>
              setFormState({ ...formState, formadepago: e.target.value })}
              type="text" placeholder="Forma de pago" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.existencias} onChange={(e) =>
              setFormState({ ...formState, existencias: e.target.value })}
              type="number" placeholder="Existencias de las flores" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.direccion} onChange={(e) =>
              setFormState({ ...formState, direccion: e.target.value })}
              type="text" placeholder="Direccion a entregar" />
          </div>

          <div id="Formulario-Boton">
              <input type="submit" name="Mensaje" value="Enviar" class="Boton"></input>
          </div>
        </form>
      </div>

      <div class="Informacion">
        <h1 class="H1">Contactar Alumno: </h1>
        <ul>
          <li>Número Telefonico: <br></br> <p>+52 272 259 4250</p></li>
          <li>Correo Electronico: <br></br> <p> S20020310@estudiantes.uv.mx</p></li>
          <li>Matricula <br></br> <p>S20020310 </p> </li>
        </ul>
      </div>
    </div>
  );
};

export default CreateFlores;