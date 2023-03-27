export function listaMarcas() {
  const token = sessionStorage.getItem('token');

  fetch('http://localhost:3000/marcas', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
