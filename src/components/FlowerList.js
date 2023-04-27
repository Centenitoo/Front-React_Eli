import React from 'react';
import { useQuery, gql } from '@apollo/client';
import "../styles/Mostrar.css"

const FEED_QUERY = gql`
  
query {
  flowers {
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
`
  ;
const FlowerList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (

    <div>
      <span class="Mostrar_Titulo">Pedidos Almacenados!: </span>

      {data && data.flowers.map((top) => {
        return (
          <div class="card card3">
            <div class="inner">
              <h2 class="title"> <p> ID:  {top.id} </p></h2>
              <div key={top.id}>
                <div className='subtitle'> Flor:
                  <span className='texto'> {top.nombreflor} </span>
                </div>

                <div className='subtitle'> Tipo_Flor:
                  <span className='texto'> {top.tipo} </span>
                </div>

                <div className='subtitle'> Color_Flor:
                  <span className='texto'> {top.color} </span>
                </div>

                <div className='subtitle'> Cantidad_Flores:
                  <span className='texto'> {top.cantidad} </span>
                </div>

                <div className='subtitle'> Fecha_Pedido:
                  <span className='texto'> {top.fecha} </span>
                </div>

                <div className='subtitle'> Ocasion_Pedido:
                  <span className='texto'> {top.ocasion} </span>
                </div>

                <div className='subtitle'> Precio:
                  <span className='texto'> {top.precio} </span>
                </div>

                <div className='subtitle'> Forma_pago:
                  <span className='texto'> {top.formadepago} </span>
                </div>

                <div className='subtitle'> Existencias:
                  <span className='texto'> {top.existencias} </span>
                </div>

                <div className='subtitle'> Direccion:
                  <span className='texto'> {top.direccion} </span>
                </div>
              </div>
            </div>
          </div>

        )
      })}

    </div>
  );
};

export default FlowerList;