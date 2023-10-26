import React, { Component } from 'react';
import axios from 'axios';

class ApiExample extends Component {
  constructor() {
    super();
    this.state = {
      data: [], // Almacenaremos los datos de la API aquí
    };
  }

  componentDidMount() {
    // Realizamos una solicitud GET a la API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // Actualizamos el estado con los datos recibidos
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
      });
  }

  render() {
    return (
      <div>
        <h1>Lista de Publicaciones</h1>
        <ul>
          {this.state.data.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ApiExample;
