import { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function FormularioCliente() {
  const [nombre, setNombre] = useState('');
  const [tipoMaqueta, setTipoMaqueta] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'pedidos'), {
        nombre,
        tipoMaqueta,
        descripcion,
        fecha: new Date()
      });
      alert('Pedido registrado exitosamente');
      setNombre('');
      setTipoMaqueta('');
      setDescripcion('');
    } catch (error) {
      alert('Error al registrar pedido: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Pedido de Maqueta Escolar</h2>
      <input type="text" placeholder="Nombre del cliente" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      <input type="text" placeholder="Tipo de maqueta" value={tipoMaqueta} onChange={(e) => setTipoMaqueta(e.target.value)} required />
      <textarea placeholder="Descripción del pedido" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
      <button type="submit">Enviar Pedido</button>
    </form>
  );
}

export default FormularioCliente;
