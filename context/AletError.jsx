import Swal from 'sweetalert2';

export function AlertVoto({ title, text }) {
  // Configuración de la alerta
  const alertVoto = {
    icon: 'error',
    title: title || 'EL user ya voto',
    text: text || 'YOU UNDERSTOOD?'
  };

  // Mostrar la alerta al renderizar el componente
  Swal.fire(alertVoto);

  return null;
}

export function AlertVotoEXitoso({ title, text }) {
  // Configuración de la alerta
  const alertVoto = {
    icon: 'success',
    title: title || 'usted ha realizado su voto',
    text: text || 'YOU UNDERSTOOD?'
  };

  // Mostrar la alerta al renderizar el componente
  Swal.fire(alertVoto);

  return null;
}
export function AlertError({ title, text }) {
  // Configuración de la alerta
  const alertVoto = {
    icon: 'error',
    title: title || 'Error en el server',
    text: text || 'YOU UNDERSTOOD?'
  };

  // Mostrar la alerta al renderizar el componente
  Swal.fire(alertVoto);

  return null;
}
