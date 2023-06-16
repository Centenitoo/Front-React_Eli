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
`;

const FlowerList = () => {
  const { loading, error, data } = useQuery(FEED_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <span className="Mostrar_Titulo">Pedidos Almacenados!: </span>

      {data.flowers.map((top) => (
        <div className="card card3" key={top.id}>
          <div className="inner">
            <h2 className="title">
              <p> ID: {top.id} </p>
            </h2>
            <div>
              <div className="subtitle">
                Flor: <span className="texto">{top.nombreflor}</span>
              </div>

              <div className="subtitle">
                Tipo_Flor: <span className="texto">{top.tipo}</span>
              </div>

              <div className="subtitle">
                Color_Flor: <span className="texto">{top.color}</span>
              </div>

              <div className="subtitle">
                Cantidad_Flores: <span className="texto">{top.cantidad}</span>
              </div>

              <div className="subtitle">
                Fecha_Pedido: <span className="texto">{top.fecha}</span>
              </div>

              <div className="subtitle">
                Ocasion_Pedido: <span className="texto">{top.ocasion}</span>
              </div>

              <div className="subtitle">
                Precio: <span className="texto">{top.precio}</span>
              </div>

              <div className="subtitle">
                Forma_pago: <span className="texto">{top.formadepago}</span>
              </div>

              <div className="subtitle">
                Existencias: <span className="texto">{top.existencias}</span>
              </div>

              <div className="subtitle">
                Direccion: <span className="texto">{top.direccion}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlowerList;
